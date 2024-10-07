

var inpslider = document.querySelector(".inputslider");
var lengthInput = document.querySelector("#length");
var lowercase = document.querySelector(".low");
var uppercase = document.querySelector(".upp");
var numbers = document.querySelector(".nums");
var symbols = document.querySelector(".sym");
var pasbox = document.querySelector(".passbox");
var genbtn = document.querySelector(".genbtn");
var copyicon = document.querySelector("#copyIcon");

// Character sets for password generation
let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allsymbols = "~!@#$%^&*";

// Function to generate a random password based on user input
function generatepass() {
    let genpass = "";
    let allchar = "";

    // Build the character set based on selected options
    allchar += lowercase.checked ? lowerchars : "";
    allchar += uppercase.checked ? upperchars : "";
    allchar += numbers.checked ? allnumbers : "";
    allchar += symbols.checked ? allsymbols : "";

    // Check if any character set is selected
    if (allchar === "" || allchar.length === 0) {
        return genpass;
    }

    // Get the password length from slider and input box
    // const length = Math.min(parseInt(inpslider.value), parseInt(lengthInput.value));
    // var length = Math.min(inpslider.value, lengthInput.value);
    var length = inpslider.value;

    // Generate the password
    for (let i = 0; i < length; i++) {
        genpass += allchar.charAt(Math.floor(Math.random() * allchar.length));
    }

    return genpass;
}

// Event listener for the generate button
genbtn.addEventListener("click", function() {
    pasbox.value = generatepass();
});

// Sync slider and number input values
inpslider.addEventListener("input", function() {
    lengthInput.value = inpslider.value;
});

lengthInput.addEventListener("input", function() {
    inpslider.value = lengthInput.value;
});

// Copy password to clipboard
copyicon.addEventListener("click", function() {
    pasbox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
});