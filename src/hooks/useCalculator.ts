import { useState } from "react";
import { useInterval } from "./useInterval";

export const useCalculator = (calculator: any, delay: number) => {
  const [result, setResult] = useState(calculator());
  useInterval(() => {
    const newResult = calculator();
    if (newResult !== result) setResult(newResult);
  }, delay);

  return result;
};
