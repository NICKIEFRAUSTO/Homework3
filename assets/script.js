const upperLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowerLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const spchar = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  ",",
  "', ",
  ", ",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var hasSpChars=spchar
var hasNumbers=numbers
var hasLowerLetters=lowerLetters
var hasUpperLetters=upperLetters
var charcount= {from: 8,to: 128};

var generateBtn = document.querySelector("#generate");

function start() {
  upon click "btn"  prompt()
}

function prompt() {
  charcount=window.prompt("How many characters would you like in your password?");
  hasSpChars = confirm("Confirm your password has special characters");
  hasNumbers = confirm("Confirm your password has numbers");
  hasLowerLetters = confirm("Confirm your password has lower case letters");
  hasUpperLetters = confirm("Confirm your password has upper case letters");
  generatepassword();
}

function start() {
    prompt();
}

function generatepassword(){
  charcount < 8 && charcount > 128;
  if (charcount < 8) {
    alert("Password must contain at least 8 characters");
  } else if (charcount > 128) {
    alert("Password is too long");
  } else if (charcount === NaN) {
    alert("Value is not a Number");
  } else if (charcount > 7 || charcount < 129_) {
    generaterandom()
  } }   
  
  function generaterandom() {
    Math.floor.random(*) charcount
  }

  /make sure length is in range
  // for (let index = 0; index < possibilities.pwlength; index++)
  // password +- possibilities[randomIndex];
  
  // Math.floor.random()*length
  

// function writePassword() {
//   let password = generatepassword();
//   {
//     let passwordText = document.querySelector("#password");
//     let length = parseInt(
//       prompt("How many characters do you want your password to be?")
//     );
//     return length;
//   }
// }
// function generatepassword() {
//   let generateBtn = document.querySelector("#generate");
//   generateBtn.addEventListener("click", writePassword);
//   window.prompt("How many characters do you want your password to be?");
// }

//   const hasSpecialChars = confirm("Do you want to include Sp characters");
//   const hasNumbers = confirm("Do you want to includenumbers");
//   const hasLowerLetters = confirm("Do you want to include lower letters");
//   const hasUpperLetters = confirm("Do you want to include upper letters");
// }

// if (hasSpecialChars) {
//   possibilities = possibilities.concat(spchar);
// }
// if (hasNumbers) {
//   possibilities = possibilities.concat(numbers);
// }
// if (hasLowerLetters) {
//   possibilities = possibilities.concat(lowerLetters);
// }
// if (hasUpperLetters) {
//   possibilities = possibilities.concat(upperLetters);
// }
