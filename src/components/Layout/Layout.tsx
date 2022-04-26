import React from "react";
import { Link } from "react-router-dom";
import Minicart from "./../Minicart";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav style={{textAlign: "center"}}>      
        <Link to="/">Home</Link> |{" "} 
        <Link to="/cart">Cart</Link> |{" "} 
        <Link to="/catalog">Catalog</Link>
      </nav>
      <Minicart />
      <main style={{textAlign: "center"}}>{children}</main>
    </>
  );
};

export default Layout;
