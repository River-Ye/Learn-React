import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

const getWindowSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});
export default function useWindowSize() {
  // TODO
  /*
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowSize());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
  // */
}

export function useWindowSizeDebounce(wait = 500) {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    // https://lodash.com/docs/#debounce
    // http://demo.nimius.net/debounce_throttle/
    const handleResize = debounce(() => {
      setWindowSize(getWindowSize());
    }, wait);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}
