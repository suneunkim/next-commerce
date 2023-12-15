import React from "react";

interface QuantityButtonProps {
  quantity: number;
  setQuantities: any;
  selected: {
    value: string;
    label: string;
    price: number;
  };
}

const QuantityButton = ({
  quantity,
  setQuantities,
  selected,
}: QuantityButtonProps) => {
  const handleQuantityChange = (optionValue: string, quantity: number) => {
    setQuantities((prevQuantities: any) => ({
      ...prevQuantities,
      [optionValue]: quantity,
    }));
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
