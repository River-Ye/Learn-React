import React, { memo, useRef, useEffect } from 'react';
import gasp from 'gsap';

const MemoButton = memo(({ children, onClick }) => {
  const refCount = useRef(0);
  refCount.current += 1;
  const refMemoTipEl = useRef(null);
  useEffect(() => {
    gasp.fromTo(
      refMemoTipEl.current,
      { scale: 0.5 },
      {
        scale: 1,
        duration: 0.35,
        ease: 'back.out(1.7)',
      },
    );
  });
  return (
    <div className="my-button memo-btn memo-btn--on">
      <span className="memo-btn__redner-tip" ref={refMemoTipEl}>{refCount.current}</span>
      <button onClick={onClick}>{children}</button>
    </div>
  );
});
export default MemoButton;
