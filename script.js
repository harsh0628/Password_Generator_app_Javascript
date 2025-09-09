let slider = document.getElementById("slider");
let lengthValue = document.getElementById("lengthValue");
let passBox = document.getElementById("passBox");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let generate = document.getElementById("generate");
let copy = document.getElementById("copy");

// Update the displayed length value on slider input
lengthValue.textContent = slider.value;
slider.addEventListener('input', () => {
  lengthValue.textContent = slider.value;
});

generate.addEventListener('click', () => {
    passBox.value = generatePassword();
})

let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
let numberChars = "0123456789";
let symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
// Function to generate password
function generatePassword(){        
    let generatedPassword = "";
let allChars = "";
allChars += uppercase.checked ? uppercaseChars : "";
allChars += lowercase.checked ? lowercaseChars : "";
allChars += numbers.checked ? numberChars : "";
allChars += symbols.checked ? symbolChars : "";

if(allChars === ""){
    return "Select at least one option";
}
let i =1;
while(i < slider.value){
    generatedPassword += allChars[Math.floor(Math.random() * allChars.length)];
    i++;
}
    return generatedPassword;   


}
copy.addEventListener('click', () => {
    if(passBox.value === ""){
        alert("No Password to Copy");
        return;
    }
    navigator.clipboard.writeText(passBox.value);
    alert("Password Copied to Clipboard");
});