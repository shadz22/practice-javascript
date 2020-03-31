// // Type coercion
// var firstName = 'Shadi';
// var age = 38;
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'Teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried);


// // variable mutation
// age = 'thirty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' years old ' + job + '. Is she married? ' + isMarried);

// var lastName = prompt("What is her last name?");
// console.log(firstName + ' ' + lastName);


// Ternary operator and Switch statement
var firstName = "John";
var age = 22;

age >= 18 ? console.log(firstName + ' drinks beer.') 
: console.log(firstName + ' drinks juice');

var drink = age >=18 ? 'beer' : 'juice';
console.log(drink);

//Switch Statement
var job = 'teacher';
switch (job) {
  case 'teacher':
    console.log(firstName + ' teaches kids how to code');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in london');
    break;
  case 'designer':
    console.log(firstName + ' designs websites');
    break;
  default:
    console.log(firstName + ' does something else');
}

//another Switch example
switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy');
    break;
  case age >= 13 && age <20:
    console.log(firstName + ' is a teenager');
    break;
  case age >=20 && age <30:
    console.log(firstName + ' is a young man');
    break;
    default:
      console.log(firstName + ' is a man');
}