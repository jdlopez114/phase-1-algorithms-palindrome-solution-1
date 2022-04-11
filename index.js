function reverse(word){
  // const wordArray = word.split("");  // can method chain to clean up code 
  // const reversedWordArray = wordArray.reverse();
  // const reversedWord = reversedWordArray.join("");
  // return reversedWord;
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here -- === will return true or false, can just return instead of if else statement 
  const reversedWord = reverse(word)
  return reversedWord === word
  }

/* 
  Add your pseudocode here

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
