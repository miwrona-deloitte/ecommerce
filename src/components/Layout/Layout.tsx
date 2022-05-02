import React from "react";
import { Link } from "react-router-dom";
import Minicart from "./../Minicart";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showMinicart, setShowMinicart] = useState(false);
  const counter = useSelector((state: RootState) => state.cart.counter);
  return (
    <>
      <div>
        <nav style={{ textAlign: "center" }}>
          <Link to="/">Home</Link> | <Link to="/cart">Cart</Link> |{" "}
          <Link to="/catalog">Catalog</Link>
        </nav>
        <span style={{ position: "absolute", right: "10%", cursor: "pointer" }}>
          {counter}
          <img
            onClick={() => {
              setShowMinicart(!showMinicart);
            }}
            src="/../../../pictures/cart.png"
            width="30px"
            alt="cart icon"
          />
        </span>
      </div>
      {showMinicart && <Minicart />}
      <main style={{ textAlign: "center" }}>{children}</main>
    </>
  );
};

export default Layout;
