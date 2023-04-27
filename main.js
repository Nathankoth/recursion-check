function isPalindrome(word) {
    if (word.length <= 1) {
      return true;
    }
    
    if (word[0] !== word[word.length - 1]) {
      return false;
    }
    
    return isPalindrome(word.slice(1, -1));
  }
  console.log(isPalindrome("gag")); // true
console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("php")); // true
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false
