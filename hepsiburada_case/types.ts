export interface ProductModel {
  id: number;
  name: string;
  date: number;
  specs: ProductSpecsModel;
  price: ProductPriceModel;
  images: string[];
}

export interface ProductPriceModel {
  amount: number;
  previousAmount?: number;
  discount?: number;
  currency?: string;
}

export interface ProductSpecsModel {
  [key: string]: string;
}
