/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';

const useDebounce = (fn: (args: any) => void, delay: number) => {
  const timeout = useRef<number>();

  function handleChange(args: any) {
    window.clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => {
      fn(args);
    }, delay);
  }

  return handleChange;
};

export default useDebounce;
