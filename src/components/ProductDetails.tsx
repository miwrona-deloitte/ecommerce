import { getProducts } from "../products";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store";
import React from "react";
import Layout from "./Layout/Layout";

const ProductDetails: React.FC<{ productId: string | undefined }> = (props) => {
  interface Item {
    id: number;
    name: string;
    price: string;
    url: string;
  }

  const dispatch = useDispatch();
  const products: Item[] = getProducts();
  let product: Item | undefined = products.find(
    (product) => product.id === Number(props.productId)
  );
  let imgUrl = "/../../pictures/default.jpeg";
  if (typeof product == "object") {
    imgUrl = "/../../" + product.url;
  }

  const addToCartHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(cartActions.addToCart({ product: product }));
  };

  const productName = typeof product == "object" ? product.name : "";

  return (
    <Layout>
      <div>
        <span>{productName}</span>
        <img src={imgUrl} width="400" alt={imgUrl} />
        <button onClick={addToCartHandler}>Add To Cart</button>
      </div>
    </Layout>
  );
};

export default ProductDetails;
