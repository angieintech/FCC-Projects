function palindrome(str) {
  let strSearch = str.toLowerCase().replace(/[\W_]/g, "");
  for (let i = 0; i < strSearch.length/2; i+=1){
    if (strSearch[i] !== strSearch[strSearch.length - 1 - i]){
      return false;
    }
  }
  console.log(strSearch);  
  return true;
}
 



palindrome("eye");
