var mark = {firstName: "Mark",
            lastName: "Jones",
            mass: 78,
            height: 1.69,
            markBMI: function() {
              this.BMI = this.mass / (this.height * this.height)
              return this.BMI;
            }
           }

var john = {firstName: "John",
            lastName: "Smith",
            mass: 92,
            height: 1.95,
            johnBMI: function() {
              this.BMI = this.mass / (this.height * this.height)
              return this.BMI;
            }
           }

if (mark.markBMI() > john.johnBMI()) {
  console.log(mark.firstName + ' ' + mark.lastName + ' has a higher BMI which is ' + mark.BMI);
} else if (john.BMI > mark.BMI) {
  console.log(john.firstName + ' ' + john.lastName + ' has a higher BMI which is ' + john.BMI);
} else {
  console.log(john.firstName + ' and ' + mark.firstName + ' have the same BMI');
}