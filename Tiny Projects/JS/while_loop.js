// Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.

const myArray = [];
let j = 5; //starter aka 5

while (j >= 0) {
  myArray.push(j);
  j--; // this will decrement all the way to zero. Aka [5,4,3,2,1,0]
}

