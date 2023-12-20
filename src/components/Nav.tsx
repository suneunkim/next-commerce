import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import { searchOpenState } from "./Recoil";
import Link from "next/link";
import SearchModal from "./SearchModal";

const Nav = () => {
  const [searchOpen, setSearchOpen] = useRecoilState(searchOpenState);

  return (
    <div className="w-full fixed z-10 top-0 min-w-[1000px]">
      <nav className="p-4 h-14 bg-white flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo_pethroom.png"
            alt="pethroom"
            width={160}
            height={80}
          />
        </Link>
        <div>
          <ul className="flex space-x-7 text-blue-900 font-semibold">
            <li>login</li>
            <li>join</li>
            <li className="cursor-pointer">cart</li>
            <li className="text-orange-600">membership</li>
            <li className="cursor-pointer" onClick={() => setSearchOpen(true)}>
              search
            </li>
          </ul>
        </div>
      </nav>
      <nav className="h-14 bg-blue-800 flex items-center">
        <ul className="flex items-center h-14">
          <li className="text-white text-lg font-semibold pr-6 relative group ">
            <p className="p-4">INSIDE PETHROOM</p>
            <ul className="absolute hidden group-hover:block bg-blue-800 px-4 py-3 top-12 w-full text-center space-y-3">
              <li>MISSION</li>
              <li>ROOMMATE</li>
              <li>COLLABORATION</li>
            </ul>
          </li>
          {/*  */}
          <li className="text-white text-lg bg-blue-600 font-semibold px-6 h-full flex items-center">
            EVENT
          </li>
          <li className="text-white text-lg font-semibold relative group ">
            <p className="p-4 px-14">PRODUCT</p>
            <ul className="absolute hidden group-hover:block bg-blue-800 px-4 py-3 top-12 w-full text-center space-y-3">
              <li>ALL</li>
              <li>NEW</li>
              <li>BEST</li>
              <li>목욕</li>
              <li>배변</li>
              <li>간식</li>
            </ul>
          </li>
          <li className="text-white text-lg font-semibold relative group ">
            <p className="p-4 px-14">CS CENTER</p>
            <ul className="absolute hidden group-hover:block bg-blue-800 px-4 py-3 top-12 w-full text-center space-y-3">
              <li>REAL REVIEW</li>
              <li>MEMBERSHIP</li>
              <li>COLLABORATION</li>
              <li>NOTICE</li>
              <li>FAQ</li>
              <li>Q&A</li>
            </ul>
          </li>
        </ul>
        <div className="ml-auto px-3 py-[3px] bg-white text-blue-800 rounded-lg">
          문의사항 010-9918-4429
        </div>
      </nav>
      {searchOpen && <SearchModal setSearchOpen={setSearchOpen} />}
    </div>
  );
};

export default Nav;
