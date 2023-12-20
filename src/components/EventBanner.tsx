import Image from "next/image";
import React from "react";
import Countdown from "./Countdown";

const EventBanner = () => {
  return (
    <>
      <div className="pt-[112px]">
        <div className="relative min-h-[40rem]">
          <Image
            src={`https://pethroom.com/web/event/2023_christmas/origin/main-bg.gif`}
            alt="event_banner"
            fill
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-12 bg-red-700 space-x-3 text-sm border-3 border-t-4 border-b-4 border-yellow-400 shadow-xl">
        <p className="text-white">{`2023.12.04 (MON) - 12.31 (SUN)`}</p>
        <p className="text-yellow-300">올해의 마지막 직전까지!</p>
      </div>
      <div className="relative h-[40rem] bg-orange-100 flex flex-col items-center justify-center">
        <div>
          <Image
            src={`https://pethroom.com/web/event/2023_christmas/origin/intro-title.png`}
            alt="event_banner"
            width={1000}
            height={500}
          />
        </div>
        <div className="h-full">
          <Countdown />
        </div>
      </div>
      <div className="w-full bg-gray-200/70 p-16">
        <div className="w-full max-w-5xl ml-40 space-y-3">
          <h2 className="font-semibold text-xl py-2">
            깜짝 쿠폰 찾기 유의 사항
          </h2>
          <p>- 쿠폰은 한 번만 받을 수 있습니다.</p>
          <p>- 일정 시간마다 페이지에 노출됩니다.</p>
          <p>- 시간 내에 클릭하면 얻을 수 있습니다!</p>
        </div>
      </div>
    </>
  );
};

export default EventBanner;
