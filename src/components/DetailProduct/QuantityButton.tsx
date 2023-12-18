import React from "react";

interface QuantityButtonProps {
  quantity: number;
  setSelectedList: any;
  selected: {
    value: string;
    label: string;
    price: number;
  };
}

const QuantityButton = ({
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
      return updatedList;
    });
  };

  return (
    <div>
      <button
        className="border w-8 aspect-square"
        onClick={() => handleQuantityChange(selected.value, quantity - 1)}
        disabled={quantity === 1}
      >
        -
      </button>
      <input
        className="w-8 aspect-square text-center border-t border-b"
        readOnly
        value={quantity}
      />
      <button
        className="border w-8 aspect-square"
        onClick={() => handleQuantityChange(selected.value, quantity + 1)}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
