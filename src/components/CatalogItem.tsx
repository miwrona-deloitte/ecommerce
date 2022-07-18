import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions, Item } from '../store';
import { CMSProduct } from '../model/Catalog/Product';
import styles from './CatalogItem.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Variants from './Variants';
import VariantService from '../service/VariantService';
import { getVariants } from '../dictionary/variants';

type Props = { product: CMSProduct };

const CatalogItem = (props: Props) => {
  const [active, setActive] = useState<number | null>(null);
  const [cartItemColor, setCartItemColor] = useState<string>('#4F311C');
  const product = props.product;
  const cartItem: Item = {
    id: product.productId,
    name: product.name,
    price: product.price,
    url: product.picture.url,
    qty: 1,
    color: cartItemColor,
  };

  const dispatch = useDispatch();
  const addToCartHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(cartActions.addToCart({ product: cartItem, qty: 1 }));
  };

  const variantsCntfl = useSelector((state: RootState) => state.variants.items);
  const variantService = new VariantService(variantsCntfl ?? getVariants());
  const productId = Number(product.productId);
  const variants = variantService.getVariantsByProductId(productId);
  const firstVariant = variantService.getFirstVariantForProduct(productId);
  const variantOrProduct = firstVariant !== null ? firstVariant : product;
  const pictureUrl =
    active !== null ? variantService.getVariantById(active).picture.url : variantOrProduct?.picture.url;
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
        <Variants
          variants={variants}
          currentVariantId={currentVariantId}
          setActive={setActive}
          setCartItemColor={setCartItemColor}
        />
      </div>
    </div>
  );
};

export default CatalogItem;
