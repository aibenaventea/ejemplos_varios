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
  

// function makePasta(pasta, makeSauce) {
//     console.log("Boiling water");
//     console.log("Putting " + pasta + " pasta in the water");
//     // ¡crea una variable para la salsa!
//     var sauce = makeSauce();          // invoca makeSauce, nuestro callback
//     console.log("Mixing sauce");
//     console.log("Pasta is done!");
//     return pasta + " Pasta with " + sauce + " sauce! Voila!";
//   }
//   function makePesto() {
//     console.log("Making Pesto");
//     return "pesto";
//   }
//   function makeAlfredo() {
//     console.log("Making Alfredo");
//     return "alfredo";
//   }
// //   // ¡pasamos toda la receta makePesto a makePasta!
// //   console.log(makePasta("Penne", makePesto));
// //   // observa la falta de paréntesis después de makePesto
// //   // Recuerda: queremos pasar la función, no ejecutarla y pasarla al valor de retorno.
// //   console.log(makePasta("Farfalle", makeAlfredo));
  
  
  

// // asumimos que tienes jQuery
// fetch(document).ready(function(){
//   let favoritePokemon;
//   // el enlace determinado es para entregar información sobre Bulbasaur
//   fetch.get("https://pokeapi.co/api/v2/pokemon/1/", function(data){ 
//     favoritePokemon = data.name;
// console.log("Got my favorite Pokemon", favoritePokemon);      // ¡Predice el resultado!
//   });
// });       


// function personConstructor(name, age) {
//   // un objeto literal que será devuelto
//   let person = {};
//   // atributos de una persona
//   person.name = name;
//   person.age = age;
//   // cuando se adjuntan a un objeto o una instancia, las funciones se llaman "métodos".
//   // este es nuestro primer método, greet
//   person.greet = function(){
//       console.log("Hello my name is " + person.name + " and I am " + person.age + " years old!");
//   }
//   // por último, esta función debe devolver una instancia
//   return person;
// }
// // crea la instancia "steve", ejecuta greet
// let steve = personConstructor("Steve", 27);
// steve.greet();
// // crea la instancia "anika", ejecuta greet. observa que esto es diferente
// let anika = personConstructor("Anika", 33);
// anika.greet();
// // por último, observa cómo podemos refinar el método greet para cualquier instancia particular
// let emily = personConstructor("Emily", 22);
// emily.greet = function() {
//   console.log("I am the greatest, ever!");
// };
// // emily.greet();

// // la convención de nombres para Clase y Constructor de Objetos es que empiezan con mayúscula y en singular
// function Person(name, age) {
//   var privateVariable = "This variable is private";
//   var privateMethod = function() {
//       console.log(this);
//   }
//   this.name = name;
//   this.age = age;
//   this.greet = function() {
//       console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//   }
// }
// var eliza = new Person("Eliza", 48);
// console.log(eliza.privateVariable);
// // ¡indifinado!

// function Cat(catName) {
//   let name = catName;
//   this.getName = function() {
//     return name;
//   };
// }
// //agrega un método al prototipo de gato
// Cat.prototype.sayHi = function() {
//   console.log('meow');
// };
// //agrega un método al prototipo de gato
// Cat.prototype.numLegs = 4;

// let muffin = new Cat('muffin');
// let biscuit = new Cat('biscuit');
// console.log(muffin, biscuit);
// //podemos acceder a las propiedades de prototipo de la misma que accederíamos a las propiedades "propias"
// muffin.sayHi();
// biscuit.sayHi();
// console.log(muffin.numLegs);
// // podemos cambiar los atributos de una instancia en lugar de mantener el conjunto de valores por prototipo
// muffin.numLegs = 3;
// // pobres gatos mutantes: muffin.__proto__.numLegs ++;
// // al hacerle esto a muffin, causará que todos los gatos (cats) tengan 5 piernas, pero muffin seguirá teniendo 3

// console.log(catName)

// // Define el constructor de objetos
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// // Une los métodos de clase utilizando .prototype
// Person.prototype.greet = function() {
//   console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//   return this;
// };
// // Crea nuevas instancias con la palabra clave nueva
// let amelia = new Person('Amelia', 36);
// // Crea métodos de instancia al unir la función directamente a una instancia
// amelia.sing = function() {
//   console.log("Lalalala!");
// };

// Las variables privadas tienen un ámbito definido al constructor con la palabra clave "var".
// function Car(make, model) {
//   let odometer = 0;
//   this.make = make;
//   this.model = model;
  
//   // Para hacer que las funciones sean privadas, las dirigimos al constructor
//   function updateOdometer(distance) {
//       odometer += distance;
//   };
  
//   // Las funciones "getter" nos ayudan a leer variables privadas
//   this.readOdometer = function() {
//     return odometer;
//   }
  
//   // Las funciones "setter" nos ayudan a actualizar variables privadas
//   this.drive = function(distance) {
//     updateOdometer(distance);
//     // "return this" nos permitirá encadenar métodos
//     return this;
//   }
// }
// let myCarInstance = new Car("Chevy", "Camaro");
// // al devolver esto, podemos encadenar drive()
// myCarInstance.drive(50).drive(90); 
// // la variable privada está indefinida
// console.log(myCarInstance.odometer);
// // pero podemos leerla con nuestra función getter
// console.log(myCarInstance.readOdometer());


// clase padre Dot
class Dot {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }
  showLocation() {
      console.log(`This ${ this.constructor.name } is at x ${ this.x } and y ${ this.y }`);
  }
  // método simple en la clase padre
  parentFunction(){
      return "This is coming from the parent!";
  }
}
// clase hijo de círculo
class Circle extends Dot {
  constructor(x, y, radius) {
      super(x, y);
      this.radius = radius;
  }
  // función simple en la clase hijo
  childFunction() {
      // al utilizar super, podemos llamar al método padre
      const message = super.parentFunction();
      console.log(message);
  }
}
const circle = new Circle(1, 2, 3);
circle.childFunction();


