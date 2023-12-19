import QuantityButton from "@/components/DetailProduct/QuantityButton";
import { seletedOptionsState } from "@/components/Recoil";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export interface ICart {
  storedList: {
    value: string;
    quantity: number;
    price: number;
    label: string;
    imageUrl: string;
  }[];
}

const cart = () => {
  const [cartData, setCartData] = useState<ICart>({
    storedList: [],
  });

  const [selectedList, setSelectedList] = useRecoilState(seletedOptionsState);

  // 로컬스토리지는 서버 사이드 렌더에서 오류가 나기에 클라이언트에서 처리하기 위함
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCartData = localStorage.getItem("cartData");
      const { storedList }: ICart = storedCartData
        ? JSON.parse(storedCartData)
        : {};
      setCartData({ storedList });
    }
  }, [selectedList]);

  if (cartData.storedList.length === 0) {
    return (
      <div className="w-[1300px] pt-[113px] mx-auto h-full text-sm px-10">
        <div className="text-4xl text-center p-28">CART</div>
        <div className="text-2xl text-center p-10">
          😿 장바구니가 비었습니다.
        </div>
      </div>
    );
  }
  return (
    <div className="w-[1300px] pt-[113px] mx-auto h-full text-sm px-10">
      <div className="text-4xl text-center p-28">CART</div>
      <div className="bg-gray-200/50 p-3 border font-semibold">{`일반 상품(${cartData.storedList.length})`}</div>
      <div
        className="grid grid-cols-[0.2fr,0.7fr,1fr] gap-5 p-3 text-center border-b
      "
      >
        <div>이미지</div>
        <div>상품정보</div>
        <div className="grid grid-cols-[repeat(7,1fr)]">
          <span>판매가</span>
          <span>수량</span>
          <span>적립금</span>
          <span>배송구분</span>
          <span>배송비</span>
          <span>합계</span>
          <span>선택</span>
        </div>
      </div>

      {cartData.storedList.map((item, i) => (
        <div
          key={i}
          className="grid grid-cols-[0.2fr,0.7fr,1fr] gap-5 p-3 text-center border-b h-28 items-center
      "
        >
          <div className="w-20 aspect-square mx-auto">
            <img src={cartData.storedList[0].imageUrl} alt="product" />
          </div>

          <div>{`[옵션: ${item.label}]`}</div>
          <div className="grid grid-cols-[repeat(7,1fr)] items-center">
            <span className="font-semibold">
              {item.price.toLocaleString("ko-KR")}원
            </span>
            <span>
              <QuantityButton
                cart
                quantity={item.quantity}
                setSelectedList={setSelectedList}
                selected={item}
              />
            </span>
            <span>-</span>
            <span className="text-gray-500">기본배송</span>
            <span>무료</span>
            <span className="font-semibold">
              {(item.price * item.quantity).toLocaleString("ko-KR")}원
            </span>
            <span>선택</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default cart;
