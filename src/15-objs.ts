(()=>{

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = { //Objeto como tipo
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'Product1',
    createAt: new Date(),
    stock: 12
  })

  addProduct({
    title: 'Product1',
    createAt: new Date(),
    stock: 12,
    size: 'XL'
  })

  products.push({
    title: 'producto3',
    createAt: new Date(),
    stock: 34,
    size: 'M'
  })

  console.log(products);



})();
