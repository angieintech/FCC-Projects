function checkDogObj(obj, checkProp) {
  // Used a one-line if-else statement in JS :)
  return (obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found");
}
