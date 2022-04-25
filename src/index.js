import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Catalog from "./pages/Catalog";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./components/Layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="cart" element={<Cart />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="pdp" element={<ProductDetailsPage />}>
              <Route path=":productId" />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);