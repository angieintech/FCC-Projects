const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"]; 
/* Accessed a nested object. Challenge: Access the myStorage object and 
assign the contents of the glove box property to the gloveBoxContents variable. */
