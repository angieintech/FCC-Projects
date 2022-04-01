function checkDogObj(obj, checkProp) {
  // Used a one-line if-else statement in JS :)
  // They both return output. 
  // If the object has checkProp passed to the function (obj) and it has a specific property (checkProp). 
  // If we discover property then return that property's value. Otherwise, return "Not Found".
  return (obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found");
}
