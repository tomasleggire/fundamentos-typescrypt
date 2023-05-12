(()=>{

  const login = (data: {email: string, password: number}) => {
    console.log(data.email,data.password);
  }

  //login('tomas@tomi.co', '1212121212');

  login({
    email: 'tomas@tomi.co',
    password: 1212121212
  })

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }) => {
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

  console.log(products);

})();
