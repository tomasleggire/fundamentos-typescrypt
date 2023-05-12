(()=>{

  const calcTotal = (prices: number[]): string => { //Antes de la arrow, declaramos que tipo de dato va a devolver
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  }

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log('El total es: ' + rta);
  }

  printTotal([1,23,3,4,5,5]);

})();
