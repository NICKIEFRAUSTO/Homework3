//create arrays of each parameter
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


function writePassword() {
  let password = "";
  let length =parseInt (prompt 
    ("How many characters do you want your password to be?")
    );
      //make sure length is in range
  for (let index = 0; index < possibilities.pwlength; index++) 
  password +- possibilities[randomIndex];
  
} ( length < 8 && length > 128) 
if (length < 8) {
  alert("Password must contain at least 8 characters");
  
} else if (length > 128) {
  alert("Password is too long");
  
} else if (length === NaN) {
  alert("Value is not a Number");
  
  const hasSpecialChars = confirm("Do you want to include Sp characters");
  const hasNumbers = confirm("Do you want to includenumbers");
  const hasLowerLetters = confirm("Do you want to include lower letters");
  const hasUpperLetters = confirm("Do you want to include upper letters");
}

if (hasSpecialChars) {
possibilities = possibilities.concat(spchar);
}
if (hasNumbers) {
possibilities = possibilities.concat(numbers);
}
if (hasLowerLetters) {
possibilities = possibilities.concat(lowerLetters);
}
if (hasUpperLetters) {
possibilities = possibilities.concat(upperLetters);
}
  //combine possibilities
  
  // Math.floor.random()*length

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
  // // Add event listener to generate button
  // var generateBtn = document.querySelector("#generate");
  // generateBtn.addEventListener("click", writePassword);

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //concatenate the arrays together
  // parameters = letters.concat(spchar, numbers);
  //console.log(parameters)
  
  //parameters should have a length from 8-128 characters
  //prompt the user for the number
  // let pwlength = window.prompt ('How many characters do you want your password to be?');
  // //if user enters a number less than 8, return message stating "password length must be at
  // //least 8 characters"
  // if (pwlength >8) {
  
  // {then (window.confirm("click ok to confirm special characters"))}
  
  // {then (window.confirm("click ok to confirm number"))}
  
  // {then (window.confirm("click ok to confirm uppercase letters"))}
  
  // {then (window.confirm("click ok to confirm lowercase letters"))}
  
  // else {window.alert("Password length must be at least 8 characters")
  // window.prompt ("How many characters do you want your password to be?")
  // }  }
  
 
  // //select random values from the excepted parameters with the length from the input
  //}
  
  //const


//pseudo :
//parameters to include uppercase, lowercase, numbers, special characters
//use variables to represent the arrays
// write a function to prompt the user for each parameter
// user clicks the button to answer the prompt
//create a function using math.random to generate the password
//password is displayed as an alert in the box
//questions am I supposed to create the prompts?
