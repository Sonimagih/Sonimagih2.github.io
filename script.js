


var errorpass=document.getElementById("errorpass");
var erroremail=document.getElementById("erroremail");
var errorphone=document.getElementById("errorphone");
function validatepass(){
    var pass = document.getElementById('password');
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$");
      var mediumRegex = new RegExp("^((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])).{8,}$");

      if (strongRegex.test(password.value)) {
       
        password.innerText = "Strong";
       
        password.className = "strong";
      } else if (mediumRegex.test(password.value)) {
        password.innerText = "Medium";
        password.className = "medium";
      } else {
        password.innerText = "Poor";
        password.className = "poor";
      }
    }



function validateemail(){
    var mail = document.getElementById('email');
    regex=/^[A-Z0-9.-]+@([A-Z0-9.-]+\.)+[A-Z]{2,4}$/i;
    if(regex.test(mail.value)){
        erroremail.innerText="valid email";
        return true;
    }
    else{
        erroremail.innerText="enter valid email";
        return false;
    }
    
}



function validatephone(){
 var phone = document.getElementById('phone');
 phoneregex=/^(\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;
    if(phoneregex.test(phone.value)){
        errorphone.innerText="phone number is valid";
        return true;
    }
    else{
        errorphone.innerText="phone numberis invalid";
        return false;
    }
}