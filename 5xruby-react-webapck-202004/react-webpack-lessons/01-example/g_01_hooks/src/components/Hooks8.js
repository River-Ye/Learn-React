import React, {
  useState, useLayoutEffect, useEffect, useRef,
} from 'react';

/**
 * useEffect
 * 1 state 或是 props 更新
 * 2 React render
 * 3 Browser 更新畫面
 * 4 useEffect 執行
 */

/**
 * useLayoutEffect
 * 1 state 或是 props 更新
 * 2 React render
 * 3 useLayoutEffect 執行, 然後 React 會等他結束
 * 4 Browser 更新畫面
 */

const logEffect = msg => console.log(`%c${msg}`, 'background: #1abc9c; color: white');
const logLayoutEffect = msg => console.log(`%c${msg}`, 'background: #e74c3c; color: white');

interface Props {
  isUseLayoutEffect : boolean,
  log: (msg:any)=> {}
}
const BaseExample = ({ isUseLayoutEffect, log }:Props) => {
  const [count, setCount] = useState(0);
  const boxRef = useRef();

  log('1 render');

  const useAlias = isUseLayoutEffect
    ? useLayoutEffect
    : useEffect;

  useAlias(() => {
    const { current }:{current:HTMLDivElement} = boxRef;
    if (count === 1) {
      setCount(10 + Math.random() * 200);
      current.style.top = '-50px';
      alert(1);
    } else {
      current.style.top = 0;
    }
  }, [count]);

  useLayoutEffect(() => {
    log('2 useLayoutEffect');
  });
  useEffect(() => {
    log('3 useEffect');
  });

  return (
    <section data-name="Hooks8 UseLayoutEffectDemo">
      <p>You clicked {count} times</p>
      <div
        className={`box ${isUseLayoutEffect ? '' : 'style-green'}`}
        ref={boxRef}
      />
      <button onClick={() => setCount(1)}>
          Click me
      </button>
    </section>
  );
};


export default function Hooks8() {
  return (
    <section>
      <BaseExample log={logEffect} />
      <BaseExample isUseLayoutEffect log={logLayoutEffect} />
    </section>
  );
}
