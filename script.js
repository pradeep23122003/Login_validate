document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous errors
    clearErrors();

    // Validate form fields
    let isValid = validateForm();

    if (isValid) {
      alert("Signup successful!");
      // Perform the signup logic here
    }
  });

function clearErrors() {
  document.querySelectorAll(".error-message").forEach(function (error) {
    error.style.display = "none";
  });
}

function validateForm() {
  let isValid = true;

  // Validate username
  let username = document.getElementById("username").value;
  if (username.length < 3) {
    displayError(
      "usernameError",
      "Username must be at least 3 characters long"
    );
    isValid = false;
  }

  // Validate email
  let email = document.getElementById("email").value;
  if (!validateEmail(email)) {
    displayError("emailError", "Invalid email address");
    isValid = false;
  }

  // Validate password
  let password = document.getElementById("password").value;
  if (password.length < 6) {
    displayError(
      "passwordError",
      "Password must be at least 6 characters long"
    );
    isValid = false;
  }

  // Validate confirm password
  let confirmPassword = document.getElementById("confirmPassword").value;
  if (confirmPassword !== password) {
    displayError("confirmPasswordError", "Passwords do not match");
    isValid = false;
  }

  return isValid;
}

function displayError(elementId, message) {
  let errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function validateEmail(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.[^<>()[\]\.,;:\s@"]{2,}))$/i;
  return re.test(String(email).toLowerCase());
}
