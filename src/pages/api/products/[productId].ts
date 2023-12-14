import type { NextApiRequest, NextApiResponse } from "next";

const dummyDetail = {
  id: 1,
  imageUrl: [
    "https://pethroom.com/web/product/big/202311/623668ef8e0760bb109667fc1b3f95aa.jpg",
    "https://pethroom.com/web/product/extra/big/202311/07f8133e4de5384a573bf9da8d7975dc.jpg",
    "https://pethroom.com/web/product/extra/big/202311/10e98a4fd0b64947b2704c9a6de4c9f8.jpg",
    "https://pethroom.com/web/product/extra/big/202311/1cb7c713d18669a73983786aa3ba5be5.jpg",
    "https://pethroom.com/web/product/extra/big/202311/8c74d809286a0b40af84d8de61f2afa3.jpg",
  ],
  title: "산양유 스틱",
  introduction:
    "태평양에서 잡은 신선한 참치에 청정 네덜란드 산양유 단백분말을 더했다! 더 간편하게 음수량 보충이 가능한 영양만점 진짜 산양유 스틱",
  details: [
    { label: "중량", value: "56g / 280g" },
    { label: "유통기한", value: "제조일로부터 24개월" },
    { label: "제조국가", value: "대한민국" },
  ],
  caution: [
    "1. 반려동물의 몸 상태,체격,활동량 등에 따라 급여량을 조절해 주세요.",
    "2. 알러지가 있는 경우 반드시 원재료를 확인 후 급여하시기 바랍니다.",
    "3. 포장 불량 등 유통 과정에서 변질된 제품은 급여하지 마시고 고객센터로 문의주시기 바랍니다.",
  ],
  price: 4000,
  category: "간식",
  tag: ["new", "동원협업"],
};
export default (req: NextApiRequest, res: NextApiResponse) => {
  // const { productId } = req.query;
  // // productId가 문자열 또는 배열인지 확인 후 문자열로 변환
  // const targetProductId = Array.isArray(productId) ? productId[0] : productId;
  // // 문자열 또는 undefined인 경우 parseInt 사용
  // const parsedProductId: number | undefined = targetProductId
  //   ? parseInt(targetProductId)
  //   : undefined;
  // const product = products.find((p) => p.id === parsedProductId);
  // if (!product) {
  //   return res.status(404).json({ error: "Product not found" });
  // }
  // res.status(200).json(product);
  res.status(200).json(dummyDetail);
};
