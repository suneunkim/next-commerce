import Image from "next/image";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  searchOpenState,
  seletedCategoryState,
  seletedOptionsState,
  showMenuState,
} from "./Recoil";
import Link from "next/link";
import SearchModal from "./SearchModal";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import NavList from "./NavList";
import { Variants, motion, AnimatePresence } from "framer-motion";

interface ShowMenuState {
  inside: boolean;
  product: boolean;
  cs: boolean;
}

const Nav = () => {
  const [searchOpen, setSearchOpen] = useRecoilState(searchOpenState);
  const selectedList = useRecoilValue(seletedOptionsState);
  const [showMenu, setShowMenu] = useRecoilState(showMenuState);
  const [selectedCategory, setSelectedCategory] =
    useRecoilState(seletedCategoryState);
  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const [showMenuPlus, setShowMenuPlus] = useState<ShowMenuState>({
    inside: false,
    product: false,
    cs: false,
  });
  const handlePlusClick = (menuKey: keyof ShowMenuState) => {
    setShowMenuPlus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };
  const handleCategroyClick = (category: string) => {
    setSelectedCategory(category);
    setShowMenu(false);
  };

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, height: 0, visibility: "hidden" },
    visible: { opacity: 1, height: "auto", visibility: "visible" },
  };

  return (
    <>
      {/* 모바일용 Nav */}
      <div className="relative">
        <div className="sm:hidden h-20 px-4 w-full fixed z-50 flex items-center justify-between bg-white">
          {searchOpen && <SearchModal mobile setSearchOpen={setSearchOpen} />}
          {showMenu && (
            <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-60" />
          )}
          {showMenu && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              className="absolute w-2/3 h-screen top-0 left-0 bg-white rounded-r-[200px] rounded-b-none shadow-xl min-w-[300px]"
            >
              <ul className="flex flex-col p-5 text-lg font-semibold space-y-3">
                <li onClick={handleCloseMenu} className="my-10">
                  <IoMdClose size="30" />
                </li>
                <li className="flex justify-between">
                  INSIDE PETHROOM
                  <span
                    onClick={() => handlePlusClick("inside")}
                    className="mr-5"
                  >
                    {showMenuPlus.inside ? "-" : "+"}
                  </span>
                </li>
                <motion.ul
                  variants={fadeInUpVariants}
                  initial="hidden"
                  animate={showMenuPlus.inside ? "visible" : "hidden"}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="font-normal m-0 h-0 text-gray-600 space-y-3 pl-5 transition"
                >
                  <li>MISSION</li>
                  <li>ROOMMATE</li>
                  <li>COLLABORATION</li>
                </motion.ul>
                {/*  */}
                <li className="pb-[12px] text-orange-500">EVENT</li>
                <li className="flex justify-between">
                  PRODUCT{" "}
                  <span
                    onClick={() => handlePlusClick("product")}
                    className="mr-5"
                  >
                    {showMenuPlus.product ? "-" : "+"}
                  </span>
                </li>
                <motion.ul
                  variants={fadeInUpVariants}
                  initial="hidden"
                  animate={showMenuPlus.product ? "visible" : "hidden"}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="font-normal m-0 h-0 text-gray-600 space-y-3 pl-5 transition"
                >
                  <li onClick={() => handleCategroyClick("ALL")}>ALL</li>
                  <li onClick={() => handleCategroyClick("위생")}>위생</li>
                  <li onClick={() => handleCategroyClick("미용")}>미용</li>
                  <li onClick={() => handleCategroyClick("간식")}>간식</li>
                  <li onClick={() => handleCategroyClick("리빙")}>리빙</li>
                  <li onClick={() => handleCategroyClick("놀이")}>놀이</li>
                </motion.ul>
                <li className="flex justify-between">
                  CS CENTER
                  <span onClick={() => handlePlusClick("cs")} className="mr-5">
                    {showMenuPlus.cs ? "-" : "+"}
                  </span>
                </li>
                <motion.ul
                  variants={fadeInUpVariants}
                  initial="hidden"
                  animate={showMenuPlus.cs ? "visible" : "hidden"}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="font-normal m-0 h-0 text-gray-600 space-y-3 pl-5 transition"
                >
                  <li>REAL REVIEW</li>
                  <li>MEMBERSHIP</li>
                  <li>COLLABORATION</li>
                  <li>NOTICE</li>
                  <li>FAQ</li>
                  <li>Q&A</li>
                </motion.ul>
              </ul>
              {/* showMemu 하단부 */}
              <div className="absolute bottom-0 w-full bg-blue-950">
                <div className="flex space-x-5 bg-white p-5 font-semibold text-blue-950">
                  <span>login</span>
                  <span className="font-light">|</span>
                  <span>join</span>
                  <span className="font-light">|</span>
                  <span className="text-orange-500">membership</span>
                </div>
                <div className="flex items-center justify-between px-4 py-2 ">
                  <div className="text-white flex flex-col gap-2 items-center justify-center p-3 text-sm">
                    <div className="flex justify-between bg-[#2d4874] p-1 px-3  rounded-lg space-x-9 w-48">
                      <span>고객센터</span>
                      <span>1234-5678</span>
                    </div>
                    <div className="flex justify-between bg-[#2d4874] p-1 px-3  rounded-lg w-48">
                      <span>1분 전화주문</span>
                      <span>1234-9876</span>
                    </div>
                  </div>
                  <img
                    className="w-16 h-16 mr-5"
                    src="https://m.pethroom.com/web/upload/page/layout/cs_boss.png"
                  />
                </div>
              </div>
            </motion.div>
          )}
          <RxHamburgerMenu size="24" onClick={() => setShowMenu(true)} />

          <Link href="/">
            <Image
              src="/logo_pethroom.png"
              alt="pethroom"
              width={160}
              height={80}
            />
          </Link>
          <div className="flex items-center space-x-3">
            <IoSearchOutline size="24" onClick={() => setSearchOpen(true)} />
            <span className="bg-blue-800 w-8 aspect-square rounded-full flex items-center justify-center font-bold text-yellow-300">
              {selectedList.length}
            </span>
          </div>
        </div>
      </div>
      {/* PC용 Nav */}
      <div className="hidden sm:flex w-full fixed z-50 min-w-[1020px] flex-col">
        <nav className="hidden h-0 sm:flex flex-grow p-4 sm:h-14 bg-white justify-between items-center">
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
              <Link href="/cart">
                <li className="cursor-pointer">cart</li>
              </Link>
              <li className="text-orange-600">membership</li>
              <li
                className="cursor-pointer"
                onClick={() => setSearchOpen(true)}
              >
                search
              </li>
            </ul>
          </div>
        </nav>
        <nav className="hidden h-0 sm:flex flex-shrink sm:h-14 bg-blue-800 items-center">
          <NavList />
          <div className="ml-auto mr-5 px-3 py-[3px] bg-white text-blue-800 rounded-lg">
            문의사항 010-9918-4429
          </div>
        </nav>
        {searchOpen && <SearchModal setSearchOpen={setSearchOpen} />}
      </div>
    </>
  );
};

export default Nav;
