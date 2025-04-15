let Name = document.querySelector("#name");
let Email = document.querySelector("#email");
let Password = document.querySelector("#password");
let ConfirmPassword = document.querySelector("#confirmPassword");
let PhoneNumber = document.querySelector("#phoneNumber");
let showPasswordButton = document.querySelector("#showPassword");
let showConfirmPasswordButton = document.querySelector("#showConfirmPassword");
let submit = document.querySelector("#btn");

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
    event.preventDefault();

    if (Name.value === ""){
        alert("Please Enter Your Name ")
        return
    }
    if(Email.value === ""){
        alert("Please Enter Your Email")
        return
    }
    if (!Email.value.includes("@")) {
        alert("Email must contain '@'.");
        return;
    }
    let parts = Email.value.split(".");
    let extension = parts[parts.length - 1];

    if (extension.length > 3) {
        alert("Email extension must be 3 characters or less.");
        return;
    }
    if(Password.value.length < 8){
        alert("password should be 8 character or more");
        return
    }
    // let password = Password.value;

    if (!/(?=.*[a-z])/.test(Password.value)) {
        alert("Password must contain at least one lowercase letter.");
        return;  
    }
      
      
    if (!/(?=.*[A-Z])/.test(Password.value)) {
        alert("Password must contain at least one uppercase letter.");
        return;
    }
      
      
    if (!/(?=.*\d)/.test(Password.value)) {
        alert("Password must contain at least one number.");
        return;
    }
      
      
    if (!/(?=.*[\W_])/.test(Password.value)) {
        alert("Password must contain at least one special character (e.g., !@#$%^&*).");
        return;
    }
    
    
    
    if(Password.value !== ConfirmPassword.value){
        alert("Password does not matches")
        return
    }
    if(PhoneNumber.value.length > 11 || PhoneNumber.value.length < 11){
        alert("Phone Number should be 11 digits")
        return
    }
    if (/(\d).*\1/.test(PhoneNumber)) {
        alert("Phone number must contain different digits (no repeating digits).");
        return;
    };
})