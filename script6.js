
var generateBtn = document.querySelector("#generate");

function randomize(charactersArray) {
    var randomIndex = Math.floor(Math.random() * charactersArray.length);
    var randomCharacter = charactersArray[randomIndex];
    return randomCharacter;
}

function generatePassword() {
    var myPasswordLength = 0;

    while (myPasswordLength < 8 || myPasswordLength > 128 || isNaN(myPasswordLength)) {
        myPasswordLength = parseInt(
            prompt("How many characters would you like (please pick a number between 8 and 128)?")
        );
    }
    var lowerCase = confirm(
        "Would you like lowercase letters?"
    );
    var upperCase = confirm(
        "Would you like uppercase letters?"
    );
    var numbers = confirm(
        "Would you like numbers?"
    );
    var specialCharacters = confirm(
        "Would you like special characters?"
    );
    var lowerLetters = ["a", "b", "c", "d", "e"];
    var upperLetters = ["A", "B", "C", "D", "E"];
    var numbersCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var characters = ["!", "@", "#", "$", "%", "&", "*"];

    var optionsArray = [];
    var passwordArray = [];

    if (lowerCase === true) {
        optionsArray = optionsArray.concat(lowerLetters);
        passwordArray.push(randomize(lowerLetters));
    }
    if (upperCase === true) {
        optionsArray = optionsArray.concat(upperLetters);
        passwordArray.push(randomize(upperLetters));
    }
    if (numbers === true) {
        optionsArray = optionsArray.concat(numbersCharacters);
        passwordArray.push(randomize(numbersCharacters));
    }
    if (specialCharacters === true) {
        optionsArray = optionsArray.concat(characters);
        passwordArray.push(randomize(characters));
    }

    if (!lowerCase && !upperCase && !numbers && !specialCharacters) {
        alert("Error: You must pick an option for a password!");
    }

    for (var i = passwordArray.length + 1; i <= myPasswordLength; i++) {
        passwordArray.push(randomize(optionsArray));

    }

    return passwordArray.join("")

}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    return (password);
}

generateBtn.addEventListener("click", writePassword);
