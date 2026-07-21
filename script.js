// Name: Alicia Goss
// Filename: script.js

document.addEventListener("DOMContentLoaded", function() {
    console.log("Alicia Goss Portfolio initialized.");

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Thank you for your message! It has been successfully submitted.");
            contactForm.reset();
        });
    }
});