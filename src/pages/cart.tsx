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

const Cart = () => {
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

  // 선택한 옵션 장바구니에서 삭제하기
  const handleRemoveOption = (seletedOption: string) => {
    setSelectedList((prev) => {
      const updatedList = prev.filter((item) => item.value !== seletedOption);

      const existiongCartData = localStorage.getItem("cartData");
      const existingData = existiongCartData
        ? JSON.parse(existiongCartData)
        : {};

      const cartData = {
        ...existingData,
        storedList: updatedList,
      };
      localStorage.setItem("cartData", JSON.stringify(cartData));
      return updatedList;
    });
  };

  const calculateTotalAmount = () => {
    return selectedList.reduce((acc, selectedOption) => {
      const totalAmout = selectedOption.quantity * selectedOption.price;
      return acc + totalAmout;
    }, 0);
  };

  const deliveryTotalAmout = calculateTotalAmount() < 50000;

  if (cartData.storedList && cartData.storedList.length === 0) {
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
      <div className="text-4xl text-center p-20">CART</div>
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
            <span className="text-xs space-y-1">
              <div className="bg-blue-800 text-white p-1">주문하기</div>
              <div className="bg-gray-200 p-1">위시리스트</div>
              <div
                onClick={() => handleRemoveOption(item.value)}
                className="border border-gray-400 p-1 cursor-pointer"
              >
                삭제하기
              </div>
            </span>
          </div>
        </div>
      ))}
      <div className="mt-20">
        <div className="font-semibold grid grid-cols-[0.2fr,0.2fr,0.6fr] gap-5 p-5 text-center border-t">
          <span>총 상품금액</span>
          <span>총 배송비</span>
          <span>결제예정금액</span>
        </div>
        <div className="text-xl font-semibold grid grid-cols-[0.2fr,0.2fr,0.6fr] gap-5 p-5 text-center border-t">
          <span> {calculateTotalAmount().toLocaleString("ko-KR")}원</span>
          <div className="flex flex-col relative">
            <span>+ {deliveryTotalAmout ? "3,000" : "0"}</span>
            {deliveryTotalAmout && (
              <span className="text-sm  bg-yellow-400 rounded-full p-2 mt-3">
                5만원 이상 구매하면 무료배송!
              </span>
            )}
          </div>
          <span className="text-blue-800">
            ={" "}
            {(deliveryTotalAmout
              ? 3000 + calculateTotalAmount()
              : calculateTotalAmount()
            ).toLocaleString("ko-KR")}
            원
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
