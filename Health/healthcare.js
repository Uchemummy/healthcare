//SECTION FOR SIGN-IN
 // let myButton = "buttonClicked";
 let generalDiv = document.getElementById("masterContainer");

 function buttonClick(e){
  // e.preventDefault();
  window.location.href = './Health/healthcare.html'; 
  console.log("Button Clicked")
}

const signInButton = document.getElementById("buttonClicked");

// signInButton.addEventListener("click", (e) =>{
//   e.preventDefault();
//   signInButton =
//   console.log("Button Clicked")
// })


function masterContainer(){
console.log(generalDiv)

 function myDoctor(event){
  event.preventDefault()
  window.location.href = '/page/doctrscontact.html'; 
  console.log("Button Clicked")
}

function healthClick(e){
  e.preventDefault()
  window.location.href = '/page/doctrscontact.html'; 
  console.log("Button Clicked")
}


let buttonClicked = document.getElementById("clearFix");
function submitBtn(){
  // e.preventDefault();
  buttonClick.textContent = "Form Submitted";
  alert("Message sent")
 
}

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function myFunction() {
  var element = document.getElementById("toggleClassElement");
  element.classList.toggle("active");
  alert("Button Clicked")
  window.location.href = '/page/terms.html'; 
}
function clickCode() {
  var element = document.getElementById("toggleClassElement");
  element.classList.toggle("active");
  alert("Button Clicked")
  window.location.href = '/page/privcy.html'; 
}

}




// const signInBtn = document.getElementById("signIn");
// const signUpBtn = document.getElementById("signUp");
// const firstForm = document.getElementById("form1");
// const secondForm = document.getElementById("form2");
// const container = document.querySelector(".container");


// document.addEventListener('DOMContentLoaded', function() {
//   var loginForm = document.getElementById('loginForm');
//   loginForm.addEventListener('submit', function(event) {
//       // Prevent the default form submission behavior
//       event.preventDefault();
      
//       // Redirect the user to a new page
//       window.location.href = '/loginform.html'; // Change 'welcome.html' to the desired URL
//   });
// });



// // Function to store authentication status in local storage
// function setAuthStatus(status) {
//   localStorage.setItem("authStatus", status);
// }

// // Function to get authentication status from local storage
// function getAuthStatus() {
//   return localStorage.getItem("authStatus");
// }

// // Check authentication status when page loads
// window.addEventListener("load", () => {
//   const authStatus = getAuthStatus();
//   if (authStatus === "signedIn") {
//     // Redirect to another page if user is signed in
//     window.location.href = "/signup.html"; // Replace with your page URL
//   }
// });

// // Event listeners for sign-in and sign-up buttons
// signInBtn.addEventListener("click", () => {
//   container.classList.remove("right-panel-active");
// });

// signUpBtn.addEventListener("click", () => {
//   container.classList.add("right-panel-active");
// });

// // Event listeners for form submissions
// firstForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // Assuming successful sign up, set authentication status and redirect
//   setAuthStatus("signedIn");
//   window.location.href = "/healthcare.html"; // Replace with your page URL
// });

// secondForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // Assuming successful sign in, set authentication status and redirect
//   setAuthStatus("signedIn");
//   window.location.href = "/healthcare.html"; // Replace with your page URL
// });


document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const emailInput = form.querySelector('input[type="text"]');
  const passwordInput = form.querySelector('input[type="password"]');
  const rememberMeCheckbox = form.querySelector('#remember-me');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Retrieve values from form inputs
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const rememberMe = rememberMeCheckbox.checked;
    
    // Here you can perform validation and further processing, like sending data to server
    
    // For demonstration purpose, let's just log the values
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    
    // Redirect to healthcare.html
    // window.location.href = "/doctrscontact.html";
  });
});
