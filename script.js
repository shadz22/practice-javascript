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


// // Ternary operator and Switch statement
// var firstName = "John";
// var age = 22;

// age >= 18 ? console.log(firstName + ' drinks beer.') 
// : console.log(firstName + ' drinks juice');

// var drink = age >=18 ? 'beer' : 'juice';
// console.log(drink);

// //Switch Statement
// var job = 'teacher';
// switch (job) {
//   case 'teacher':
//     console.log(firstName + ' teaches kids how to code');
//     break;
//   case 'driver':
//     console.log(firstName + ' drives an uber in london');
//     break;
//   case 'designer':
//     console.log(firstName + ' designs websites');
//     break;
//   default:
//     console.log(firstName + ' does something else');
// }

// //another Switch example
// switch (true) {
//   case age < 13:
//     console.log(firstName + ' is a boy');
//     break;
//   case age >= 13 && age <20:
//     console.log(firstName + ' is a teenager');
//     break;
//   case age >=20 && age <30:
//     console.log(firstName + ' is a young man');
//     break;
//     default:
//       console.log(firstName + ' is a man');
// }

// //Functions
// function calculateAge(birthYear) {
//   return 2020 - birthYear;
// }
// var myAge = calculateAge(1981);
// console.log(myAge);

// function yearsUntilRetirement(year, name) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(name + ' retires in ' + retirement + ' years.');
//   } else {
//     console.log(name + ' is already retired');
//   }
// }
// yearsUntilRetirement(1934, 'John');


// //Function expression
// var whatDoYouDo = function(job, firstName) {
//   switch(job) {
//     case 'teacher':
//       return firstName + ' teaches kids how to code';
//     case 'designer':
//       return firstName + ' designs websites';
//     case 'driver':
//       return firstName + ' drives an uber';
//     default:
//       return firstName + ' does something else'; 
//   }
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Mark'));
// console.log(whatDoYouDo('retired', 'James'));


//Objects and methods
var john = { firstName: "John",
             lastName: "Smith",
             yearOfBirth: 1990,
             family: ["Jane", "Bob", "Steve"],
             isMarried: false,
             calcAge: function() {
               this.age = 2020 - this.yearOfBirth
             }
            }

john.calcAge();
console.log(john);


// Loops
// for loop
var john = ['John', "Smith", 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// continue
var james = ['James', "Jones", 1986, 'teacher', false];
for (var i = 0; i < james.length; i++) {
  if (typeof james[i] !== 'string') continue;
    console.log(james[i]);
}

//break
for (var i = 0; i < james.length; i++) {
  if (typeof james[i] !== 'string') break;
    console.log(james[i]);
}

// Looping backwards
for ( var i = james.length -1; i >= 0; i--) {
  console.log(james[i]);
}