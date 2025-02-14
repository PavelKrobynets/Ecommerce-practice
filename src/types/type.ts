export interface IProductCard {
  sometype: string;
}

export interface Product {
  _id: string;
  name: string;
  price: {
    formatted: {
      price: string;
      discountedPrice: string;
    };
  };
  description: string;
  images: string[];
  productType: string;
}
