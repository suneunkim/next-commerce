import React from "react";

interface QuantityButtonProps {
  cart?: boolean;
  quantity: number;
  setSelectedList: any;
  selected: {
    value: string;
    label: string;
    price: number;
  };
}

const QuantityButton = ({
  cart,
  quantity,
  setSelectedList,
  selected,
}: QuantityButtonProps) => {
  const handleQuantityChange = (optionValue: string, quantity: number) => {
    setSelectedList((prevSelectedList: any) => {
      const updatedList = prevSelectedList.map((item: any) => {
        if (item.value === optionValue) {
          return { ...item, quantity };
        }
        return item;
      });

      // 로컬스토리지에서 기존 데이터 가져오기
      const existingCartData = localStorage.getItem("cartData");
      const existingData = existingCartData ? JSON.parse(existingCartData) : {};

      // 카트페이지에서 수량 조절시 로컬스토리지 업데이트
      if (cart) {
        const cartData = {
          ...existingData,
          storedList: updatedList,
        };
        localStorage.setItem("cartData", JSON.stringify(cartData));
      }

      // 업데이트된 리스트 반환
      return updatedList;
    });
  };

  return (
    <div>
      <button
        className={`
        ${cart ? "border w-5 aspect-square" : "border w-8 aspect-square"}
        `}
        onClick={() => handleQuantityChange(selected.value, quantity - 1)}
        disabled={quantity === 1}
      >
        -
      </button>
      <input
        className={`
      aspect-square text-center border-t border-b
      ${cart ? "w-5" : "w-8"}
      `}
        readOnly
        value={quantity}
      />
      <button
        className={`
        ${cart ? "border w-5 aspect-square" : "border w-8 aspect-square"}
        `}
        onClick={() => handleQuantityChange(selected.value, quantity + 1)}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
