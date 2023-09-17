export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  store:Store
  image: Image[]
};

export interface Store {
  id:string
  name: string
  category: Category[]
  billboard: Billboard[]
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
  name: string;
  billboard: Billboard;
  store:Store
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