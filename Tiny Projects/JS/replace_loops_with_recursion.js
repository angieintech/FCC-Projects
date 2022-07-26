// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
function sum(arr, n) {
 if (n <= 0) {
      return n; //returns n instead of 1
    } else {
      return sum(arr, n - 1) + arr[n - 1]; //use + symbol to add values from the assignment
    }
}
