// This function toggles the visibility of the password field
function togglePasswordVisibility(fieldId, iconId) {
    // Get the password field and the eye icon using their IDs
    var passwordField = document.getElementById(fieldId);
    var eyeIcon = document.getElementById(iconId);

    // If the password field type is 'password', change it to 'text' to show the password
    if (passwordField.type === "password") {
        passwordField.type = "text"; // Show password
        eyeIcon.classList.remove("fa-eye"); // Remove 'eye' icon
        eyeIcon.classList.add("fa-eye-slash"); // Add 'eye-slash' icon to indicate password is visible
    } else {
        passwordField.type = "password"; // Hide password again
        eyeIcon.classList.remove("fa-eye-slash"); // Remove 'eye-slash' icon
        eyeIcon.classList.add("fa-eye"); // Add 'eye' icon to indicate password is hidden
    }
}

// This function validates the email and password fields before the form is submitted
function validatePasswords(event) {
    // Get the email and password values from the form
    var email = document.getElementById("email").value;
    var password = document.getElementById("passwordField").value;
    var confirmPassword = document.getElementById("confirmPasswordField").value;

    // Check if the email follows the Gmail format
    var emailPattern = /^[^\s@]+@gmail\.com$/; // Regular expression to validate email
    if (!emailPattern.test(email)) {
        alert("Invalid Email Id."); // Show alert if email is invalid
        event.preventDefault(); // Prevent the form from submitting
        return false; // Stop further validation
    }

    // Validate password length (between 8 and 12 characters)
    if (password.length < 8 || password.length > 12) {
        alert("Password must be 8-12 characters long."); // Show alert for invalid length
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // Check if the password contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        alert("Password must contain at least one lowercase letter (a-z).");
        event.preventDefault();
        return false;
    }

    // Check if the password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        alert("Password must contain at least one uppercase letter (A-Z).");
        event.preventDefault();
        return false;
    }

    // Check if the password contains at least one digit
    if (!/[0-9]/.test(password)) {
        alert("Password must contain at least one number (0-9).");
        event.preventDefault();
        return false;
    }

    // Check if the password contains at least one special character
    if (!/[!@#$%^&*()]/.test(password)) {
        alert("Password must contain at least one special character (!@#$%^&*()).");
        event.preventDefault();
        return false;
    }

    // Ensure the password doesn't contain any spaces
    if (/\s/.test(password)) {
        alert("Password must not contain white spaces.");
        event.preventDefault();
        return false;
    }

    // Ensure the password doesn't have consecutive identical characters (e.g., "aa", "11")
    if (/([a-zA-Z0-9!@#$%^&*()])\1/.test(password)) {
        alert("Password must not have consecutive identical characters.");
        event.preventDefault();
        return false;
    }

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
        alert("Passwords do not match."); // Show alert if passwords don't match
        event.preventDefault();
        return false;
    }

    // If all validations pass, show a success message
    alert("Email & Passwords are valid.");
    return true; // Allow form submission
}

// This event listener waits for the page to fully load and then adds the validation to the form
document.addEventListener('DOMContentLoaded', () => {
    // Attach the validatePasswords function to the form submit event
    document.getElementById('myForm').addEventListener('submit', validatePasswords);
});
