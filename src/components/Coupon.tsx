import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/router";

const Coupon = () => {
  const [hidden, setHidden] = useState(false);
  const router = useRouter();

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
      y: [300, 800, 1300, 2000, 2400, 1900, 1400, 700, 200, -500, -300],
      transition: { duration: 20, ease: "linear" },
    });

    const animationEnd = controls.start({
      opacity: 0,
      transition: { duration: 23, ease: "linear" },
    });
    await animationPromise;
    await animationEnd;
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
        <div className="h-0 flex justify-center ">
          <motion.div
            className="w-32 h-32 z-30 rounded-full bg-yellow-400 border-none flex flex-col justify-center items-center text-white text-xl font-bold cursor-pointer"
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
