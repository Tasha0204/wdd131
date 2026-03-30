document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');
    const yearElement = document.getElementById('currentyear');
    const modifiedElement = document.getElementById('lastModified');

    const socialContent = `
        <a href="https://github.com/tasha0204" target="_blank" title="GitHub">
            <img class="icon github-logo" src="images/github.png" alt="GitHub icon" />
        </a>
        <a href="https://x.com" target="_blank" title="X">
            <img class="icon x-logo" src="images/logo-x-version.png" alt="X logo" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" title="LinkedIn">
            <img class="icon linkedin-logo" src="images/linkedin-logo.png" alt="LinkedIn icon" />
        </a>
    `;
    if (menuButton && navigation) {
        menuButton.addEventListener('click', () => {
            menuButton.classList.toggle('open');
            navigation.classList.toggle('open');
        });
    }
    document.querySelectorAll('.intro-social, .social').forEach(div => {
        div.innerHTML = socialContent;
    });
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    if (modifiedElement) {
        modifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }
    const signupForm = document.querySelector('form[action*="register"]'); 
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            const password = document.getElementById("pass");
            const confirmPassword = document.getElementById("pass-confirm");

            if (password.value !== confirmPassword.value) {
                e.preventDefault();
                alert("Las contraseñas no coinciden. Por favor, verifica.");
                confirmPassword.style.border = "2px solid #ff4d4d";
                confirmPassword.focus();
            }
        });
    }
    const loginForm = document.querySelector('form[action*="login"]');
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            const email = document.getElementById("mail").value;
            if (email === "") {
                e.preventDefault();
                alert("Por favor, ingresa tu correo electrónico.");
            }
        });
    }
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            input.style.border = "1px solid #ddd";
        });
    });
});