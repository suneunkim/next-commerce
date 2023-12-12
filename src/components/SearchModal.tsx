import React, { useEffect, useState } from "react";
import Recommended from "./Recommended";
import { useRouter } from "next/router";
interface modalProps {
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const SearchModal = ({ setSearchOpen }: modalProps) => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const router = useRouter();

  const handleSearch = () => {
    if (searchValue.trim()) {
      setSearchOpen(false);
      router.push(`/search?keyword=${encodeURIComponent(searchValue)}`);
    }
  };

  return (
    <div className="z-20 absolute">
      <div className=" fixed mt-[112px] inset-0">
        <div id="search_background" className="absolute inset-0">
          <div className="relative w-[1000px] h-[800px] flex flex-col items-center mx-auto border-2 border-white">
            <button
              onClick={() => setSearchOpen(false)}
              className="text-white font-medium text-5xl absolute top-[130px] right-[90px]"
            >
              X
            </button>
            <div className=" text-white w-[800px] absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
              <input
                value={searchValue}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-white
              text-2xl focus:border-transparen outline-0 leading-5 py-2"
              />
              <button
                onClick={handleSearch}
                className="absolute right-2 bottom-2"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.5999 10.5C3.5999 6.68926 6.68914 3.60002 10.4999 3.60002C14.3107 3.60002 17.3999 6.68926 17.3999 10.5C17.3999 14.3108 14.3107 17.4 10.4999 17.4C6.68914 17.4 3.5999 14.3108 3.5999 10.5ZM10.4999 2.40002C6.0264 2.40002 2.3999 6.02652 2.3999 10.5C2.3999 14.9735 6.0264 18.6 10.4999 18.6C12.5207 18.6 14.3687 17.86 15.7876 16.6362L20.5756 21.4243C20.81 21.6586 21.1899 21.6586 21.4242 21.4243C21.6585 21.19 21.6585 20.8101 21.4242 20.5758L16.6361 15.7877C17.8599 14.3688 18.5999 12.5208 18.5999 10.5C18.5999 6.02652 14.9734 2.40002 10.4999 2.40002Z"
                    fill="#f9f9f9"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="absolute w-[800px] left-[50%] top-[63%] translate-y-[-50%] translate-x-[-50%]">
              <Recommended />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
