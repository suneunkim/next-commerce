import React from "react";

interface recommendedProps {
  setSearchValue: (r: string) => void;
}

const Recommended = ({ setSearchValue }: recommendedProps) => {
  const recommendedSearch = [
    "스마일 패드",
    "벤토나이트",
    "브러쉬",
    "릴렉싱 라이트",
    "위글위글",
    "노즈워크",
    "팝업토이",
    "테이블",
    "하하",
  ];
  return (
    <ul className="flex flex-wrap">
      {recommendedSearch.map((recommend) => (
        <li
          key={recommend}
          onClick={() => setSearchValue(recommend)}
          className="bg-yellow-500 px-4 my-2 mx-2 py-2 rounded-xl font-semibold text-sm sm:text-xl cursor-pointer"
        >
          {recommend}
        </li>
      ))}
    </ul>
  );
};

export default Recommended;
