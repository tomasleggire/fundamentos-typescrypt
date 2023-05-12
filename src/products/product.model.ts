export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = { //Objeto como tipo
  title: string,
  createAt: Date,
  stock: number,
  size?: Sizes
};
