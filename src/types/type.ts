export interface ISearchParams {
  cat?: string;
  priceMin?: string;
  priceMax?: string;
  sort?: string;
  page?: string;
}

export interface IProduct {
  _id: string;
  name: string;
  price: {
    formatted: {
      price: string;
      discountedPrice?: string;
    };
  };
  description: string;
  media: {
    mainMedia: IMedia;
    items: IMedia[];
  };
  productType: string;
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
