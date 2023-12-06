// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export const products = [
  {
    id: 1,
    imageUrl:
      "https://pethroom.com/web/product/medium/202203/d8a532a1c4e90f4b81f2b727e6a2fed1.jpg",
    title: "더스트 프리 벤토나이트 오리지널",
    description: "먼지 최소화 & 단단 응고력 & 사막화 방지를 원한다면",
    price: 29000,
    category: "위생",
  },
  {
    id: 2,
    imageUrl:
      "https://pethroom.com/web/product/medium/202310/9ec2ea1dbdbfe87c3c41a2ce2beb2176.jpg",
    title: "스마일 패드 (소형/대형)",
    description:
      "초강력 흡수체 최다 함유한 프리미엄 배변패드, 소형(50매) 대형(20매)",
    price: 21000,
    category: "위생",
  },
  {
    id: 3,
    imageUrl:
      "https://pethroom.com/web/product/medium/202310/9ec2ea1dbdbfe87c3c41a2ce2beb2176.jpg",
    title: "하이브리드 카사나이트 B3C1",
    description:
      "천연 카사바와 최고급 벤토나이트를 블렌딩한 완벽한 고양이 모래",
    price: 32000,
    category: "위생",
  },
  {
    id: 4,
    imageUrl:
      "https://pethroom.com/web/product/medium/202208/b997bc645e0a57d5ee5fc990ff4794dc.jpg",
    title: "이지 페이셜 콤",
    description: "눈곱 제거부터 빗질까지 둥근 헤드로 안전하게",
    price: 10000,
    category: "미용",
  },
  {
    id: 5,
    imageUrl:
      "https://pethroom.com/web/product/medium/202302/3501a22b0acdb62258137a837a8d7f45.jpg",
    title: "힐링 슬리커 브러쉬",
    description: "306개의 폴리케톤 빗살로 피부 자극 없이 편안하게",
    price: 30000,
    category: "미용",
  },
  {
    id: 6,
    imageUrl:
      "https://pethroom.com/web/product/medium/202202/c2034d0e5e44160f7fd0ccaa37d72748.jpg",
    title: "힐링 브러쉬",
    description: "무자극 실리콘 돌기로 죽은 털 제거와 마사지를 한번에",
    price: 24000,
    category: "미용",
  },
  {
    id: 7,
    imageUrl:
      "https://pethroom.com/web/product/medium/202311/2f5d7f49e1a30d2b200e761de850a4e2.jpg",
    title: "산양유 스틱",
    description:
      "청정 네덜란드산 산양유와 포스트바이오틱스를 가득 담아 더 맛있고 건강하게!",
    price: 5500,
    category: "간식",
  },
  {
    id: 8,
    imageUrl:
      "https://pethroom.com/web/product/medium/202206/beab34ed2c4a7fc662b9c9674db5f218.jpg",
    title: "저키 트릿 미니 (소고기&칠면조/말고기&오리)",
    description: "자를 필요 없는 초미니 사이즈, 살찔 걱정 없는 가벼운 칼로리!",
    price: 6000,
    category: "간식",
  },
  {
    id: 9,
    imageUrl:
      "https://pethroom.com/web/product/medium/202311/1c664f6f8a6ae406b49b9142b44f587e.jpg",
    title: "릴렉싱 라이트 클립 리필 & 버그아웃 라이트 클립",
    description: "릴렉싱 효과가 있는 아로마 향으로 흥분, 스트레스, 불안 끝!",
    price: 31200,
    category: "간식",
  },
  {
    id: 10,
    imageUrl:
      "https://pethroom.com/web/product/medium/202208/ac6f0a283c65ffecea017f21746e5898.jpg",
    title: "웰 핏 테이블 & 보울",
    description: "높이&각도 조절 가능한 반려동물 전용 식기",
    price: 70000,
    category: "리빙",
  },
  {
    id: 11,
    imageUrl:
      "https://pethroom.com/web/product/medium/202301/0120e2a2fd062625451a7ffad4db374e.jpg",
    title: "페스룸X위글위글 슬로우 피더",
    description: "급하게 먹는 아이들을 위한 급체방지식기",
    price: 15900,
    category: "리빙",
  },
  {
    id: 12,
    imageUrl:
      "https://pethroom.com/web/product/medium/202203/21a5de64d1dd74092cb52ea9c28c2736.jpg",
    title: "이지 피딩 세트 (튜나스틱+펫스푼)",
    description: "반려동물 간식 급여를 위한 필수 세트",
    price: 43000,
    category: "리빙",
  },
  {
    id: 13,
    imageUrl:
      "https://pethroom.com/web/product/medium/202305/a779283f58d25b6598d55a934e0fc975.jpg",
    title: "티저 토이",
    description: "고양이에겐 살랑, 집사에겐 말랑한 사냥 놀이 시간!",
    price: 26500,
    category: "놀이",
  },
  {
    id: 14,
    imageUrl:
      "https://pethroom.com/web/product/medium/202310/4bb79f382754524267bd29016c7e5569.jpg",
    title: "팝업 토이",
    description:
      "놀이가 지루해진 우리 아이를 위한 새로운 DIY 장난감! 페스룸 팝업 토이",
    price: 19800,
    category: "놀이",
  },
  {
    id: 15,
    imageUrl:
      "https://pethroom.com/web/product/medium/202202/53d447966b8f8043ff50eea77925442b.jpg",
    title: "젤리 해피 믹스 노즈워크 장난감",
    description: "4가지 젤리 믹스로 4배 더 달콤한 노즈워크 놀이",
    price: 29800,
    category: "놀이",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products);
}
