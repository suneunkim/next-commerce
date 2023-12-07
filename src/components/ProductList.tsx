import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductPagination from "./ProductPagination";

export interface IProductList {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  category: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<IProductList[]>([]);
  const categories = ["전체상품", "위생", "미용", "간식", "리빙", "놀이"];
  const [selectedCategory, setSelectedCategory] = useState("전체상품");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product data", error);
      }
    };
    fetchData();
  }, []);

  const handleCategroyClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "전체상품"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-[1300px] mx-auto">
      {/* 카테고리 */}
      <div className="flex justify-center p-10 space-x-10 font-semibold text-gray-400">
        {categories.map((category) => (
          <div
            onClick={() => handleCategroyClick(category)}
            key={category}
            className={`
            cursor-pointer hover:text-gray-600
            ${category === selectedCategory ? "text-gray-600" : "text-gray-400"}
            `}
          >
            {category}
          </div>
        ))}
      </div>
      {/* 상품 목록 */}
      <div className="w-[1300px] mx-auto">
        <div className="flex flex-wrap justify-center">
          {filteredProducts.map((p) => (
            <div className="w-[400px] mb-16 mx-3" key={p.id}>
              <Image src={p.imageUrl} alt="product" width={390} height={390} />
              <div className="space-y-2">
                <h3 className="font-semibold text-lg mt-3">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.description}</p>
                <p className="font-semibold text-lg text-gray-600">
                  {p.price.toLocaleString("ko-KR")}원
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 페이지네이션 */}
      <div className="flex justify-center">
        <ProductPagination data={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductList;
