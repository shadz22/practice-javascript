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