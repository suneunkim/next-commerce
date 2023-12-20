import { useEffect, useState } from "react";
import { useInterval } from "./useInterval";

export const useCalculator = () => {
  const [result, setResult] = useState(0);
  const delay = 1000; // 이부분을 적고 저장했을 때만 초단위로 카운트다운이 됨

  useEffect(() => {
    // 현재 남은 초 계산
    const targetDate = new Date("2023-12-31T00:00:00.000");
    const currentDateTime = new Date();
    const remainingSeconds = Math.floor(
      (targetDate.getTime() - currentDateTime.getTime()) / 1000
    );

    // 로컬 스토리지에서 이전 값 불러오기
    const storedResult = localStorage.getItem("countdownResult");
    const initialResult = storedResult ? parseInt(storedResult, 10) : 0;
    setResult(remainingSeconds);

    // 로컬 스토리지에서 딜레이 불러오기
    const storedDelay = localStorage.getItem("countdownDelay");
    const initialDelay = storedDelay ? parseInt(storedDelay, 10) : delay;

    // 로컬 스토리지에 초기 값 설정
    localStorage.setItem("countdownResult", initialResult.toString());
    localStorage.setItem("countdownDelay", initialDelay.toString());

    const intervalId = setInterval(() => {
      setResult((prev: number) => prev - 1);

      // 결과 값 저장
      localStorage.setItem("countdownResult", (result - 1).toString());
    }, initialDelay);

    return () => clearInterval(intervalId);
  }, []);

  return result;
};
