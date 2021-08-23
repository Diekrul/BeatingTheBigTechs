/*Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.*/

var isPalindrome = function (s) {
  const alphanumericString = s.replace(/[^A-Za-z0-9]/g, "");
  const reverseString = alphanumericString.split("").reverse().join("");
  return reverseString.toLowerCase() === alphanumericString.toLowerCase();
};

isPalindrome("A man, a plan, a canal: Panama");
