//My array
var lowerLetters = ["a", "b", "c", "d", "e"];
var upperLetters = ["A", "B", "C", "D", "E"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var characters = ["!", "@", "#", "$", "%", "&", "*"];

//Prompts, alerts, and confirmations
var myPasswordLength = prompt("How many characters do you want in your password? (Please enter a number no larger than 20)");
var lowercaseAlert = alert("You must have lowercase letters.");
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

function generatePassword() {
    myPasswordLength = [""];

    if (lowercaseAlert) {
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
    var generatePassword = "";
    for (var i = 0; i < passLength; i++) {
        var selection = passwordArray[randomize(passwordArray.length, 0)];
        generatePassword = generatePassword + selection;
    }
    console.log(generatePassword);
    return generatePassword;
}

//Assignment provided code
var generateBtn = document.querySelector("#generate");

for (var i = 0; i < passLength; i++) {
    passwordText.push(passwordArray[randomize])
}

function writePassowrd() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    console.log(password);
    return (password);
}

generateBtn.addEventListener("click", generatePassword);
