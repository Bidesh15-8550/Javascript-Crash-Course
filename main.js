//alert('Hello World'); //popup message
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
person.email ='bideshbiswas@ymail.com'
console.log(person.firstname,person.lastname,person.hobbies);
console.log(person);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentish appointment',
        isCompleted: false
    },

];
console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

for(let j=0; j<todos.length;j++){
    console.log(todos[j].text);
}
for(let todo of todos){
    console.log(todo.id);
}



//For Loops
for(let i=0;i<10;i++){
    console.log(i);

    console.log(`For Loop Number: ${i}`);

}

//while loop
let i=0;
while(i<=10){
    console.log(`While Loop Number: ${i}`);
    i++
}

//forEach,map,filter
todos.forEach(function(todo){
    console.log(todo.text);
});
//map
const todoText =  todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

//filter
const todoCompleted =  todos.filter(function(todo){
    return todo.isCompleted === true;
});

console.log(todoCompleted);


// const todoCompleted =  todos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text;
// })

// console.log(todoCompleted);

const yz = 4;
const xy = 10;
if(yz===10){
    console.log('yz is 10');
} else if(yz>10){
    console.log('yz is greater than 10');
}
 else {
    console.log('yz is NOT 10');
}

if(yz>5 || xy>10){
    console.log('yz is more than 5 or xy is 10');
}
if(yz>5){
    if(xy>10){

    }
}

const col=9;
const color=col>10 ? 'red': 'blue';
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}
console.log(color);

//function
function addNums(num1 =1,num2=2){
    console.log(num1+num2);
}

addNums(5,4);

function addNum(num3 =1,num4=2){
   return num3+num4;
}

console.log(addNum(5,5));

const addnums = (num5=1,num6=1) => console.log(num5+num6);
addnums(5,6);

const adddnums = (num5=1,num6=1) => {
    return num5+num6;
}
console.log(adddnums(5,7));


//constructor function
function Person(firstName, lastName,dob){
    this.firstName= firstName;
    this.lastName=lastName;
    this.dob=dob;
}