import { useState, useEffect, useRef } from 'react';

const useDebounce = (value, delay = 1000, cb) => {
  const [state, setState] = useState(value);
  const previousValue = useRef(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (previousValue.current !== value) {
        setState(value);
        if (typeof cb === 'function') cb();
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [cb, delay, value]);

  return state;
};

export default useDebounce;
