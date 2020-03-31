/* CODING CHALLENGE 1


/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

*/

var heightJohn = 1.95;
var massJohn = 92;

var heightMark = 1.69;
var massMark = 78;

var bmiJohn = massJohn / (heightJohn * heightJohn)
var bmiMark = massMark / (heightMark * heightMark)

var higherBmi = bmiJohn < bmiMark;

// console.log(bmiJohn, bmiMark);

// console.log("Is Mark's BMI higher than John's? " + higherBmi);

if (bmiMark > bmiJohn) {
  console.log('Mark\'s BMI is higher than John\'s');
}
else {
  console.log('John\'s BMI is higher than Mark\'s');
}