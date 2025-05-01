document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');

    // Error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Reset previous errors and success message
    clearErrors([nameError, emailError, messageError]);
    successMessage.textContent = '';

    // Validation flags
    let isValid = true;

    // Name validation (minimum 2 characters)
    if (name.value.trim().length < 2) {
        showError(nameError, 'Please enter your name (minimum 2 characters)');
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        showError(emailError, 'Please enter a valid email address');
        isValid = false;
    }

    // Message validation (minimum 10 characters)
    if (message.value.trim().length < 10) {
        showError(messageError, 'Message should be at least 10 characters');
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        successMessage.textContent = 'Message sent successfully!';
        successMessage.style.display = 'block';
        
        // Reset form
        this.reset();
        
        // Hide success message after 3 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    }
});

// Helper functions
function showError(element, message) {
    element.textContent = message;
    element.style.display = 'block';
}

function clearErrors(errorElements) {
    errorElements.forEach(error => {
        error.textContent = '';
        error.style.display = 'none';
    });
}

// Real-time validation for better UX
document.getElementById('name').addEventListener('input', function() {
    document.getElementById('nameError').style.display = 'none';
});

document.getElementById('email').addEventListener('input', function() {
    document.getElementById('emailError').style.display = 'none';
});

document.getElementById('message').addEventListener('input', function() {
    document.getElementById('messageError').style.display = 'none';
});