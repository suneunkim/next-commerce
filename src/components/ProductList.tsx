import React, { useEffect, useRef, useState } from "react";
import ProductPagination from "./ProductPagination";
import ProductBox from "./ProductBox";
import { useRecoilState } from "recoil";
import { seletedCategoryState } from "./Recoil";

export interface IProductList {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  category: string;
  tag?: string[];
}

interface ProductListProps {
  initialProducts: IProductList[];
}

export const categories = ["ALL", "위생", "미용", "간식", "리빙", "놀이"];

const ProductList = ({ initialProducts }: ProductListProps) => {
  const [selectedCategory, setSelectedCategory] =
    useRecoilState(seletedCategoryState);

  const perPage = 6;
  const [activePage, setActivePage] = useState(1);

  const handleCategroyClick = (category: string) => {
    setSelectedCategory(category);
    setActivePage(1); // 카테고리 바뀌면 페이지를 1로 초기화
  };

  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
    scrollToCategory();
  };

  const filteredProducts =
    selectedCategory === "ALL"
      ? initialProducts
      : initialProducts.filter((p) => p.category === selectedCategory);

  // 현재 페이지에 해당하는 상품만 가져오기
  const currentItems =
    filteredProducts && filteredProducts.length
      ? filteredProducts.slice((activePage - 1) * perPage, activePage * perPage)
      : [];

  const categoryRef = useRef<null | HTMLDivElement>(null);
  const scrollToCategory = () => {
    categoryRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToCategory();
  }, [selectedCategory]);

  return (
    <div ref={categoryRef} className="w-[1300px] mx-auto">
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
            {category === "ALL" ? "전체상품" : category}
          </div>
        ))}
      </div>
      {/* 상품 목록 */}
      <div className="w-[1300px] mx-auto">
        <ProductBox currentItems={currentItems} />
      </div>
      {/* 페이지네이션 */}
      <div className="flex justify-center">
        <ProductPagination
          data={filteredProducts}
          onPageChange={handlePageChange}
          perPage={perPage}
        />
      </div>
    </div>
  );
};
export default ProductList;
