alert('Hello World');
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

//let(reassign value or changeable),const(cant be changed)
//string,numbers,boolean,null,undefined,symbol

const name= 'Biki';
const age=24;
const rating=4.5;
const isCool= true;
const x = null;
const y= undefined;
let z;

console.log(typeof age);

//concetanation

console.log('My name is '+ name +' and I am '+age);

//Template string
const hello = 'My name is ${name} and I am ${age}';
console.log(hello);

const s = 'Hello World';
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));

const t = 'technology, computers,it,code';
console.log(t.split(','));

//arrays



