import { IProductDetail } from "@/pages/product/[id]";
import React, { useState } from "react";

interface DetailProductInfoProps {
  product: IProductDetail;
}

const SeletedInfo = ({ product }: DetailProductInfoProps) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (e: any) => {
    setSelectedValue(e.target.value);
  };

  const options = [
    { value: "option1", label: "산양유 스틱 4개입", price: 4000 },
    { value: "option2", label: "산양유 스틱 20개입 (+12,900원)", price: 16900 },
    {
      value: "option3",
      label: "산양유 스틱 20개입 트리플세트(3팩) (+36,900원)",
      price: 40900,
    },
  ];

  return (
    <section>
      <div>
        <div className="font-semibold text-2xl py-2 border-b">
          {product?.price.toLocaleString("ko-KR")}원
        </div>
        <div className="flex mt-3">
          <div className="w-32 text-sm text-gray-700 flex items-center">
            옵션
          </div>
          <select
            className="w-full border text-sm py-2"
            name="selectedOption"
            onChange={handleSelectChange}
          >
            <option disabled selected hidden>
              {`- [필수] 옵션을 선택해주세요 -`}
            </option>
            <option disabled>옵션</option>
            {options.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="my-8">
        {(() => {
          switch (selectedValue) {
            case "option1":
              return (
                <div className="leading-6 text-sm text-gray-700 font-medium">
                  산양유 스틱 4개입
                </div>
              );
            case "option2":
              return (
                <div className="leading-6 text-sm text-gray-700 font-medium">
                  산양유 스틱 20개입 (+12,900원)
                </div>
              );
            case "option3":
              return (
                <div className="leading-6 text-sm text-gray-700 font-medium">
                  산양유 스틱 20개입 트리플세트(3팩) (+36,900원)
                </div>
              );

            default:
              return null;
          }
        })()}
      </div>
      <div>총 상품금액(수량):</div>
    </section>
  );
};

export default SeletedInfo;
