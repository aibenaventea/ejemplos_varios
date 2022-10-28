// var foo = "bar";
// function magic(){
//     foo = "hello world";
//     console.log(foo);
//     var foo;
// }
// magic();
// console.log(foo);

// magicalUnicorns();
// var magicalUnicorns = function(){
//     console.log("Will it blend?");
// }
// console.log("Don't breathe this!");

// DETERMINADO
// console.log(example);
// ejemplo de var = "I'm the example!";
// DESPUÉS DE QUE SEA ELEVADO POR EL INTÉRPRETE
// var example;
// var example = "I'm the example!";
// console.log(example); // registros indefinidos

// let example = "I'm the example!";
// console.log(example);

// console.log("NOW: ");
// console.log("Declaring and assigning variable 'ninja'.");
// var ninja = 'Libby';
// setTimeout( function myCallbackFunction(){
//   console.log("LATER: ")
//   console.log(ninja, "LATER"); }, 2000
// );
// console.log("Printing ninja value.");
// console.log(ninja, "NOW");

// var a = 2;
// var b = function() { console.log("something"); };
// function doSomething(x) {
//   console.log(typeof(x));
// }
// doSomething(a);
// doSomething(b);

// NO ENTIENDO BIEN ESTA PARTE
// function doSomething(possibleCallback) {
//     if (typeof(possibleCallback) === 'function'){
//       console.log('possibleCallback is a callback!');
//       possibleCallback(); //¡podemos invocar el callback!
//     }
//     else {
//       console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
//     }
//   }
//   doSomething(function myCallback(){ console.log('yes, I am a callback!') });
//   doSomething('string');
// NO ENTIENDO BIEN ESTA PARTE

//   function makePasta(pasta, makeSauce) {
//     console.log("Boiling water");
//     console.log("Putting " + pasta + " pasta in the water");
//     console.log("Pasta is done!");
//     return pasta + " Pasta! Voila!";
//   }
//   makePasta("Penne");
//   makePasta("Farfalle");
  

function makePasta(pasta, makeSauce) {
    console.log("Boiling water");
    console.log("Putting " + pasta + " pasta in the water");
    // ¡crea una variable para la salsa!
    var sauce = makeSauce();          // invoca makeSauce, nuestro callback
    console.log("Mixing sauce");
    console.log("Pasta is done!");
    return pasta + " Pasta with " + sauce + " sauce! Voila!";
  }
  function makePesto() {
    console.log("Making Pesto");
    return "pesto";
  }
  function makeAlfredo() {
    console.log("Making Alfredo");
    return "alfredo";
  }
  // ¡pasamos toda la receta makePesto a makePasta!
  console.log(makePasta("Penne", makePesto));
  // observa la falta de paréntesis después de makePesto
  // Recuerda: queremos pasar la función, no ejecutarla y pasarla al valor de retorno.
  console.log(makePasta("Farfalle", makeAlfredo));
  
  
  

