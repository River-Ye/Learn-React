import React from 'react';
import useWindowSize, { useWindowSizeDebounce } from '../hooks/useWindowSize';

export default function HooksExample() {
  const windowSize = useWindowSize();
  const windowDebounceSize = useWindowSizeDebounce();
  return (
    <section data-name="Hooks3 windowResize">
      <p>{windowSize.width}px / {windowSize.height}px</p>
      <p>{windowDebounceSize.width}px / {windowDebounceSize.height}/px</p>
    </section>
  );
}
