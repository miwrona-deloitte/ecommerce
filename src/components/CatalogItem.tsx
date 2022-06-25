import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store';
import { CMSProduct } from '../model/Catalog/Product';
import styles from './CatalogItem.module.scss';
import { getVariantsByProductId, getVariantById, getFirstVariantForProduct } from '../service/VariantService';
import { useApolloClient } from '@apollo/client';
import { GET_VARIANTS_BY_ID } from '../graphql/query/product';

type Props = { product: CMSProduct };

const CatalogItem = (props: Props) => {
  const [active, setActive] = useState<number | null>(null);
  const [variantsCntfl, setVariantsCntfl] = useState();
  console.log(props.product);
  const product = props.product;
  let productParsed = {
    ecommerceId: product.ecommerceId,
    name: product.name,
    price: product.price,
    picture: {
      url: product.picture.url,
      title: product.picture.title,
    },
    qty: 1,
  };

  const dispatch = useDispatch();
  const addToCartHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(cartActions.addToCart({ product: productParsed, qty: 1 }));
  };

  const client = useApolloClient();
  client
    .query({
      query: GET_VARIANTS_BY_ID,
      variables: { ecommerceId: product.ecommerceId },
    })
    .then(result => setVariantsCntfl(result.data.variantCollection.items));

  const variants =
    typeof variantsCntfl === 'object' ? variantsCntfl : getVariantsByProductId(Number(product.ecommerceId));
  const firstVariant = getFirstVariantForProduct(product.ecommerceId);
  const variantOrProduct = firstVariant !== null ? firstVariant : product;
  const pictureUrl = active !== null ? getVariantById(active).picture.url : variantOrProduct?.picture.url;
  const currentVariantId = active !== null ? active : firstVariant?.variantId;

  return (
    <div className={styles.catalogItem}>
      <div className={styles.pictureGroup}>
        <div className={styles.overlayGontainer}></div>
        <div className={styles.overlay}>
          <div className={styles.overlayBtn}>See product</div>
          <div className={styles.actions}>
            <img src='pictures/heart-white.svg' alt='Heart Overlay' width='21' />
            <img src='pictures/basket-white.svg' alt='Basket Overlay' width='21' onClick={addToCartHandler} />
          </div>
        </div>
        <img
          src={pictureUrl}
          alt={product.picture.title}
          width='350'
          height='350'
          className={styles.catalogItemPicture}
        />
      </div>
      <div className={styles.details}>
        <div className={styles.caption}>
          <div className={styles.name}>{product.name}</div>
          <div className={styles.price}>{product.price + ' zł'}</div>
        </div>
        <div className={styles.colorVariant}>
          {variants?.map(variant => (
            <div
              className={
                variant.variantId === currentVariantId ? `${styles.surrounding} ${styles.active}` : styles.surrounding
              }
              key={variant.variantId}
            >
              <div
                className={styles.circle}
                style={{ backgroundColor: variant.color }}
                onClick={() => {
                  setActive(variant.variantId);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
