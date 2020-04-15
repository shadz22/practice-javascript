// Function Constructor

var john = {
    name: "John",
    yearOfBirth: 1981,
    job: "Teacher"
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function () {
  console.log(2020 - this.yearOfBirth);
}

var john = new Person("John", 1981, "Teacher");
var mark = new Person("Mark", 1961, "Designer");
var jane = new Person("Jane", 1951, "Retired");

john.calculateAge();
mark.calculateAge();
jane.calculateAge();

Person.prototype.lastName = "Smith";

console.log(john);
console.log(mark);
console.log(jane);

// Primitives vs Objects

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


//Objects

var obj1 = {
    name: "John",
    age: 26
}

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);


// Functions

var age = 27;
var obj = {
    name: "James",
    city: "London"
};

function change(a, b) {
  a = 30;
  b.city = "Lisbon"
}

change(age, obj);
console.log(age);
console.log(obj.city);