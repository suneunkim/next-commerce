import { useRecoilValueLoadable } from "recoil";
import { remainingTimeSelector } from "./Recoil";

const Countdown = () => {
  // 비동기 데이터 로드할 때
  const loadable = useRecoilValueLoadable(remainingTimeSelector);

  switch (loadable.state) {
    case "hasValue":
      const remainingTime = loadable.contents;
      return (
        <div className="flex justify-center items-center text-yellow-950">
          <div className="flex flex-col justify-center items-center space-y-2">
            <div className="text-7xl font-bold">{remainingTime.days}</div>
            <div className="text-base font-semibold">DAYS</div>
          </div>
          <div className="text-6xl px-8 h-24 my-auto">:</div>
          <div className="flex flex-col justify-center items-center space-y-2">
            <div className="text-7xl font-bold">{remainingTime.hours}</div>
            <div className="text-base font-semibold">HOURS</div>
          </div>
          <div className="text-6xl px-8 h-24 my-auto">:</div>
          <div className="flex flex-col justify-center items-center space-y-2">
            <div className="text-7xl font-bold">{remainingTime.minutes}</div>
            <div className="text-base font-semibold">MINUTES</div>
          </div>
          <div className="text-6xl px-8 h-24 my-auto">:</div>
          <div className="flex flex-col justify-center items-center space-y-2">
            <div className="text-7xl font-bold">{remainingTime.seconds}</div>
            <div className="text-base font-semibold">SECONDS</div>
          </div>
        </div>
      );
    case "loading":
      return <div>Loading...</div>;
    case "hasError":
      return <div>Error: {loadable.contents.message}</div>;
    default:
      return null;
  }
};

export default Countdown;
