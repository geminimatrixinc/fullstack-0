
/////// ARROW FUNCTIONS /////////

function sayHello() {
    console.log('Hello');
  }
  
  const sayHello2 = name => console.log(`Hello ${name}`);
  
  const greet = (name, message) => console.log(`Hello ${name}, ${message}`);



  // ARROW FUNCTION - NO PARAMS
let greet2 = () => console.log('Hello');
greet2(); // Hello

// ARROW FUNCTION - ONE PARAM
let greet3 = x => console.log(x);
greet3('Hello'); // Hello 

// ARROW FUNCTION = MULTIPLE PARMS
let greet4 = (x, y) => {
  let z = 0;
  console.log(`x: ${x}, y: ${y}, z: ${z}`);
}
greet4(2,5);


// ARROW FUNCTION - AS AN EXPRESSION
let age = 5;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby