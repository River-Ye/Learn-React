import React, { memo, useRef, useEffect } from 'react';

const MemoButton = memo(({ children, onClick }) => {
  // /*
  const refCount = useRef(0);
  const refMemoTipEl = useRef(null);
  useEffect(() => {
    refCount.current += 1;
    TweenMax.fromTo(
      refMemoTipEl.current,
      0.35,
      { scale: 0.5 },
      {
        scale: 1,
        ease: Back.easeOut.config(1.7),
      },
    );
  });
  return (
    <div className="my-button memo-btn memo-btn--on">
      <span className="memo-btn__redner-tip" ref={refMemoTipEl}>{refCount.current}</span>
      <button onClick={onClick}>{children}</button>
    </div>
  );
  // */
});
export default MemoButton;
