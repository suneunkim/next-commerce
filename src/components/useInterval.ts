import { useState, useEffect, useRef } from "react";

export function useInterval(callback: any, delay: any) {
  // useRef를 생성할 때 current 속성에 초기 값으로 null을 할당
  const savedCallback = useRef<any | null>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
