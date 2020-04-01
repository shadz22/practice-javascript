/*****************************
* CODING CHALLENGE 3
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/

function calculateTip(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill <= 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return bill * percentage;
}

var tips = []
tips.push(calculateTip(124))
tips.push(calculateTip(48))
tips.push(calculateTip(268))

var bills = [124, 48, 268]

var finalAmount = [tips[0] + bills[0],
                   tips[1] + bills[1],
                   tips[2] + bills[2]];

console.log(tips, finalAmount);
