// Form validation and interaction logic
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const terms = document.getElementById('terms');
    const successMessage = document.getElementById('successMessage');

    // Real-time validation
    fullName.addEventListener('blur', () => validateFullName());
    email.addEventListener('blur', () => validateEmail());
    password.addEventListener('input', () => {
        checkPasswordStrength();
        validatePassword();
    });
    confirmPassword.addEventListener('blur', () => validateConfirmPassword());
    terms.addEventListener('change', () => validateTerms());

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const isValid = validateForm();
        
        if (isValid) {
            // Simulate form submission
            showSuccess();
        }
    });

    function validateFullName() {
        const value = fullName.value.trim();
        const errorElement = fullName.nextElementSibling;
        
        if (value === '') {
            showError(fullName, errorElement, 'Full name is required');
            return false;
        } else if (value.length < 2) {
            showError(fullName, errorElement, 'Name must be at least 2 characters');
            return false;
        } else {
            showSuccess(fullName, errorElement);
            return true;
        }
    }

    function validateEmail() {
        const value = email.value.trim();
        const errorElement = email.nextElementSibling;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (value === '') {
            showError(email, errorElement, 'Email is required');
            return false;
        } else if (!emailRegex.test(value)) {
            showError(email, errorElement, 'Please enter a valid email');
            return false;
        } else {
            showSuccess(email, errorElement);
            return true;
        }
    }

    function validatePassword() {
        const value = password.value;
        const errorElement = password.nextElementSibling.nextElementSibling;
        
        if (value === '') {
            showError(password, errorElement, 'Password is required');
            return false;
        } else if (value.length < 8) {
            showError(password, errorElement, 'Password must be at least 8 characters');
            return false;
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
            showError(password, errorElement, 'Password must contain uppercase, lowercase, and number');
            return false;
        } else {
            showSuccess(password, errorElement);
            return true;
        }
    }

    function validateConfirmPassword() {
        const value = confirmPassword.value;
        const errorElement = confirmPassword.nextElementSibling;
        
        if (value === '') {
            showError(confirmPassword, errorElement, 'Please confirm your password');
            return false;
        } else if (value !== password.value) {
            showError(confirmPassword, errorElement, 'Passwords do not match');
            return false;
        } else {
            showSuccess(confirmPassword, errorElement);
            return true;
        }
    }

    function validateTerms() {
        const errorElement = terms.closest('.checkbox-group').querySelector('.error-message');
        
        if (!terms.checked) {
            errorElement.textContent = 'You must accept the terms and conditions';
            errorElement.classList.add('active');
            return false;
        } else {
            errorElement.classList.remove('active');
            return true;
        }
    }

    function checkPasswordStrength() {
        const value = password.value;
        const strengthBar = document.querySelector('.strength-bar');
        
        // Remove all strength classes
        strengthBar.classList.remove('weak', 'medium', 'strong');
        
        if (value.length === 0) {
            strengthBar.style.width = '0';
            return;
        }
        
        let strength = 0;
        
        // Length check
        if (value.length >= 8) strength++;
        if (value.length >= 12) strength++;
        
        // Character variety checks
        if (/[a-z]/.test(value)) strength++;
        if (/[A-Z]/.test(value)) strength++;
        if (/\d/.test(value)) strength++;
        if (/[@$!%*?&]/.test(value)) strength++;
        
        // Apply strength class
        if (strength <= 2) {
            strengthBar.classList.add('weak');
        } else if (strength <= 4) {
            strengthBar.classList.add('medium');
        } else {
            strengthBar.classList.add('strong');
        }
    }

    function validateForm() {
        const isFullNameValid = validateFullName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isTermsValid = validateTerms();
        
        return isFullNameValid && isEmailValid && isPasswordValid && 
               isConfirmPasswordValid && isTermsValid;
    }

    function showError(input, errorElement, message) {
        input.classList.add('error');
        input.classList.remove('success');
        errorElement.textContent = message;
        errorElement.classList.add('active');
    }

    function showSuccess(input, errorElement) {
        if (input && errorElement) {
            input.classList.remove('error');
            input.classList.add('success');
            errorElement.classList.remove('active');
        } else {
            // Show success message overlay
            successMessage.classList.add('active');
            
            // Optional: Reset form after a delay
            setTimeout(() => {
                form.reset();
                document.querySelectorAll('input').forEach(input => {
                    input.classList.remove('success', 'error');
                });
                document.querySelector('.strength-bar').style.width = '0';
            }, 3000);
        }
    }
});
