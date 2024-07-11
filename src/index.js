"use strict"
const radioBtn = document.getElementsByName("querytype");
const submitBtn = document.querySelector("button");

// create error message 
const errorMessage = (node) => {
    const error = node.nextElementSibling
    if (error) return;
    const div = document.createElement("div");
    div.className = "error";
    div.textContent = `${node.parentElement.textContent.replace("*", "")} This field is required`
    node.parentElement.append(div);
}

// clear error
const clearErrorMessage = (node) => {
    const error = node.nextElementSibling;
    if (!error) return;
    if (error.className === "error") error.remove();
}
// Name validator
const validateInput = function () {
    const nameInput = document.querySelectorAll("input[type='text']");
    let isValid = false
    nameInput.forEach((item) => {
        const value = item.value.trim();
        if (!value || /\d/.test(value)) {
            errorMessage(item);
            isValid = false;
        }
        else {
            clearErrorMessage(item);
            isValid = true;
        }

    });
    return isValid;
}

// Email Validator
const emailValidator = function () {
    const emailInput = document.querySelector("input[type='email']");

    if (!emailInput.value || !email.value.includes("@")) {
        errorMessage(emailInput);
        return false;
    }
    else {
        clearErrorMessage(emailInput);
        return true
    }
}

// VALIDATE RADIO BTN
const validateRadioBtn = function () {
    const error = document.querySelector(".email_error");
    let isChecked = false;
    radioBtn.forEach((radio) => {
        if (radio.checked) {
            error.classList.add("hidden")
            isChecked = true;
        }

    })
    if (!isChecked) error.classList.remove("hidden");
    return isChecked;
}

// VALIDATE TEXT AREA
const validateTextArea = () => {
    const textArea = document.querySelector("textarea");

    if (!textArea.value) {
        errorMessage(textArea)
        return false;
    }
    else
        clearErrorMessage(textArea);
    return true
}

// VALIDATE CONSENT 
const consentValidate = function () {
    const concent = document.querySelector("#consent__box");
    const error = document.querySelector(".concent__error")
    let isChecked = false;
    if (concent.checked) {
        error.classList.add("hidden")
        isChecked = true;
    }
    if (!isChecked) error.classList.remove("hidden");
    return isChecked;
}


// SUCCESS MESSAGE 

const successMessage = () => {
    const message = document.querySelector(".message");
    message.classList.remove("hidden");
    setTimeout(() => {
        message.classList.add("hidden");
    }, 5000);
}

// SUBMIT MESSAGE
submitBtn.addEventListener("click", function (e) {
    e.preventDefault()
    const input = validateInput();
    const email = emailValidator();
    const radio = validateRadioBtn();
    const textArea = validateTextArea();
    const consent = consentValidate();

    const valid = input && email && radio && textArea && consent;

    if (valid) {
        successMessage();
    }
});