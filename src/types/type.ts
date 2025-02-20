export interface IProduct {
  _id: string;
  name: string;
  price: IPrice;
  description: string;
  media: {
    mainMedia: IMedia;
    items: IMedia[];
  };
  productType: string;
  additionalInfoSections: IAdditionalInfoSection[];
  variants: IVariant[];
  productOptions: IProductOptions[];
}

export interface IVariant {
  choices:
    | Record<string, string>
    | (undefined & {
        Color?: string;
        Size?: string;
      });
  variant: {
    priceData: IPrice;
  };
  stock: {
    trackQuantity: boolean;
    quantity: number;
    inStock: boolean;
  };
}

export interface IProductOptions {
  name: string;
  choices: {
    value: string;
    description: string;
    inStock?: boolean;
  }[];
}

interface IPrice {
  formatted: {
    price: string;
    discountedPrice?: string;
  };
}

interface IAdditionalInfoSection {
  title: string;
  description: string;
}

interface IMedia {
  image: {
    url: string;
  };
}

export interface ICategories {
  _id: string;
  description?: string;
  name: string;
  media: {
    mainMedia: IMedia;
    items: IMedia[];
  };
  slug?: string;
}
