import type { NextApiRequest, NextApiResponse } from "next";
import { products } from "@/pages/api/products/index";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { keyword } = req.query;

  if (!keyword || typeof keyword !== "string") {
    return res.status(400).json({ error: "Invalid search keyword" });
  }

  const searchResults = products.filter((product) =>
    product.title.toLowerCase().includes(keyword.toLowerCase())
  );

  res.status(200).json(searchResults);
}
