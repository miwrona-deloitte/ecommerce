import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store';
import { CMSProduct } from '../model/Catalog/Product';
import { getColors } from '../dictionary/colors';
import styles from './CatalogItem.module.scss';

type Props = { product: CMSProduct };

const CatalogItem = (props: Props) => {
  const [active, setActive] = useState(1);
  const colors = getColors();
  const product = props.product;

  const dispatch = useDispatch();
  const addToCartHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(cartActions.addToCart({ product: product, qty: 1 }));
  };

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
          src={product.picture.url}
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
        {/* <div className={styles.colorVariant}>{product.color}</div> */}
        <div className={styles.colorVariant}>
          {colors.map(color => (
            <div className={color.id === active ? 'surrounding active' : 'surrounding'} key={color.id}>
              <div
                className={styles.circle}
                style={{ backgroundColor: color.hex }}
                onClick={() => {
                  setActive(color.id);
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
