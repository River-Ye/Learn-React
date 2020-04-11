import { useState, useEffect } from 'react';

const useMedia = (query) => {
  const [state, setState] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => {
      setState(!!mql.matches);
    };

    mql.addListener(onChange);
    setState(mql.matches);

    return () => {
      mql.removeListener(onChange);
    };
  }, [query]);

  return state;
};

export default useMedia;
