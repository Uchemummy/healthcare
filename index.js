document.getElementById("loginForm").addEventListener("submit", function fillLoginDetails(event){
  event.preventDefault(); // Prevent form submission
  // Get values from input fields
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  // Your login logic here, for demonstration purposes, let's just display the email and password in console

  console.log("Email: " + email);
  console.log("Password: " + password);
});
