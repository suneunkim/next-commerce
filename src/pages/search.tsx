import ProductBox from "@/components/ProductBox";
import { IProductList } from "@/components/ProductList";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const search = () => {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState<IProductList[]>([]);

  useEffect(() => {
    const { keyword } = router.query;

    const fetchDate = async () => {
      try {
        if (keyword && typeof keyword === "string") {
          const response = await axios.get(
            `/api/search?keyword=${encodeURIComponent(keyword)}`
          );
          setSearchResults(response.data);
          console.log(searchResults);
        }
      } catch (error) {
        console.error("Error fetching search results", error);
      }
    };
    fetchDate();
  }, [router.query]);

  return (
    <div className="pt-[120px] w-[1300px] mx-auto">
      <div className="p-20 flex justify-center font-bold text-4xl ">SEARCH</div>
      <ProductBox currentItems={searchResults} />
    </div>
  );
};

export default search;
