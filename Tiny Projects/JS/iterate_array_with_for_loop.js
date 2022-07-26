// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
const myArr = [2, 3, 4, 5, 6];
let total = 0
for (let k = myArr.length - 1; k >= 0; k--) { // aka k < myArr.length;
   total += myArr[k];
} // output: 20 because total is equal to 20.
