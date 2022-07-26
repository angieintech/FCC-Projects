// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr
function multiplyAll(arr) {
  var product = 1;
  
  for (var j = 0; j < arr.length; j++) {
    for (var k = 0; k < arr[j].length; k++) { 
      product *= arr[j][k]; // multiplied j and k with the product. It will multiply all of the values from the sub-arrays
    }
  }
  
  return product;
}


multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
