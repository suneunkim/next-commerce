import React from "react";
import EventBanner from "@/components/EventBanner";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div className="min-w-[1000px]">
      <EventBanner />
      <ProductList />
      {/* 페이지네이션 */}
    </div>
  );
}
