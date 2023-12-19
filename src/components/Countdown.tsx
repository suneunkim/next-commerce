import { useCalculator } from "@/hooks/useCalculator";

const Countdown = () => {
  const targetDate = new Date("2023-12-31T00:00:00.000");
  const currentDateTime = new Date();

  const remain = useCalculator(
    () => Math.floor((targetDate.getTime() - currentDateTime.getTime()) / 1000),
    1000
  );

  const days = Math.floor(remain / (24 * 60 * 60));
  const hours = Math.floor((remain % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((remain % (60 * 60)) / 60);
  const seconds = Math.floor(remain % 60);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <>
      {remain < 0 ? (
        <div className="font-semibold text-lg p-10">
          이벤트가 종료되었습니다.
        </div>
      ) : (
        <div
          suppressHydrationWarning={true}
          className="flex justify-center items-center text-yellow-950"
        >
          <div className="flex flex-col justify-center items-center space-y-2 whitespace-nowrap w-24">
            <div suppressHydrationWarning className="text-7xl font-bold">
              {days}
            </div>
            <div className="text-base font-semibold">DAYS</div>
          </div>
          <div className="text-6xl px-8 h-24 my-auto">:</div>
          <div className="flex flex-col justify-center items-center space-y-2 whitespace-nowrap w-24">
            <div suppressHydrationWarning className="text-7xl font-bold">
              {formatTime(hours)}
            </div>
            <div className="text-base font-semibold">HOURS</div>
          </div>
          <div className="text-6xl px-8 h-24 my-auto">:</div>
          <div className="flex flex-col justify-center items-center space-y-2 whitespace-nowrap w-24">
            <div suppressHydrationWarning className="text-7xl font-bold">
              {formatTime(minutes)}
            </div>
            <div className="text-base font-semibold">MINUTES</div>
          </div>
          <div className="text-6xl px-8 h-24 my-auto">:</div>
          <div className="flex flex-col justify-center items-center space-y-2 whitespace-nowrap w-24">
            <div suppressHydrationWarning className="text-7xl font-bold">
              {formatTime(seconds)}
            </div>
            <div className="text-base font-semibold">SECONDS</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Countdown;
