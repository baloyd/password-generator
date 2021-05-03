// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Variables of all characters involved in the password
var numbers=["0","1","2","3","4","5","6","7","8","9"]
var special=["!","@","$","%","&","?","+","*","=","~","-","_","/","|","^"]
var upper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var allChar=[];
var finalPass = "";

//When button is pressed, these messages will be displayed in order
function writePassword() {
  finalPass = '';
  var pwLength=prompt("How many characters would you like your password to contain?");
  if(pwLength <8 || pwLength > 128){
    alert("It is recommended to have a password between 8 and 128 characters long!\nPlease start over.");
}
 // user can now choose which characters to use and the respective characters will be pushed.
 
 else{ if(confirm("Would you like numbers to be used in your password?"));{
    for (var i = 0; i < numbers.length; i++){
      allChar.push(numbers[i])}
  }
  
 if(confirm("Would you like to include special characters in your password?"));{
  for (var i = 0; i < special.length; i++){
    allChar.push(special[i])}
 }
 
  if(confirm("Would you like to include uppercase letters in your password?"));{
    for (var i = 0; i < upper.length; i++){
      allChar.push(upper[i])}
  }
  

 if(confirm("Would you like to include lowercase letters in your password?"));{
  for (var i = 0; i < lower.length; i++){
    allChar.push(lower[i])}
 }
 
 //define pwLength variable to be used in the later for loop
 var password = generatePassword(pwLength);
  
 }
}
 //Run for loop to create password using the characters pushed into the allChar variable until the length given by the user is achieved and placed into the finalPass variable
 function generatePassword(pwLength){
  for(var i=0;i<pwLength;i++){
    
    var random=Math.floor(Math.random() * allChar.length);

    finalPass += allChar[random];
  }
//Write password to #password input
  var passwordText = document.querySelector("#password");
 
  passwordText.value = finalPass;
}


  

