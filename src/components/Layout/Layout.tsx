import React from "react";
import Minicart from "./../Minicart";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <Navbar/>
        <main style={{ textAlign: "center" }}>{children}</main>
    </>
  );
};

export default Layout;
