
let generatedOtp = ""

function otp() {
    
let num1 = 1000 + Math.random() * 1000 
generatedOtp = Math.floor(num1)
document.getElementById('result').innerText = "Generated OTP: " + generatedOtp;

};

// function submit(){
//     let testt = document.getElementById("text").value;
//     let email =document.getElementById("email").value;
//     let pass = document.getElementById("password").value;
//     let otp = document.getElementById("otp").value;

//     let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//     if (generatedOtp == otp &&  pass.length >6 && email.match(emailPattern) ) {
//         console.log("ok");
        
//       document.getElementById("formsubmit").innerText = "form submission successful"
//     }else{
        
//         document.getElementById("formsubmit").innerText = "please enter correct detail";
//     }
// }



function submit() {
    let testt = document.getElementById("text").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let otp = +document.getElementById("otp").value;

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

   

    if (generatedOtp == otp && pass.length <= 7 && email.match(emailPattern) && testt.length <= 10) {
        console.log("ok");
        document.getElementById("formsubmit").innerText = "form submission successful";
    } else {
        document.getElementById("formsubmit").innerText = "please enter correct detail";
    }
}