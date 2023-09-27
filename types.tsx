export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  store:Store;
   storeId:string;
   categoryId:string;
  image: Image[]
};

export interface Store {
  id:string
  name: string
  category?: Category[]
  billboard?: Billboard[]
  product?:Product[]
}

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
  store:Store
};

export interface Category {
  id: string;
  storeId:string,
  name: string;
  billboard: Billboard;
  store:Store
  product:Product[]
};

export interface Size {
  id: string;
  name: string;
  value: string;
};

export interface Color {
  id: string;
  name: string;
  value: string;
};