#JavaScript Basic Script
function factorialize(num) { 
  if (num === 0) {  
    return 1;// num!= num * num * num * num * num;
  }
  else {
    return num * factorialize(num - 1);
  }
}

factorialize(5);
