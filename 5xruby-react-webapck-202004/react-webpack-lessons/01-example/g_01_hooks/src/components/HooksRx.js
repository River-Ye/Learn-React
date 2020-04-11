import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import gsap from 'gsap';
import styled from 'styled-components';
import { fromEvent, Observable } from 'rxjs';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  concatAll,
  withLatestFrom,
  filter,
  takeUntil,
  startWith,
} from 'rxjs/operators';

const StyledRoot = styled.section`
  height: 2000px;
  background-color: rgba(0,0,0,0.05);
  background-image: repeating-linear-gradient(0deg, transparent, transparent 7px, rgba(0,0,0,0.2) 1px, transparent 8px),repeating-linear-gradient(90deg, transparent, transparent 7px, rgba(0,0,0,0.2) 1px, transparent 8px);
  background-size: 8px 8px;
`;
const StyledVideoWrap = styled.div`
  position: relative;
  width: 640px;
  height: 360px;
  background-color: #2ecc71;
  video {
    position: absolute;
    top :0;
    left :0;
    width: 640px;
    height: 360px;
    &.fixed {
      cursor: all-scroll;
      z-index: 99999;
    }
  }
`;
const StyledBigText = styled.div`
  font-size: 100px;
  padding: 20px 0;
`;


type Position = {
  x: number,
  y: number
}

const clamp = (value:number, max:number, min:number):number => Math.min(Math.max(value, min), max);
// https://ithelp.ithome.com.tw/articles/10187756
export default function HooksRx() {
  const [videoOverScreen, setVideoOverScreen] = useState(false);
  const videoWrapRef = useRef(null); // HTMLDivElement
  const videoRef = useRef(null); // HTMLVideoElement
  useEffect(() => {
    const scroll:Observable<boolean> = fromEvent(window, 'scroll')
      .pipe(
        debounceTime(10),
        startWith('3q9527'),
        map(() => videoWrapRef.current.getBoundingClientRect().top < 0),
        distinctUntilChanged(),
      );
    const scroll$ = scroll.subscribe((isVideoOverScreenTop:boolean) => {
      console.log('isVideoOverScreenTop', isVideoOverScreenTop);
      const videoWrapRect = videoWrapRef.current.getBoundingClientRect();
      if (isVideoOverScreenTop) {
        gsap.set(videoRef.current, { position: 'fixed' });
        gsap.fromTo(videoRef.current,
          {
            left: videoWrapRect.left,
            top: 0,
          },
          {
            duration: 0.5,
            left: window.innerWidth - 640,
            top: 0,
            onComplete: () => setVideoOverScreen(true),
          });
      } else {
        if (!videoRef.current.classList.contains('fixed')) {
          return;
        }
        gsap.to(videoRef.current, {
          left: videoWrapRect.left,
          top: 0,
          duration: 0.35,
          onComplete: () => {
            setVideoOverScreen(false);
            gsap.set(videoRef.current, { left: 0, top: 0, position: 'absolute' });
          },
        });
      }
    });
    // dragAndDrop
    const mouseDown = fromEvent(videoRef.current, 'mousedown');
    const mouseUp = fromEvent(document, 'mouseup');
    const mouseMove = fromEvent(document, 'mousemove');
    const dragAndDrop:Observable<Position> = mouseDown
      .pipe(
        filter(() => videoRef.current.classList.contains('fixed')),
        map(() => mouseMove
          .pipe(
            takeUntil(mouseUp),
          )),
        concatAll(), // https://medium.com/allen%E7%9A%84%E6%8A%80%E8%A1%93%E7%AD%86%E8%A8%98/switchall-mergeall-concatall-%E7%AD%86%E8%A8%98-b64f269844cd
        withLatestFrom(mouseDown, (move, down) => ({
          x: clamp(move.clientX - down.offsetX, window.innerWidth - 640, 0),
          y: clamp(move.clientY - down.offsetY, window.innerHeight - 360, 0),
        })),
      );

    const dragAndDrop$ = dragAndDrop.subscribe(({ x, y }:Position) => {
      gsap.set(videoRef.current, {
        left: x,
        top: y,
      });
    });

    return () => {
      scroll$.unsubscribe();
      dragAndDrop$.unsubscribe();
    };
  }, []);

  const videoClass = clsx(videoOverScreen && 'fixed');
  return (
    <StyledRoot>
      <h1>HooksRx</h1>
      <StyledBigText>RxJS</StyledBigText>
      <StyledVideoWrap ref={videoWrapRef}>
        <video
          ref={videoRef}
          className={videoClass}
          muted
          autoPlay
          loop
          playsInline
          src="https://rawgit.com/bower-media-samples/big-buck-bunny-480p-30s/master/video.mp4"
          type="video/mp4"
        />
      </StyledVideoWrap>
      <StyledBigText>RxJS</StyledBigText>
      <StyledBigText>RxJS</StyledBigText>
    </StyledRoot>
  );
}
