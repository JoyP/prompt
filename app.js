var prompt = require('sync-prompt').prompt;
var first = prompt('What is your first name? ');
var last = prompt('What is your last name? ');
var full = first + ' ' + last;
console.log('Your name is ' + full + '.');

var color = prompt('What is your favorite color? ');
console.log('Your favorite color is ' +  color + '.');

var age = prompt("What is your dog's age? ");
console.log(typeof age);

// user's input is a string, parseInt converts variable to an integer
// Int will truncate numbers if a decimal is entered, use float for decimals

age = parseInt(age);
console.log(typeof age);

var humanAge = age*7
console.log("Your dog's age is " + age + ".");
console.log("Your dog's age in human years is " + humanAge + '.');

// Ask your age and say whether or not you can drink

var userAge = prompt("What is your age? ");

if (userAge >= 21){
  console.log("You are legal to drink alcohol.");
}else{
  console.log("You are not legal to drink alcohol.");
}

// javascript will implicitly change the data type, if needed
// However, do not rely on this because it can cause some bugs
// . will repeat your last command
// 9 < will move the indent for the next 9 lines
//

// Ask user "Do you want to convert Farenheit or Celsius?"
// Prompt for temperature, convert 
// Ex. "100 C in F is 212"
//

var tempType = prompt("Do you want to convert to Farenheit or Celsius? Enter F or C: ");
var temp = prompt("Enter the temperature you would like to convert: ");

temp = parseFloat(temp);

switch(tempType){
  case 'F':
    temp = ((temp*9)/5 + 32);
    console.log("That temperature equals " + temp + " degrees Farenheit.");
    break;
  case 'C':
    temp = ((temp-32)*5/9);
    console.log("That temperature equals " + temp + " degrees Celsuis.");
    break;
  default:
    console.log("You did not enter a valid temperature type.");
}

// Same as above, but using an if statement. An if statement
//   is more efficient if there are only two possibilities.

var scale = prompt('What scale are you using (f/c)? ');
var temp = prompt('What is the temperature? ');

temp = parseInt(temp);
var converted;
var alt;

if(scale === 'f'){
  converted = (temp - 32) * 5/9;
  alt = 'c';
}else{
  converted = (temp * 9/5) + 32;
  alt = 'f';
}

console.log(temp + scale + ' -> ' + converted + alt);


var weight = prompt("What is your weight in pounds? ");
var height = prompt("What is your height in inches? ");

weight = parseFloat(weight);
height = parseFloat(height);

var bmi = ((weight / (height * height)) * 703);

console.log("Your BMI is " + bmi.toFixed(1)+ ".");

if (bmi < 18.5){
  console.log("You are underweight.");
}else if (bmi < 24.9){
  console.log("Your weight is normal.");
}else if (bmi < 29.9){
  console.log("You are overweight.");
}else if (bmi >= 30.3){
  console.log("You are obese.");
}else{
  console.log("You did not enter a valid number.");
}



