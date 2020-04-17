//My array
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var characters = ["!", "@", "#", "$", "%", "&", "*"];

var myPasswordLength = prompt("How many characters do you want in your password? (Please enter a number)");
var myPasswordLength = alert("Do you want uppercase letters?");
var myPasswordLength = alert("Do you want numbers?");
var myPasswordLength = alert("Do you want symbols?");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//var passwordArray = [];
//var passLength = parseInt(newPasswordLength);

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