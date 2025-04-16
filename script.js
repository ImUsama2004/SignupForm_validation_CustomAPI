let Name = document.querySelector("#name");
let Email = document.querySelector("#email");
let Password = document.querySelector("#password");
let ConfirmPassword = document.querySelector("#confirmPassword");
let PhoneNumber = document.querySelector("#phoneNumber");
let showPasswordButton = document.querySelector("#showPassword");
let showConfirmPasswordButton = document.querySelector("#showConfirmPassword");
let submit = document.querySelector("#btn");
let paraName = document.getElementById("paraname");
let paraEmail = document.getElementById("email");
let paraPassword = document.getElementById("password");
let paraConfirmPassword = document.getElementById("confirmPassword");
let Address = document.getElementById("address");
let paraAddress = document.getElementById("paraaddress");
let postalAddress = document.getElementById("postaladdres");
let paraPostalAddress = document.getElementById("postaddress");
let paraPhone = document.getElementById("number");

showPasswordButton.addEventListener("click", function () {
    if (Password.type === "password") {
        Password.type = "text"; 
    } else {
        Password.type = "password"; 
    }
});

showConfirmPasswordButton.addEventListener("click", function () {
    if (ConfirmPassword.type === "password") {
        ConfirmPassword.type = "text"; 
    } else {
        ConfirmPassword.type = "password";
    }
});


submit.addEventListener("click",function(event){
    event.preventDefault(event);

    if (Name.value === ""){
        paraName.innerText = "Please enter your Name"
        return
    }
    if(Email.value === ""){
        paraEmail.innerText = "Please Enter Your Email"
        return
    }
    if (!Email.value.includes("@")) {
        paraEmail.innerText = "Email must contain '@'."
        return;
    }
    let parts = Email.value.split(".");
    let extension = parts[parts.length - 1];

    if (extension.length > 3) {
        paraEmail.innerText = "Email extension must be 3 characters or less."
        return;
    }
    if(Password.value.length < 8){
        paraPassword.innerText = "password should be 8 character or more"
        return
    }
    // let password = Password.value;

    if (!/(?=.*[a-z])/.test(Password.value)) {
        paraPassword.innerText = "Password must contain at least one lowercase letter."
        return;  
    }
      
      
    if (!/(?=.*[A-Z])/.test(Password.value)) {
        paraPassword.innerText = "Password must contain at least one uppercase letter."
        return;
    }
      
      
    if (!/(?=.*\d)/.test(Password.value)) {
        paraPassword.innerText = "Password must contain at least one number."
        return;
    }
      
      
    if (!/(?=.*[\W_])/.test(Password.value)) {
        paraPassword.innerText = "Password must contain at least one special character (e.g., !@#$%^&*)."
        return;
    }
    
    
    
    if(Password.value !== ConfirmPassword.value){
        paraConfirmPassword.innerText = "Password does not matches"
        return
    }
    if(Address.value === ""){
        paraAddress.innerText = "Please enter Address";
        return
    }
    if(postalAddress.value === ""){
        paraPostalAddress.innerText = "Enter Your Postal Address";
    }
    if(PhoneNumber.value.length > 11 || PhoneNumber.value.length < 11){
        paraPhone.innerText = "Phone Number should be 11 digits"
        return
    }
    if (/(\d).*\1/.test(PhoneNumber.value)) {
        paraPhone.innerText = "Phone number must contain different digits (no repeating digits)."
        return;
    };
})