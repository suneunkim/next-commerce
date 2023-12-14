import { IProductDetail } from "@/pages/product/[id]";
import React, { useState } from "react";

interface DetailProductInfoProps {
  product: IProductDetail;
}

const DetailProductInfo = ({ product }: DetailProductInfoProps) => {
  const [productInfo, setProductInfo] = useState<
    "INTRODUCTION" | "DETAILS" | "CAUTION"
  >("INTRODUCTION");

  const infoType = ["INTRODUCTION", "DETAILS", "CAUTION"];
  const handleClick = (info: any) => {
    setProductInfo(info);
  };
  return (
    <section>
      <div className="grid grid-cols-3 cursor-pointer">
        {infoType.map((info, i) => (
          <div
            className={`
                    px-2 py-1 rounded-lg text-center text-sm
                    ${info === productInfo ? "bg-gray-200/70 " : ""}
                    `}
            onClick={() => handleClick(info)}
          >
            {info}
          </div>
        ))}
      </div>
      <div className="text-sm w-[400px] py-5">
        {(() => {
          switch (productInfo) {
            case "INTRODUCTION":
              return (
                <div className="leading-6 text-gray-700 font-medium">
                  {product.introduction}
                </div>
              );
            case "DETAILS":
              return (
                <ul>
                  {product.details.map((detail, index) => (
                    <li className="leading-6 text-gray-700" key={index}>
                      {detail.label}: {detail.value}
                    </li>
                  ))}
                </ul>
              );
            case "CAUTION":
              return (
                <ul>
                  {product.caution.map((caution, index) => (
                    <li className="leading-6 text-gray-700" key={index}>
                      {caution}
                    </li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })()}
      </div>
    </section>
  );
};

export default DetailProductInfo;
