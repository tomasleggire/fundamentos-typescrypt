(()=>{

  let userId: string | number;
  userId = 1212;
  userId = 'asasda';

  function greeting(myText: string | number) { // Estoy declarando que va a recibir o un string o un numero, nada mas.
    if(typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting('Tomas');
  greeting(12.121212);




})();
