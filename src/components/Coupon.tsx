import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Coupon = () => {
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    alert("쿠폰을 얻었습니다!");
    setHidden(true);
  };

  const controls = useAnimation();

  const animateCoupon = async () => {
    setLoading(false);

    if (!loading) {
      await controls.start({ opacity: 1 });

      // 불규칙한 위치로 이동하는 애니메이션 추가
      await controls.start({
        x: [0, 500, -500, -600, 400, 0],
        y: [0, 800, 1300, -500, 200, 0],
        transition: { duration: 20, ease: "linear" },
      });
      await controls.start({ opacity: 0 });
      setHidden(true);
      setLoading(true);
    }
  };

  useEffect(() => {
    animateCoupon();
    const intervalId = setInterval(animateCoupon, 100);
    return () => clearInterval(intervalId);
  }, [controls]);

  return (
    <>
      {!hidden && (
        <div className="w-full flex justify-center absolute z-30">
          <motion.div
            className="w-32 h-32 rounded-full bg-yellow-400 border-none flex flex-col justify-center items-center text-white text-xl font-bold cursor-pointer"
            id="coupon"
            onClick={handleClick}
            initial={{ opacity: 0 }}
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
