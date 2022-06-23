import { Variant } from '../model/Catalog/Furniture';
import { getVariants } from '../dictionary/variants';

export const getVariantsByProductId = (productId: number): Variant[] => {
  return getVariants().filter(variant => variant.ecommerceId === productId);
};

export const getVariantById = (variantId: number): Variant => {
  const variantsById = getVariants().filter(variant => variant.variantId === variantId);
  return variantsById[0];
};

export const getFirstVariantForProduct = (productId: number | null): Variant | null => {
  const variantsById = getVariants().filter(variant => variant.ecommerceId === productId);
  if (variantsById.length > 0) {
    return variantsById[0];
  }
  return null;
};
