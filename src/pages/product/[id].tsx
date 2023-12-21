import DetailImage from "@/components/DetailProduct/DetailImage";
import DetailProductInfo from "@/components/DetailProduct/DetailProductInfo";
import SeletedInfo from "@/components/DetailProduct/SeletedInfo";
import { seletedOptionsState } from "@/components/Recoil";
import TagBox from "@/components/TagBox";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export interface IProductDetail {
  id: string;
  imageUrl: string[];
  title: string;
  introduction: string;
  details: {
    label: string;
    value: string;
  }[];
  caution: string[];
  price: number;
  category: string;
  tag?: string[];
}

const DetailProduct = () => {
  const router = useRouter();
  const productId = router.query.id;
  const [bottomInfo, setBottomInfo] = useState({
    delivery: false,
    exchange: false,
  });

  // 상세 상품 정보 가져오기
  const [product, setProduct] = useState<IProductDetail>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product detail data", error);
      }
    };
    fetchData();
  }, [productId]);

  const toggleInfo = (type: keyof typeof bottomInfo) => {
    setBottomInfo((prevState) => {
      return {
        ...prevState,
        [type]: !prevState[type],
      };
    });
  };
  // 선택한 옵션 정보 담기
  const [selectedList, setSelectedList] = useRecoilState(seletedOptionsState);

  // 장바구니 버튼
  const handleClickCart = () => {
    const existingCartData = localStorage.getItem("cartData");
    const existingData = existingCartData ? JSON.parse(existingCartData) : {};
    const cartData = {
      ...existingData,
      storedList: selectedList,
    };
    localStorage.setItem("cartData", JSON.stringify(cartData));
    router.push("/cart");
  };

  if (product) {
    return (
      <div className="w-[1300px] pt-[113px] mx-auto h-full">
        <div className="grid grid-cols-[1.5fr,1fr] py-10 gap-10">
          <div className="">
            <DetailImage imageUrl={product.imageUrl} />
          </div>
          {/* 설명 */}
          <div className="w-[450px]">
            <div>
              <TagBox detail tags={product?.tag!} />
            </div>
            <div className="text-3xl font-semibold py-10">{product?.title}</div>
            {/* 조건부 설명 */}
            <DetailProductInfo product={product} />
            {/* 가격과 수량 선택 */}
            <SeletedInfo
              product={product}
              selectedList={selectedList}
              setSelectedList={setSelectedList}
            />
            <div className="flex justify-between my-5 cursor-pointer">
              <button
                onClick={handleClickCart}
                className="font-semibold border border-black p-5 w-full"
              >
                ADD TO CART
              </button>
              <button className="font-semibold border p-5 w-full bg-blue-950 text-white border-transparent">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
        {/* 상세 설명 이미지 */}
        <div className="w-[1000px] mx-auto">
          <div className=" m-20 ">
            <img
              src="https://pethroom.com/web/upload/NNEditor/20231120/goat-db.jpg"
              alt="상세이미지"
            />
            <img
              src="https://pethroom.com/web/upload/NNEditor/20231120/goat07.jpg"
              alt="상세이미지"
            />
          </div>
        </div>
        {/* 하단 추가 설명 */}
        <section className="px-10">
          <div>
            <div
              onClick={() => toggleInfo("delivery")}
              className="flex p-5 justify-between cursor-pointer border-b items-center"
            >
              <span className="text-lg font-semibold">DELIVERY</span>
              <span className="text-3xl">
                {bottomInfo.delivery ? "-" : "+"}
              </span>
            </div>
            <div
              style={{
                visibility: bottomInfo.delivery ? "visible" : "hidden",
                maxHeight: bottomInfo.delivery ? "280px" : "0",
                minHeight: bottomInfo.delivery ? "280px" : "0",
                overflow: "hidden",
                transition: "all 0.5s ease-in-out",
              }}
            >
              {bottomInfo.delivery && (
                <ul className="p-7 text-sm bg-gray-200/50 space-y-1 text-gray-800">
                  <li>배송 방법 : 택배</li>
                  <li>배송 지역 : 전국지역</li>
                  <li>배송 비용 : 3,000원 배송</li>
                  <li>기간 : 3일 ~ 7일</li>
                  <li>배송 안내 :</li>
                  <li>
                    <span className="font-bold">※배송기간 </span>: 평일 오전 9시
                    30분 이전 결제 완료된 주문건은 오전 당일 출고를 원칙으로
                    하며,
                  </li>
                  <p>
                    평일 오전 9시 30분 이후~ 오후 1시 30분 이전 결제 완료된
                    주문건은 오후 당일 출고를 원칙으로 도와드리고 있습니다.
                  </p>
                  <p>
                    오후 1시 이후 주문건의 경우, 익영업일 순차적으로 출고
                    진행되오니 참고 부탁드립니다. 아울러 배송은 평균 1~3일 정도
                    소요되며,
                  </p>
                  <p>
                    제주도 및 도서산간 지역의 경우 배송이 다소 지연될 수 있는 점
                    양해 부탁드립니다.
                  </p>
                </ul>
              )}
            </div>
          </div>
          <div>
            <div
              onClick={() => toggleInfo("exchange")}
              className="flex p-5 justify-between cursor-pointer border-b items-center"
            >
              <span className="text-lg font-semibold">EXCHANGE & RETURN</span>
              <span className="text-3xl">
                {bottomInfo.exchange ? "-" : "+"}
              </span>
            </div>
            <div
              style={{
                visibility: bottomInfo.exchange ? "visible" : "hidden",
                maxHeight: bottomInfo.exchange ? "280px" : "0",
                minHeight: bottomInfo.exchange ? "280px" : "0",
                overflow: "hidden",
                transition: "all 0.5s ease-in-out",
              }}
            >
              {bottomInfo.exchange && (
                <ul className="p-7 text-sm bg-gray-200/50 space-y-1 text-gray-800">
                  <li className="font-semibold">교환 및 반품이 가능한 경우</li>
                  <li>
                    - 상품을 인도받은 날로부터 7일 이내에 한해 계약에 관한 청약
                    철회가 가능합니다.
                  </li>
                  <li>
                    - 공급받으신 상품 및 용역의 내용이 표시. 광고 내용과
                    다르거나 다르게 이행된 경우에는 공급받은 날로부터 3개월
                    이내, 그 사실을 알게 된 날로부터 30일 이내
                  </li>
                  <li className="font-semibold pt-4">
                    교환 및 반품이 불가능한 경우
                  </li>
                  <li>
                    - 고객님의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우.
                    단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는
                    제외
                  </li>
                  <li>
                    - 포장을 개봉하였거나 포장이 훼손되어 상품 가치가 상실된
                    경우
                  </li>
                  <li>
                    - 고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히
                    감소한 경우
                  </li>
                  <li>
                    - 시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의
                    가치가 현저히 감소한 경우
                  </li>
                  <p className="font-semibold">
                    ※ 단순 변심으로 인한 교환, 반품하실 경우 상품 반송 비용은
                    고객님께서 부담하셔야 합니다. (색상 및 사이즈 교환 등 포함)
                  </p>
                </ul>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default DetailProduct;
