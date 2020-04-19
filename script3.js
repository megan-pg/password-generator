//My array
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var characters = ["!", "@", "#", "$", "%", "&", "*"];

//Prompts and confirmations
var myPasswordLength = prompt("How many characters do you want in your password? (Please enter a number no larger than 20)");
var lowercaseAlert = alert("You must have lowercase letters.");
var uppercaseConfirm = confirm("Do you want uppercase letters?");
var numbersConfirm = confirm("Do you want numbers?");
var symbolConfirm = confirm("Do you want symbols?");

var passwordArray = [];

var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

var passLength = parseInt(myPasswordLength);
console.log("passLength", passLength)

generateBtn.addEventListener("click", writePassword); {
    function generatePassword() {
        passwordArray.textContent = password;
        myPasswordLength = [];
        if (lowercassAlert) {
            passwordArray = passwordArray.concat(lowerLetters);
        }
        if (uppercaseConfirm) {
            passwordArray = passwordArray.concat(upperLetters);
        }
        if (numbersConfirm) {
            passwordArray = passwordArray.concat(numbers);
        }
        if (symbolConfirm) {
            passwordArray = passwordArray.concat(characters);
        }
        return passwordArray[randomize(passwordArray.passLength, 0)];
    }
    for (var i = 0; i < passLength; i++) {
        passwordText.push(passwordArray[randomize])
    }
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
        var randomize = Math.floor(Math.random() * passwordArray.length);

        passwordText.value = password;
        return (password);

    };


}
