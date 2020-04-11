import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HooksExample() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  const ref = useRef();
  useEffect(() => {
    console.log('Hooks3 useEffect');
    gsap.to(ref.current, { duration: 0.5, x: show ? 0 : 100 });
  }, [show]);// Only re-run the effect if count changes


  return (
    <section data-name="Hooks2 useRef">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <div className="box" ref={ref} />
      {show.toString()}
      <button onClick={() => { setShow(!show); }}>show
      </button>
    </section>
  );
}
