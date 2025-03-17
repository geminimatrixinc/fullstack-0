// SPREAD
// COPY ARRAY WITH SPREAD
const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2)];

console.log(`arr2: ${arr2}`);
console.log(`arr3: ${arr3}`);


// SPREAD WITH OBJECTS


const obj1 = { x : 1, y : 2 };
const obj2 = { z : 3, zz: 4 };

// add members obj1 and obj2  to obj3
const obj3 = {...obj1, ...obj2};

console.log(obj3); // {x: 1, y: 2, z: 3}


const person1 = {
  name: 'Brad',
  age: 36
};

const person2 = {
  ...person1,
  email: 'brad@gmail.com'
};

//console.log(`person2.age: ${person2.age} person2.name: ${person2.name} person2.email: ${person2.email}`);

console.log(person2)