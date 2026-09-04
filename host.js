const hostForm = document.querySelector("#host-form");

const eventNameInput =
    document.querySelector("#event-name");

const collegeInput =
    document.querySelector("#college");

const categoryInput =
    document.querySelector("#category");

const dateInput =
    document.querySelector("#event-date");

const locationInput =
    document.querySelector("#location");

const feeInput =
    document.querySelector("#fee");

const descriptionInput =
    document.querySelector("#description");


const eventNameError =
    document.querySelector("#event-name-error");

const collegeError =
    document.querySelector("#college-error");

const categoryError =
    document.querySelector("#category-error");

const dateError =
    document.querySelector("#date-error");

const locationError =
    document.querySelector("#location-error");

const feeError =
    document.querySelector("#fee-error");

const descriptionError =
    document.querySelector("#description-error");

const successMessage =
    document.querySelector("#success-message");


function clearErrors() {

    eventNameError.textContent = "";
    collegeError.textContent = "";
    categoryError.textContent = "";
    dateError.textContent = "";
    locationError.textContent = "";
    feeError.textContent = "";
    descriptionError.textContent = "";

    eventNameInput.classList.remove("input-error");
    collegeInput.classList.remove("input-error");
    categoryInput.classList.remove("input-error");
    dateInput.classList.remove("input-error");
    locationInput.classList.remove("input-error");
    feeInput.classList.remove("input-error");
    descriptionInput.classList.remove("input-error");

    successMessage.textContent = "";
}


function showError(input, errorElement, message) {

    input.classList.add("input-error");

    errorElement.textContent = message;
}


hostForm.addEventListener("submit", (event) => {

    event.preventDefault();

    clearErrors();

    const eventName = eventNameInput.value.trim();
    const college = collegeInput.value.trim();
    const category = categoryInput.value;
    const date = dateInput.value;
    const location = locationInput.value.trim();
    const fee = feeInput.value;
    const description = descriptionInput.value.trim();

    let isValid = true;


    // Event name

    if (eventName === "") {

        showError(
            eventNameInput,
            eventNameError,
            "Please enter the event name."
        );

        isValid = false;
    }


    // College

    if (college === "") {

        showError(
            collegeInput,
            collegeError,
            "Please enter your college or organization."
        );

        isValid = false;
    }


    // Category

    if (category === "") {

        showError(
            categoryInput,
            categoryError,
            "Please select a category."
        );

        isValid = false;
    }


    // Date

    if (date === "") {

        showError(
            dateInput,
            dateError,
            "Please select an event date."
        );

        isValid = false;
    }


    // Location

    if (location === "") {

        showError(
            locationInput,
            locationError,
            "Please enter the event location."
        );

        isValid = false;
    }


    // Fee

    if (fee === "") {

        showError(
            feeInput,
            feeError,
            "Please enter the entry fee."
        );

        isValid = false;
    }

    else if (Number(fee) < 0) {

        showError(
            feeInput,
            feeError,
            "Entry fee cannot be negative."
        );

        isValid = false;
    }


    // Description

    if (description === "") {

        showError(
            descriptionInput,
            descriptionError,
            "Please enter an event description."
        );

        isValid = false;
    }


    // Stop if validation failed

    if (!isValid) {
        return;
    }


// Successful validation

const newEvent = {
    name: eventName,
    college: college,
    category: category,
    date: date,
    location: location,
    fee: fee,
    description: description
};

localStorage.setItem(
    "campusHubEvent",
    JSON.stringify(newEvent)
);

successMessage.textContent =
    "Event created successfully!";

hostForm.reset();
});