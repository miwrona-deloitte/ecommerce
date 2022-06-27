import { Variant } from '../model/Catalog/Furniture';

export const getVariantsFromCntflByProductId = (variants: Variant[], productId: number): Variant[] => {
  return variants.filter(variant => variant.ecommerceId === productId);
};
