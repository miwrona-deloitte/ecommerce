export interface Product {
  id: number;
  name: string;
  price: string;
  url: string;
}
export interface CMSProduct {
  productId: number;
  name: string;
  price: string;
  picture: {
    url: string;
    title: string;
  };
  thumb?: {
    url: string;
    title: string;
  };
  color?: string;
  qty?: number;
}

export const parseCmsProductToProduct = (cmsProduct: CMSProduct | undefined): Product | null => {
  if (cmsProduct === undefined) {
    return null;
  }
  return {
    id: cmsProduct.productId,
    name: cmsProduct.name,
    price: cmsProduct.price,
    url: cmsProduct.picture.url,
  };
};
