function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]+/g, "");

  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  if (str == reversedStr) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("kodok")); //true
console.log(isPalindrome("bjir")); //false
console.log(isPalindrome("katak")); //true

// rekursif
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]+/g, "");

  if (str.length <= 1) {
    return true;
  }

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }
}

console.log(isPalindrome("kodok")); //true
console.log(isPalindrome("bjir")); //false
console.log(isPalindrome("katak")); //true
