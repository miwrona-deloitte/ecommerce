export type Product = {
  ecommerceId: number;
  name: string;
  price: string;
  picture: {
    url: string;
    title: string;
  };
  color?: string;
};

export type Variant = {
  ecommerceId: number;
  variantId: number;
  color: string;
  picture: {
    url: string;
    title: string;
  };
};

export type Color = {
  id: number;
  hex: string;
};
