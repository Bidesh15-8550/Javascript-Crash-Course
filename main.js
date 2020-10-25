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
/*multi
line
comment*/
//array - variables that hold multiple values

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits= ['apples','oranges','pears'];
console.log(fruits);

const fruit= ['apples','oranges','pears'];
fruit[3] = 'grapes';
fruit.push('mangoes');
fruit.unshift('strawberries');
fruit.pop();
console.log(Array.isArray('hello'));
console.log(fruit.indexOf('oranges'));
console.log(fruit);



const person={
    firstname: 'Bidesh',
    lastname: 'Biswas',
    age: 30,
    hobbies: ['music', 'movies','sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }

}
console.log(person.firstname,person.lastname,person.hobbies);
console.log(person);


