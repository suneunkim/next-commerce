import React from "react";
import { useRecoilValue } from "recoil";
import { showMenuState } from "./Recoil";

const Container = ({ children }: any) => {
  const showMenu = useRecoilValue(showMenuState);
  return <div className={`${showMenu ? "fixed" : ""}`}>{children}</div>;
};

export default Container;
