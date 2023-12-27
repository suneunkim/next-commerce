import React from "react";
import EventBanner from "@/components/EventBanner";
import ProductList, { IProductList } from "@/components/ProductList";
import Coupon from "@/components/Coupon";
import axios from "axios";

interface HomeProps {
  initialProducts: IProductList[];
}

export default function Home({ initialProducts }: HomeProps) {
  return (
    <div className="w-full relative mx-auto">
      <Coupon />
      <EventBanner />
      <ProductList initialProducts={initialProducts} />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      `${process.env.NEXTAUTH_URL}/api/products`
    );
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
