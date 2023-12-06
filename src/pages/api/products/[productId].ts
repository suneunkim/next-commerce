import type { NextApiRequest, NextApiResponse } from "next";
import { products } from "./index";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { productId } = req.query;
  // productId가 문자열 또는 배열인지 확인 후 문자열로 변환
  const targetProductId = Array.isArray(productId) ? productId[0] : productId;

  // 문자열 또는 undefined인 경우 parseInt 사용
  const parsedProductId: number | undefined = targetProductId
    ? parseInt(targetProductId)
    : undefined;

  const product = products.find((p) => p.id === parsedProductId);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.status(200).json(product);
};
