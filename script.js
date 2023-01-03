// Assignment code here


// References for user password code selectors

var generateBtn = document.querySelector("#generate");

// Unique character choices for user to choose from
var charLength = 8;
var spec = ["!", "'", "#", "$", "%", "&", "*", "+", "(", ")", "+", "_" ];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ];
var ups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lows = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var userChoice = [];

// Write password to the #password input
function writePassword() {
  requiredPrompts();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  console.log("User clicked generate password button")
}
// function for windows prompt to allow user to select password characteristics and display pop up window after licking button 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = "";
  for(var i = 0; i < charLength; i++) {
    var userCharChoice = Math.floor(Math.random() * userChoice.charLength);
    password = password + userChoice[userCharChoice]
  }
  return password;
}
// If statements for password requirements

function requiredPrompts() {
  userChoice = [];
  charLength = parseInt(prompt("How long will your password be?"));
  
  if (confirm("Would you want to include numbers in your password?")) {
    userChoice = userChoice.concat(numbers);
  }

  if(confirm("Would you want upper case letters in your password?")) {
    userChoice = userChoice.concat(lows);
  }

  if(confirm("would you want uppercase letters in your passwork?")) {
    userChoice = userChoice.concat(ups);
  }

  if(confirm("Would you want special characters in your password?")) {
    userChoice = userChoice.concat(spec);
  }
  return true;
}

