import React, { memo } from 'react';

interface Props {
  label:string;
}

function Example5MemoStatelessComponent(props:Props) {
  console.log('%c MemoStatelessComponent render', 'background: #222;color: #bada55;font-size:24px;');
  return (
    <section className="style-pure">
      <h2>Example5MemoStatelessComponent</h2>
      <p>props.label:{props.label}</p>
    </section>
  );
}

function propsAreEqual(prevProps:Props, nextProps:Props):boolean {
  console.log('prevProps.label', prevProps.label);
  console.log('nextProps.label', nextProps.label);
  const isLabelEqual = prevProps.label === nextProps.label;
  console.log('propsAreEqual', isLabelEqual);
  return isLabelEqual;
}

// 如果第二參數 propsAreEqual 不寫，就會自動用 shallowEqual 幫你比對。
export default memo(Example5MemoStatelessComponent, propsAreEqual);
