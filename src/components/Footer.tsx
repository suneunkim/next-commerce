import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="p-10">
        <h3 className="font-semibold text-lg mb-3">사이트 안내</h3>
        <ul className="space-y-2">
          <li>이 사이트는 SSG로 만들어질겁니다.</li>
          <li>쿠폰을 획득하셨다면 축하드립니다.</li>
          <li>적당한 안내 사항을 적는 곳입니다.</li>
          <li>이벤트 기간은 상시 변동 될 수 있습니다.</li>
        </ul>
      </div>
      <div className="h-[16rem] w-full bg-blue-900 text-white">
        <div className="p-10">
          하단부까지 스크롤이 용이하도록 만든 공간입니다.
        </div>
      </div>
    </div>
  );
};

export default Footer;
