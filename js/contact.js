const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone")
const order = document.querySelector("#order")
const message = document.querySelector("#message")
const button = document.querySelector("#topic")

const nameError = document.querySelector("#nameError")
const emailError = document.querySelector("#emailError")
const phoneError = document.querySelector("#phoneError")
const orderError = document.querySelector("#orderError")

function validateForm(event) {
    event.prevntDefault();

    if (checklength(fullName.value, 1) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block"
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block"
    }

    if (checklength(phone.value, 8) === true) {
        phoneError.style.display = "none";
    } else {
        phoneError.style.display = "block"
    }

    if (checklength(order.value, 5) === true) {
        orderError.style.display = "none";
    } else {
        orderError.style.display = "block"
    }

}

function buttonDisabledCheck() {
    if (checklength(fullName.value,1) && validateEmail(email.value) && checklength(phone.value,8) && checklength(order.value, 5) && checklength(topic.value, 1)) {
    button.disabled = false; 
} else {
    button.disabled = true;
 }
}

fullName.addEventListener("keyup", buttonDisabledCheck);
email.addEventListener("keyup", buttonDisabledCheck);
phone.addEventListener("keyup", buttonDisabledCheck);
order.addEventListener("keyup", buttonDisabledCheck);

function submitForm(event) {
    event.prevntDefault();
    message.innerHTML = `div class="message">Thank you for contacting us! We will reply within 1-2 buisness days.</div>`;
    form.reset(); 
}

form.addEventListener("submit",submitForm);

function checklength (value,len) {
    if(value.trim().length >= len) {
        return true;
    } else {
        message.innerHTML = `<div class="message">Please input more characters</div>`;
        return false;
    }
}

function validateEmail(email) {
    const exampleReg = /\S+@\S+\.\S+/;
    const patternMatches = exampleReg.test(email);
    return patternMatches;
}