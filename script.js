// complete the given function

function palindrome(str){
   if (typeof str !== 'string') {
    return false; // return false if input is not a string
  }
  
  str = str.toLowerCase(); // convert input to lowercase
  var i = 0;
  var j = str.length - 1;
  while (i <= j) {
  if (str.charAt(i) !== str.charAt(j)) {
    return false;
  }
  i++;
  j--;
  }
  return true;
}
module.exports = palindrome
