import React from "react";

const NavList = () => {
  return (
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
  );
};

export default NavList;
