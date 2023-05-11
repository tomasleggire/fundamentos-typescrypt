(()=> {

  let prices = [1,2,1,2,3,321, 'hola', true];
  // prices.push('aAS');
  // prices.push(true);
  // prices.push({});

  prices.push(12332);

  let products = ['hola', true];
  products.push(false);
  products.push('otro string');

  const mixed: (number | string | boolean | Object)[] = ['hola', true];
  mixed.push(12);
  mixed.push("string");
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2,1,2,3,321];

  numbers.map(item => item * 2);









})();
