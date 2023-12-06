import React from "react";

const Countdown = () => {
  return (
    <div className="flex justify-center items-center text-yellow-950">
      <div className="flex flex-col justify-center items-center space-y-2">
        <div className="text-7xl font-bold">02</div>
        <div className="text-base font-semibold">DAYS</div>
      </div>
      <div className="text-6xl px-8 h-24 my-auto">:</div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <div className="text-7xl font-bold">02</div>
        <div className="text-base font-semibold">HOURS</div>
      </div>
      <div className="text-6xl px-8 h-24 my-auto">:</div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <div className="text-7xl font-bold">02</div>
        <div className="text-base font-semibold">MINUTES</div>
      </div>
      <div className="text-6xl px-8 h-24 my-auto">:</div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <div className="text-7xl font-bold">02</div>
        <div className="text-base font-semibold">SECONDS</div>
      </div>
    </div>
  );
};

export default Countdown;
