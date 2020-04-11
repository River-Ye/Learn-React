import React, { useState, useLayoutEffect, useEffect } from 'react';

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

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);
  const refBox = React.useRef(null);
  console.log('1 render');
  useLayoutEffect(() => {
    console.log('2 useLayoutEffect');
  });

  useEffect(() => {
    console.log('3 useEffect');
    if (count === 3) {
      refBox.current.style.top = '100px';
      alert(count);
      setCount(count + 1);
    } else {
      refBox.current.style.top = '0px';
    }
  });

  return (
    <section>
      <h1>Hooks8 UseEffectDemo</h1>
      <p>You clicked {count} times</p>
      <div className="demo-box demo-box--black" ref={refBox} />
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </section>
  );
};

const log = msg => console.log(`%c${msg}`, 'background: #e74c3c; color: white');
const UseLayoutEffectDemo = () => {
  const [count, setCount] = useState(0);
  const refBox = React.useRef(null);
  log('1 render');

  useLayoutEffect(() => {
    log('2 useLayoutEffect');
    if (count === 3) {
      refBox.current.style.top = '100px';
      alert(count);
      setCount(count + 1);
    } else {
      refBox.current.style.top = '0px';
    }
  });
  useEffect(() => {
    log('3 useEffect');
  });

  return (
    <section>
      <h1>Hooks8 UseLayoutEffectDemo</h1>
      <p>You clicked {count} times</p>
      <div className="demo-box" ref={refBox} />
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </section>
  );
};

export default function Hooks8() {
  return (
    <section>
      <UseEffectDemo />
      <UseLayoutEffectDemo />
    </section>
  );
}
