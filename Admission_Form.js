// Toggle form display based on instructions acknowledgment
document.getElementById("formToggle").addEventListener("change", function () {
    const formSection = document.getElementById("admissionFormSection");
    formSection.style.display = this.checked ? "block" : "none";
});

// Copy present address to permanent address
document.getElementById("sameAsPresent").addEventListener("change", function () {
    const presentAddress = document.getElementById("presentAddress").value;
    document.getElementById("permanentAddress").value = this.checked ? presentAddress : '';
});

// Convert email to lowercase
function convertToLowerCase(input) {
    input.value = input.value.toLowerCase();
}

// Convert name to uppercase
function convertToUpperCase(input) {
    input.value = input.value.toUpperCase();
}

// Validate mobile number (accepts only digits)
function validateMobileNumber(input) {
    input.value = input.value.replace(/\D/g, '');
}

// Password toggle visibility
document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
});

// Password match check
document.getElementById("confirmPassword").addEventListener("input", function () {
    const password = document.getElementById("password").value;
    const confirmPassword = this.value;
    const message = document.getElementById("passwordMessage");

    if (password !== confirmPassword) {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
});
