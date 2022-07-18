import { useDispatch } from 'react-redux';
import { cartActions } from '../store';
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_BY_ID } from '../graphql/query/product';
import { CMSProduct, parseCmsProductToProduct } from '../model/Catalog/Product';

const ProductDetails: React.FC<{ productId: string | undefined }> = props => {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { productId: props.productId },
  });
  let cmsProduct: CMSProduct | undefined = undefined;
  if (loading) return <div>'Loading...'</div>;
  if (data) {
    cmsProduct = data.productCollection.items[0];
  }
  if (error) {
    // log error.message
    return <span>`No products found.`</span>;
  }
  const product = parseCmsProductToProduct(cmsProduct);
  let imgUrl = '/../../pictures/default.jpeg';
  let productName = '';
  if (product !== null && typeof product === 'object') {
    imgUrl = product.url;
    productName = product.name;
  }

  const addToCartHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(cartActions.addToCart({ product: product, qty: 1 }));
  };

  return (
    <div>
      <span>{productName}</span>
      <img src={imgUrl} width='400' alt={imgUrl} />
      <button onClick={addToCartHandler}>Add To Cart</button>
    </div>
  );
};

export default ProductDetails;
