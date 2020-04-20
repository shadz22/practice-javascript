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

// Primitives
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


// Callback Functions

var years = [1981, 1986, 2001, 2010, 1997];

function arrayCalc(arr, fn) {
  var arrayRes = [];

  for (var i = 0; i < arr.length; i++) {
    arrayRes.push(fn(arr[i]));
  }

  return arrayRes;
}

function calcAge(year) {
  return 2020 - year;
}

function isFullAge(age) {
  return age >= 18;
}

var ageArray = arrayCalc(years, calcAge);
var fullAge = arrayCalc(ageArray, isFullAge);

console.log(ageArray);
console.log(fullAge);


// First class Functions
function interviewQuestions(job) {
  if (job === 'teacher') {
    return function(name) {
      console.log(name + ', what do you teach?');
    }
  } else if (job === 'designer') {
    return function(name) {
      console.log('What do you design ' + name + '?');
    }
  } else {
    return function(name) {
      console.log('What do you do ' + name + '?');
  }
  }
}

var teacherQuestions = interviewQuestions('teacher');
var designerQuestions = interviewQuestions('designer');

teacherQuestions('John');
designerQuestions('Mark');
interviewQuestions('teacher')('James');


///IIFE 
(function () {
  var score = Math.random() * 10
  console.log(score >= 5);
})();

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck)
})(5);


/// Closures
function retirement(retirementAge) {
  var a = ' years left until retirement';
  return function (yearOfBirth) {
    var age = 2020 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
};

var retirementUSA = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUSA(1981);
retirementGermany(1981);
retirementIceland(1981);


/// doing the interview example above, this time with using closures
function interviewQuestions2(job) {
  var msg = 'You are a ';
  
  return function(name) {
    var message = console.log(name + ' ' + msg + job);

    if (job === 'teacher') {
      message;
    } 
    else if (job === 'designer') {
      message;
    } else {
      console.log(name + ', what do you do?');
    }
  }
}

interviewQuestions2('designer')('John');
