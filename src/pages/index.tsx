import React from "react";
import EventBanner from "@/components/EventBanner";
import ProductList from "@/components/ProductList";
import Coupon from "@/components/Coupon";

export default function Home() {
  return (
    <div className="min-w-[1000px] relative h-screen">
      <Coupon />
      <EventBanner />
      <ProductList />
    </div>
  );
}
