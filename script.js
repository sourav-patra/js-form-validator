const formElement = document.getElementById("form");
const password1Element = document.getElementById("password1");
const password2Element = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

/**
 * Update the DOM with the message and styling 
 * if form is invalid/valid
 * @param {string} displayMessage
 * @param {boolean} isFormValid
 */
function displayFormMessage(displayMessage, isFormValid = false) {
  message.textContent = displayMessage;
  message.style.color = isFormValid ? "green" : "red";
  messageContainer.style.borderColor = isFormValid ? "green" : "red";
}

// Store the form data
function storeFormData() {
  const formData = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value
  };
  // Do something with user data, for now just printing it in console
  console.log(formData);
}

// Function to check the validity of the form
function checkFormValidity() {
  // Using Constraint API
  if (!form.checkValidity()) {
    // Style main message for an error
    displayFormMessage("Please enter all fields correctly.");
  } else {
    // If form is valid, check for matching passwords
    let arePasswordsMatching = password1Element.value === password2Element.value;
    password2Element.style.borderColor = password1Element.style.borderColor = arePasswordsMatching ? "green" : "red";
    if (arePasswordsMatching) {
      displayFormMessage("Successfully registered!", true);
      // Submit data if valid
      storeFormData();
    } else {
      // Style main message for an error
      displayFormMessage("Please make sure passwords match.");
    }
  }
}

// Process form data
function processFormData(event) {
  event.preventDefault();
  checkFormValidity()
}

formElement.addEventListener("submit", processFormData);