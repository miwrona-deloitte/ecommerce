export interface Product {
  id: number;
  name: string;
  price: string;
  url: string;
}
export interface CMSProduct {
  ecommerceId: number;
  name: string;
  price: string;
  picture: {
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
    id: cmsProduct.ecommerceId,
    name: cmsProduct.name,
    price: cmsProduct.price,
    url: cmsProduct.picture.url,
  };
};
