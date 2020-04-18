//My array
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var characters = ["!", "@", "#", "$", "%", "&", "*"];

//Prompts and confirmations
var myPasswordLength = prompt("How many characters do you want in your password? (Please enter a number no larger than 20)");
var uppercaseConfirm = confirm("Do you want uppercase letters?");
var numbersConfirm = confirm("Do you want numbers?");
var symbolConfirm = confirm("Do you want symbols?");



var passwordBuildArray = [];
var passwordArray = [];

var passLength = parseInt(myPasswordLength);
console.log("passLength", passLength)

var randomize = Math.floor(Math.random() * Math.floor);


if (uppercaseConfirm) {
  passwordArray = upperLetters;
}
if (numbersConfirm) {
  passwordArray = numbers;
}
if (symbolConfirm) {
  passwordArray = upperLetters;
}
if (uppercaseConfirm && numbersConfirm) {
  passwordArray = upperLetters.concat(numbers);
}
if (uppercaseConfirm && symbolConfirm) {
  passwordArray = upperLetters.concat(characters);
}
if (numbersConfirm && symbolConfirm) {
  passwordArray = numbers.concat(characters);
}
if (uppercaseConfirm && numbersConfirm && symbolConfirm) {
  passwordArray = upperLetters.concat(numbers)(characters);
}
console.log("")

// Assignment Code
var generateBtn = document.querySelector("#generate");

for (var i = 0; i < passLength; i++) {
  passwordBuildArray.push(passwordArray[randomize])
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//buildString()

//function generatePassword() {
//  var length = 8,
//      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//      retVal = "";
//  for (var i = 0, n = charset.length; i < length; ++i) {
//      retVal += charset.charAt(Math.floor(Math.random() * n));
//  }
//  return retVal;
//}