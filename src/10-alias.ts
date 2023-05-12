(()=>{


  //Alias Types
  type UserID = string | number; //Declaro el alias con el que puedo reutilizar.
  let userId: UserID;

  //Literal Types
  type Sizes = 'S' | 'M' | 'L' | 'XL'; //Podemos declarar mas especificamente los valores que queramos q pueda resivir.
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'S';

  function greeting(userId: UserID, size: Sizes) {
    if(typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  greeting(1111, 'S');
  greeting('1111', 'XL');

})();
