const signinForm = document.querySelector("#signin-form");

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");

const successMessage =
    document.querySelector("#success-message");

const passwordToggle =
    document.querySelector("#password-toggle");


function clearErrors() {

    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    emailInput.classList.remove("input-error");
    passwordInput.classList.remove("input-error");
}


function showError(input, errorElement, message) {

    input.classList.add("input-error");

    errorElement.textContent = message;
}


function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


signinForm.addEventListener("submit", (event) => {

    event.preventDefault();

    clearErrors();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    let isValid = true;


    // Email validation

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


    // Password validation

    if (password === "") {

        showError(
            passwordInput,
            passwordError,
            "Please enter your password."
        );

        isValid = false;
    }


    // Stop if validation failed

    if (!isValid) {
        return;
    }


    // Successful validation

    successMessage.textContent =
        "Signed in successfully!";

    signinForm.reset();

});


passwordToggle.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        passwordToggle.textContent = "Hide";

    }

    else {

        passwordInput.type = "password";

        passwordToggle.textContent = "Show";

    }

});