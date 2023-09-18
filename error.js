function validateForm() {
    validateInput("first-name", "first-name-error");
    validateInput("last-name", "last-name-error");
    validateInput("email","mail-error");
    
   
    validateInput("password","pass-error");
    validateInput("confirm-password","con-error");

    var isPhoneValid = validateInput("phone","phone-error");
    if(isPhoneValid === true){
        checkPhone("phone","phone-contant-error");
    }
    var isMailValid = validateInput("email","mail-error");
    if(isMailValid === true){
        checkMail("email","contant-mail-error");
    }
  

}

function validateInput(inputId, errorId) {
   
    var inputValue = document.getElementById(inputId).value;
    var errorMessage = document.getElementById(errorId);

    if (inputValue.trim() === "") {
        errorMessage.style.display = "block";
        return false;
    
    } else {
        errorMessage.style.display = "none";
        return true;
    }
    
}
function checkMail(inputId, errorId){
    var inputValue = document.getElementById(inputId).value;
    var errorMessage = document.getElementById(errorId);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailRegex.test(inputValue) ){
        errorMessage.style.display = "none";
    }
    else{
       errorMessage.style.display = "block";
    }
}

function checkPhone(inputId,errorId){
    var inputValue = document.getElementById(inputId).value;
    var errorMessage = document.getElementById(errorId);
    const numericRegex = /^\d+$/;
 

    if(numericRegex.test(inputValue)){
        errorMessage.style.display = "none";
    }
    else{
        errorMessage.style.display = "block";
     }
}