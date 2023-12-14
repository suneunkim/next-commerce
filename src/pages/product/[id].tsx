import DetailImage from "@/components/DetailProduct/DetailImage";
import DetailProductInfo from "@/components/DetailProduct/DetailProductInfo";
import SeletedInfo from "@/components/DetailProduct/SeletedInfo";
import TagBox from "@/components/TagBox";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

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
  }, []);

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
            <SeletedInfo product={product} />
            <div className="flex justify-between my-5 cursor-pointer">
              <button className="font-semibold border border-black p-5 w-full">
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
      </div>
    );
  }
};

export default DetailProduct;
