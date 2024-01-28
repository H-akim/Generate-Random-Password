const password_box = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "012345789";
const symbol = "@#$%^&*()_+~|}{[]></-=";
const allchars = upperCase + lowerCase + number + symbol ;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    password_box.value = password;
}

function copyPassword(){
    password_box.select();
    document.execCommand("copy");
}