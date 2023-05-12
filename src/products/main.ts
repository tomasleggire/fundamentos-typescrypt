import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'Product5',
  createAt: new Date(),
  stock: 12
})

addProduct({
  title: 'Product6',
  createAt: new Date(),
  stock: 12,
  size: 'XL'
})

console.log(products);

const total =  calcStock();
console.log(total);
