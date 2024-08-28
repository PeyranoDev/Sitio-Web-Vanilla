document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (validateForm(name, email, message)) {

            form.submit(); 
        }
    });

    function validateForm(name, email, message) {
        let isValid = true;


        if (name === "") {
            alert("Por favor, ingresa tu nombre.");
            isValid = false;
        }

        if (email === "") {
            alert("Por favor, ingresa tu correo electrónico.");
            isValid = false;
        } else if (!validateEmail(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            isValid = false;
        }

        if (message === "") {
            alert("Por favor, ingresa un mensaje.");
            isValid = false;
        }

        return isValid;
    }

    function validateEmail(email) {

        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
