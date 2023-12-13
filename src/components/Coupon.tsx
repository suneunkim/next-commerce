import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useCalculator } from "@/hooks/\buseCalculator";

const Coupon = () => {
  const handleClick = () => {
    alert("쿠폰을 얻었습니다!");
  };

  const controls = useAnimation();
  const myElementRef = useRef(null);

  const getRandomNumber = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const animateCoupon = async () => {
    // 1시간에 5초 동안 나타나고 사라지는 효과
    await controls.start({ opacity: 1 });

    // 불규칙한 위치로 이동하는 애니메이션 추가
    await controls.start({
      x: [0, 1000, -1000, 0],
      y: [0, 1000, -1000, 0],
      transition: { duration: 30, ease: "linear" },
    });
    await controls.start({ opacity: 0 });

    // 초기 위치로
    await controls.start({
      x: 0,
      y: 0,
      opacity: 0,
      transition: { duration: 0 },
    });
  };

  useEffect(() => {
    // const intervalId = setInterval(animateCoupon, 3000);
    // return () => clearInterval(intervalId);
    animateCoupon();
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center absolute z-30">
      <motion.div
        className="w-32 h-32 rounded-full bg-yellow-400 border-none flex flex-col justify-center items-center text-white text-xl font-bold cursor-pointer"
        id="coupon"
        onClick={handleClick}
        animate={controls}
      >
        <div>깜짝 쿠폰!</div>
      </motion.div>
    </div>
  );
};

export default Coupon;
