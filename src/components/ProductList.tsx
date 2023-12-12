import axios from "axios";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ProductPagination from "./ProductPagination";
import SearchModal from "./SearchModal";
import { useRecoilState } from "recoil";
import { searchOpenState } from "./Recoil";
import ProductBox from "./ProductBox";

export interface IProductList {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  category: string;
  tag?: string[];
}

const ProductList = () => {
  const [products, setProducts] = useState<IProductList[]>([]);
  const categories = ["전체상품", "위생", "미용", "간식", "리빙", "놀이"];
  const [selectedCategory, setSelectedCategory] = useState("전체상품");
  const [searchOpen, setSearchOpen] = useRecoilState(searchOpenState);

  const perPage = 6;
  const [activePage, setActivePage] = useState(1);

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
    setActivePage(1); // 카테고리 바뀌면 페이지를 1로 초기화
  };

  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
    scrollToCategory();
  };

  const filteredProducts =
    selectedCategory === "전체상품"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // 현재 페이지에 해당하는 상품만 가져오기
  const currentItems = filteredProducts.slice(
    (activePage - 1) * perPage,
    activePage * perPage
  );

  const categoryRef = useRef<null | HTMLDivElement>(null);
  const scrollToCategory = () => {
    categoryRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

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
            {category}
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
      {searchOpen && <SearchModal setSearchOpen={setSearchOpen} />}
    </div>
  );
};
export default ProductList;
