import React from "react";
import EventBanner from "@/components/EventBanner";
import ProductList, { IProductList } from "@/components/ProductList";
import Coupon from "@/components/Coupon";
import Footer from "@/components/Footer";
import axios from "axios";

interface HomeProps {
  initialProducts: IProductList[];
}

export default function Home({ initialProducts }: HomeProps) {
  return (
    <div className="min-w-[1000px] relative h-screen">
      <Coupon />
      <EventBanner />
      <ProductList initialProducts={initialProducts} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:3001/api/products");
    const initialProducts: IProductList[] = response.data;

    return {
      props: { initialProducts },
    };
  } catch (error) {
    console.error("Error fetching product data", error);
    return {
      props: { initialProducts: [] },
    };
  }
}
