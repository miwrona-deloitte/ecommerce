import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store';
import { CMSProduct } from '../model/Catalog/Product';
import styles from './CatalogItem.module.scss';
import { getVariantsByProductId, getVariantById, getFirstVariantForProduct } from '../service/VariantService';
import { getVariantsFromCntflByProductId } from '../service/VariantContentfulService';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Variants from './Variants';

type Props = { product: CMSProduct };

const CatalogItem = (props: Props) => {
  const [active, setActive] = useState<number | null>(null);
  const product = props.product;
  const productParsed = {
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

  const variantsCntfl = useSelector((state: RootState) => state.variants.items);
  const variants =
    typeof variantsCntfl === 'object'
      ? getVariantsFromCntflByProductId(variantsCntfl, Number(product.ecommerceId))
      : getVariantsByProductId(Number(product.ecommerceId));
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
        <Variants variants={variants} currentVariantId={currentVariantId} setActive={setActive} />
      </div>
    </div>
  );
};

export default CatalogItem;
