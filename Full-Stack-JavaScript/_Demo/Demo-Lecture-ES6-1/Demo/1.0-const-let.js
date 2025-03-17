////// CONST & LET //////

let name = 'John';
let test;

name = 'Jack';
console.log(name);

// use const, if you aren't going to re-assign it
const person = {
  name: 'John',
  age: 33
};


// obj property can change, event though const is used
person.name = 'Jack';
console.log(person);


// person = { name: 'Jack' } // re-assigning will throw error

const nums = [1, 2, 3, 4];
nums.push(5);


