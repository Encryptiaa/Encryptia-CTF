document.getElementById("loginButton").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission

  var captchaInput = document.getElementById("captchaInput").value;
  var captchaSpan = document.getElementById("captcha").textContent.trim();

  if (captchaInput !== captchaSpan) {
    alert("CAPTCHA incorrect. Please try again.");
    return false;
  }

  // Client-side validation for username and password
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username !== "demo" || password !== "password") {
    alert("Invalid username or password. Please try again.");
    return false;
  }

  // Redirect to test.html page if credentials are correct
  window.location.href = "test.html"; // Replace "test.html" with your desired page URL
});

// Generate and display a random alphanumeric CAPTCHA
function generateCaptcha() {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var captcha = '';
  for (var i = 0; i < 6; i++) { // Change 6 to the desired length of the CAPTCHA
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  document.getElementById("captcha").textContent = captcha;
}

// Initial CAPTCHA generation
generateCaptcha();

// Regenerate CAPTCHA when CAPTCHA input is focused
document.getElementById("captchaInput").addEventListener("focus", generateCaptcha);

// Validate CAPTCHA input on keyup event
document.getElementById("captchaInput").addEventListener("keyup", function() {
  var captchaInput = this.value;
  var captchaSpan = document.getElementById("captcha").textContent.trim();
  
  if (captchaInput === captchaSpan) {
    // Enable login button if CAPTCHA is correct
    document.getElementById("loginButton").removeAttribute("disabled");
  } else {
    // Disable login button if CAPTCHA is incorrect
    document.getElementById("loginButton").setAttribute("disabled", "disabled");
  }
});
