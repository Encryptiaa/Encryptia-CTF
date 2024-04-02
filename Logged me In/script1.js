document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");
  const maxAttempts = 3; // Maximum number of login attempts allowed
  let attemptCount = 0; // Initialize attempt count

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Check if maximum attempts exceeded
    if (attemptCount >= maxAttempts) {
      alert("Maximum login attempts exceeded. Please try again later.");
      return;
    }
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulate authentication
    if (username === "Noman" && password === "Heman") {
      alert("Login successful!");
      // Redirect to index.html upon successful login
      window.location.href = "noob.html";
    } else {
      attemptCount++; // Increment attempt count
      alert("Invalid username or password. Please try again. Attempt " + attemptCount + "/" + maxAttempts);
    }
  });
});

