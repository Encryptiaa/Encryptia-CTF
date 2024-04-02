document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Simulate authentication
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      // Redirect to another page or perform any other action upon successful login
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
});
