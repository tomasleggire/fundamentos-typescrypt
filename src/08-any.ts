(()=>{

  let myDinamicVar: any;
  myDinamicVar = 100;
  myDinamicVar = null;
  myDinamicVar = {};
  myDinamicVar = '';

  myDinamicVar = 'Hola';

  const rta = (myDinamicVar as string).toLowerCase(); //Estamos diciendo, tratame a myDinamicVar como un string
  console.log(rta);

  myDinamicVar = 1212;
  const rta2 = (<number>myDinamicVar).toFixed(); //Estamos diciendo, tratame a myDinamicVar como un string
  console.log(rta2);

})();
