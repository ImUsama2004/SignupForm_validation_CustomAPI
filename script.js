let Name = document.querySelector("#name");
let Email = document.querySelector("#email");
let Password = document.querySelector("#password");
let ConfirmPassword = document.querySelector("#confirmPassword");
let PhoneNumber = document.querySelector("#phoneNumber");
let showPasswordButton = document.querySelector("#showPassword");
let showConfirmPasswordButton = document.querySelector("#showConfirmPassword");
let submit = document.querySelector("#btn");
let paraName = document.getElementById("paraname");
let paraEmail = document.getElementById("paraemail");
let paraPassword = document.getElementById("parapassword");
let paraConfirmPassword = document.getElementById("paraconfirmPassword");
let Address = document.getElementById("address");
let paraAddress = document.getElementById("paraaddress");
let postalAddress = document.getElementById("postaladdress");
let paraPostalAddress = document.getElementById("postaddress");
let paraPhone = document.getElementById("number");
let parts = Email.value.split(".");
    let extension = parts[parts.length - 1];

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
        
    }
    if(Email.value === ""){
        paraEmail.innerText = "Please Enter Your Email"
        
    }
    if (!Email.value.includes("@")) {
        paraEmail.innerText = "Email must contain '@'."
        
    }
    

    if (extension.length > 3) {
        paraEmail.innerText = "Email extension must be 3 characters or less."
        
    }
     if(Password.value.length < 8){
        paraPassword.innerText = "password should be 8 character or more"
        
    }
    // let password = Password.value;

    if (!/(?=.*[a-z])/.test(Password.value)) {
        paraPassword.innerText = "Password must contain at least one lowercase letter."
          
    }
      
      
    if (!/(?=.*[A-Z])/.test(Password.value)) {
        paraPassword.innerText = "Password must contain at least one uppercase letter."
        
    }
      
      
    if (!/(?=.*\d)/.test(Password.value)) {
        paraPassword.innerText = "Password must contain at least one number."
        
    }
      
      
    if (!/(?=.*[\W_])/.test(Password.value)) {
        paraPassword.innerText = "Password must contain at least one special character (e.g., !@#$%^&*)."
        
    }
    
    
    
    if(Password.value !== ConfirmPassword.value){
        paraConfirmPassword.innerText = "Password does not matches"
        
    }
    if(Address.value === ""){
        paraAddress.innerText = "Please enter Address";
        
    }
    if(postalAddress.value === ""){
        paraPostalAddress.innerText = "Enter Your Postal Address";
    }
    if(PhoneNumber.value === ""){
        paraPhone.innerText = "Must provide Your Number"
    }
    if(PhoneNumber.value.length > 11 || PhoneNumber.value.length < 11){
        paraPhone.innerText = "Phone Number should be 11 digits"
        
    }
    // if (/(\d).*\1/.test(PhoneNumber.value)) {
    //     paraPhone.innerText = "Phone number must contain different digits (no repeating digits)."
    
    // };
    
 console.log(Name.value)

let userdata = {
    user_name : Name.value,
    user_email : Email.value,
    user_password : Password.value,
    user_confirmpassword : ConfirmPassword.value,
    user_phonenumber : PhoneNumber.value,
    user_address : Address.value,
    user_postaladdress : postalAddress.value
}

let exist_data = localStorage.getItem("users");
let userarray = exist_data ? JSON.parse(exist_data) : [];
userarray.push(userdata);
localStorage.setItem("users",JSON.stringify(userarray));
console.log("user data saved",userarray);
// let convert = JSON.stringify(userdata);
// JSON.stringify(user_array.push(localStorage.setItem("user",convert)));
// console.log(user_array)

    // console.log(Name.value);
    // console.log(Email.value);
    // console.log(Password.value);
    // console.log(ConfirmPassword.value);
    // console.log(PhoneNumber.value);
    // console.log(Address.value);
    // console.log(postalAddress.value);
});