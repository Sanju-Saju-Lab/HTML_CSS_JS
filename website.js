/**
 * Toggles the visibility of the password field and changes the icon accordingly.
 * @param {string} fieldId - The ID of the password input field.
 * @param {string} iconId - The ID of the eye icon.
 */
function togglePasswordVisibility(fieldId, iconId) {
    // Get the password field and eye icon elements using their IDs
    var passwordField = document.getElementById(fieldId);
    var eyeIcon = document.getElementById(iconId);

    // Check if the password is currently hidden and toggle its visibility
    if (passwordField.type === "password") {
        // Change the field type to 'text' so the password is visible
        passwordField.type = "text";
        // Change the eye icon to indicate the password is visible
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        // Change the field type back to 'password' to hide the password
        passwordField.type = "password";
        // Change the eye icon to indicate the password is hidden
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}

/**
 * Validates the email and passwords in the form.
 * @param {Event} event - The form submission event.
 * @returns {boolean} - Returns true if validation passes, otherwise false.
 */
function validatePasswords(event) {
    // Get the email, password, and confirm password values entered by the user
    var email = document.getElementById("email").value;
    var emailPattern = /^[^\s@]+@gmail\.com$/; // Regex to check if email is a Gmail address
    var password = document.getElementById("passwordField").value;
    var confirmPassword = document.getElementById("confirmPasswordField").value;

    // Check if the email is in the correct format (Gmail only)
    if (!emailPattern.test(email)) {
        alert("Invalid Email Id."); // Show an error message if the email is invalid
        event.preventDefault(); // Stop the form from submitting
        return false;
    }  

    // Check if the password has at least 8 characters
    if (password.length < 8) {
        alert("Password must contain at least 8 characters."); // Show an error message if the password is too short
        event.preventDefault(); // Stop the form from submitting
        return false;
    }

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
        alert("Passwords do not match."); // Show an error message if the passwords don't match
        event.preventDefault(); // Stop the form from submitting
        return false;
    }

    // If all validations pass, show a success message
    alert("Email & Passwords are valid.");
    return true; // Allow form submission
}

// Wait until the content is fully loaded before running this script
document.addEventListener('DOMContentLoaded', () => {
    // Select all video containers on the page
    const videoContainers = document.querySelectorAll('.myVideo');

    // Loop through each video container
    videoContainers.forEach(container => {
        // Select all video elements inside the container
        const videos = container.querySelectorAll('video');
        
        // Loop through each video element
        videos.forEach(video => {
            // Add an event listener for when the mouse is over the video
            video.addEventListener('mouseover', () => {
                video.muted = true; // Mute the video
                video.play(); // Play the video
            });

            // Add an event listener for when the mouse leaves the video
            video.addEventListener('mouseout', () => {
                video.pause(); // Pause the video
                video.currentTime = 0; // Reset the video to the start
            });

            // Add an event listener for when the video is double-clicked
            video.addEventListener('dblclick', () => {
                video.muted = !video.muted; // Toggle the mute state (mute/unmute)
            });
        });
    });
});
