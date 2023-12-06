import axios from "axios";
import React, { useEffect, useState } from "react";

interface IProductList {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  category: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<IProductList[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("전체");

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

  return (
    <div>
      <div>
        <ul>
          {products.map((p) => (
            <div key={p.id}></div>
          ))}
        </ul>
      </div>
      <div>목록</div>
    </div>
  );
};

export default ProductList;
