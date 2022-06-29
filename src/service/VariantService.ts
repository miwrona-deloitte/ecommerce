import { Variant } from '../model/Catalog/Furniture';

class VariantImpl {
  private variants;

  constructor(variants: Variant[]) {
    this.variants = variants;
  }

  public getVariantsByProductId(productId: number): Variant[] {
    return this.variants.filter(variant => variant.productId === productId);
  }

  public getVariantById(variantId: number): Variant {
    const variantsById = this.variants.filter(variant => variant.variantId === variantId);
    return variantsById[0];
  }

  public getFirstVariantForProduct(productId: number | null): Variant | null {
    const variantsById = this.variants.filter(variant => variant.productId === productId);
    if (variantsById.length > 0) {
      return variantsById[0];
    }
    return null;
  }
}
export default VariantImpl;
