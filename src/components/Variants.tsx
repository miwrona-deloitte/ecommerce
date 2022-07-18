import styles from './Variants.module.scss';
import { Variant } from '../model/Catalog/Furniture';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  variants: Variant[];
  currentVariantId: number | undefined;
  setActive: Dispatch<SetStateAction<number | null>>;
  setCartItemColor: Dispatch<SetStateAction<string>>;
}

const Variants = ({ variants, currentVariantId, setActive, setCartItemColor }: IProps): React.ReactElement => {
  return (
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
              setCartItemColor(variant.color);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Variants;
