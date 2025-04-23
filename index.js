// Registration form submission
document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Clear previous messages
    document.querySelectorAll(".error-message").forEach(el => el.textContent = "");
    document.getElementById("successMessage").textContent = "";
  
    // Get form values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    let isValid = true;
  
    // Full Name Validation
    if (!fullName) {
      document.getElementById("fullNameError").textContent = "Full Name is required.";
      isValid = false;
    }
  
    // Email Validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      document.getElementById("emailError").textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      isValid = false;
    }
  
    // Phone Number Validation
    const phonePattern = /^\d{10}$/;
    if (!phone) {
      document.getElementById("phoneError").textContent = "Phone number is required.";
      isValid = false;
    } else if (!phonePattern.test(phone)) {
      document.getElementById("phoneError").textContent = "Phone number must be 10 digits.";
      isValid = false;
    }
  
    // Password Validation
    if (!password) {
      document.getElementById("passwordError").textContent = "Password is required.";
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
      isValid = false;
    }
  
    // Confirm Password Validation
    if (!confirmPassword) {
      document.getElementById("confirmPasswordError").textContent = "Confirm Password is required.";
      isValid = false;
    } else if (confirmPassword !== password) {
      document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
      isValid = false;
    }
  
    // Show success message and reset form
    if (isValid) {
      document.getElementById("successMessage").textContent = "Registration Successful!";
      this.reset();
    }
  });
  
  // Toggle password visibility
  function togglePassword(id, icon) {
    const input = document.getElementById(id);
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    icon.textContent = isPassword ? "🙈" : "👁️";
  }
  