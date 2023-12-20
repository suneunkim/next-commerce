import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Coupon = () => {
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    alert("쿠폰을 얻었습니다!");
    setHidden(true);
  };

  const controls = useAnimation();

  const animateCoupon = async () => {
    // 불규칙한 위치로 이동하는 애니메이션 추가
    const animationPromise = controls.start({
      opacity: 1,
      x: [0, 500, -500, -600, 400, 0],
      y: [300, 800, 1300, 2000, 2400, 1900, 1400, 700, 200, -500, 200, 0],
      transition: { duration: 20, ease: "linear" },
    });
    // 애니메이션 종료 후
    await controls.start({
      opacity: 1,
    });
    await animationPromise;
    await controls.start({
      opacity: 0,
      x: 0,
      y: 500,
      transition: { duration: 1, ease: "linear" },
    });
  };

  useEffect(() => {
    animateCoupon();
    const intervalId = setInterval(animateCoupon, 30000);
    return () => {
      controls.stop();
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {!hidden && (
        <div className="w-full flex justify-center absolute z-30">
          <motion.div
            className="w-32 h-32 rounded-full bg-yellow-400 border-none flex flex-col justify-center items-center text-white text-xl font-bold cursor-pointer"
            id="coupon"
            onClick={handleClick}
            animate={controls}
          >
            <div>깜짝 쿠폰!</div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Coupon;
