//My array
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var characters = ["!", "@", "#", "$", "%", "&", "*"];

var generateBtn = document.querySelector("#generate");
console.log(passwordArray)

//Prompts and confirmations
var myPasswordLength = prompt("How many characters do you want in your password? (Please enter a number no larger than 20)");
var uppercaseConfirm = confirm("Do you want uppercase letters?");
var numbersConfirm = confirm("Do you want numbers?");
var symbolConfirm = confirm("Do you want symbols?");



var passwordText = [];
var passwordArray = [];

var passLength = parseInt(myPasswordLength);
console.log("passLength", passLength);

function randomize(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

generateBtn.addEventListener("click", writePassword) function generatePassword() {
  passwordArray.textContent = password;
  myPasswordLength = [];

  //check bool value of charsets
  //if okay  push into password
  //random select chars from password n times (n=passwordLenght)
  //push into the final password to display 
if (uppercaseConfirm) {
        passwordArray = passwordArray.concat(upperLetters);
    
if (numbersConfirm) {
      passwordArray = passwordArray.concat(numbers);
  }
if (symbolConfirm) {
      passwordArray = passwordArray.concat(characters);
}
  return passwordArray[randomize(passwordArray.length, 0)];
    
}


// Assignment Code

for (var i = 0; i < passLength; i++) {
  passwordText.push(passwordArray[randomize])
    }
  console.log(passwordText)
  

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    //console.log(password);
    return (password);
  }
 
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword); 


//buildString()

//function generatePassword() {
//  var length = 8,
//      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//      retVal = "";
//  for (var i = 0, n = charset.length; i < length; ++i) {
//      retVal += charset.charAt(Matrh.floor(Math.random() * n));
//  }
//  return retVal;
//}