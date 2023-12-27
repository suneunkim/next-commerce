import React from "react";
import Image from "next/image";
import { IProductList } from "./ProductList";
import TagBox from "./TagBox";
import Link from "next/link";

interface ProductBoxProps {
  currentItems: IProductList[];
}

const ProductBox = ({ currentItems }: ProductBoxProps) => {
  return (
    <div className="grid grid-cols-2 place-items-center sm:flex flex-nowrap justify-center">
      {currentItems.map((p, i) => (
        <Link key={i} href={`/product/${p.id}`}>
          <div
            className="w-[600px] sm:w-[390px] mb-16 mx-3 relative"
            key={p.id}
          >
            <Image
              src={p.imageUrl}
              alt="product"
              sizes="100vw"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
            />
            <TagBox tags={p.tag!} />
            <div className="space-y-2">
              <h3 className="font-semibold text-lg mt-3">{p.title}</h3>
              <p className="text-sm text-gray-500">{p.description}</p>
              <p className="font-semibold text-lg text-gray-600">
                {p.price.toLocaleString("ko-KR")}원
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductBox;
