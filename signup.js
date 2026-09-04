// =========================================
// CampusHub - Sign Up JavaScript
// =========================================


// ---------- Form ----------

const signupForm = document.querySelector("#signup-form");


// ---------- Inputs ----------

const nameInput = document.querySelector("#name");

const emailInput = document.querySelector("#email");

const collegeInput = document.querySelector("#college");

const passwordInput = document.querySelector("#password");

const confirmPasswordInput =
    document.querySelector("#confirm-password");


// ---------- Error Messages ----------

const nameError =
    document.querySelector("#name-error");

const emailError =
    document.querySelector("#email-error");

const collegeError =
    document.querySelector("#college-error");

const passwordError =
    document.querySelector("#password-error");

const confirmPasswordError =
    document.querySelector("#confirm-password-error");


// ---------- Success ----------

const successMessage =
    document.querySelector("#success-message");


// ---------- Password Buttons ----------

const passwordToggle =
    document.querySelector("#password-toggle");

const confirmPasswordToggle =
    document.querySelector("#confirm-password-toggle");


// =========================================
// Clear Errors
// =========================================

function clearErrors() {

    nameError.textContent = "";

    emailError.textContent = "";

    collegeError.textContent = "";

    passwordError.textContent = "";

    confirmPasswordError.textContent = "";

    successMessage.textContent = "";


    nameInput.classList.remove("input-error");

    emailInput.classList.remove("input-error");

    collegeInput.classList.remove("input-error");

    passwordInput.classList.remove("input-error");

    confirmPasswordInput.classList.remove("input-error");

}


// =========================================
// Show Error
// =========================================

function showError(input, errorElement, message) {

    input.classList.add("input-error");

    errorElement.textContent = message;

}


// =========================================
// Email Validation
// =========================================

function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}


// =========================================
// Form Submit
// =========================================

signupForm.addEventListener("submit", (event) => {

    event.preventDefault();


    clearErrors();


    // Get values

    const name =
        nameInput.value.trim();

    const email =
        emailInput.value.trim();

    const college =
        collegeInput.value.trim();

    const password =
        passwordInput.value;

    const confirmPassword =
        confirmPasswordInput.value;


    let isValid = true;


    // ---------- Name ----------

    if (name === "") {

        showError(
            nameInput,
            nameError,
            "Please enter your full name."
        );

        isValid = false;

    }


    // ---------- Email ----------

    if (email === "") {

        showError(
            emailInput,
            emailError,
            "Please enter your email."
        );

        isValid = false;

    }

    else if (!isValidEmail(email)) {

        showError(
            emailInput,
            emailError,
            "Please enter a valid email address."
        );

        isValid = false;

    }


    // ---------- College ----------

    if (college === "") {

        showError(
            collegeInput,
            collegeError,
            "Please enter your college."
        );

        isValid = false;

    }


    // ---------- Password ----------

    if (password === "") {

        showError(
            passwordInput,
            passwordError,
            "Please create a password."
        );

        isValid = false;

    }

    else if (password.length < 6) {

        showError(
            passwordInput,
            passwordError,
            "Password must be at least 6 characters."
        );

        isValid = false;

    }


    // ---------- Confirm Password ----------

    if (confirmPassword === "") {

        showError(
            confirmPasswordInput,
            confirmPasswordError,
            "Please confirm your password."
        );

        isValid = false;

    }

    else if (password !== confirmPassword) {

        showError(
            confirmPasswordInput,
            confirmPasswordError,
            "Passwords do not match."
        );

        isValid = false;

    }


    // =====================================
    // Final Result
    // =====================================

    if (!isValid) {

        return;

    }


    successMessage.textContent =
        "Account created successfully!";


    // Clear the form

    signupForm.reset();

});


// =========================================
// Password Visibility
// =========================================

passwordToggle.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        passwordToggle.textContent = "Hide";

        passwordToggle.setAttribute(
            "aria-label",
            "Hide password"
        );

    }

    else {

        passwordInput.type = "password";

        passwordToggle.textContent = "Show";

        passwordToggle.setAttribute(
            "aria-label",
            "Show password"
        );

    }

});


// =========================================
// Confirm Password Visibility
// =========================================

confirmPasswordToggle.addEventListener("click", () => {

    if (confirmPasswordInput.type === "password") {

        confirmPasswordInput.type = "text";

        confirmPasswordToggle.textContent = "Hide";

        confirmPasswordToggle.setAttribute(
            "aria-label",
            "Hide password"
        );

    }

    else {

        confirmPasswordInput.type = "password";

        confirmPasswordToggle.textContent = "Show";

        confirmPasswordToggle.setAttribute(
            "aria-label",
            "Show password"
        );

    }

});