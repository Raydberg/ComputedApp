export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  category: string[];
  image: string;
  rating: number;
  reviews: Review[];
  dimensions: Dimensions;
  manufacturer: Manufacturer;
  discount: Discount | null;
  isFavorite?: boolean;
}

export interface Dimensions {
  weight: string;
  width: string;
  height: string;
  depth: string;
}

export interface Discount {
  isOnSale: boolean;
  salePrice?: number;
  saleEndDate?: Date;
}

export interface Manufacturer {
  name: string;
  model: string;
  releaseDate: Date;
}

export interface Review {
  user: string;
  comment: string;
  rating: number;
}
