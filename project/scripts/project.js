document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container-project-box');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const projectTitle = document.createElement('h2');
        projectTitle.textContent = project.projectName;
        projectCard.appendChild(projectTitle);

        const projectImage = document.createElement('img');
        projectImage.src = project.imageUrl;
        projectImage.width = project.width;
        projectImage.height = project.height;
        projectImage.alt = `${project.projectName} Image`;
        projectCard.appendChild(projectImage);

        const projectInfo = document.createElement('div');
        projectInfo.className = 'project-info';

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.projectDescription;
        projectInfo.appendChild(projectDescription);

        const logosDiv = document.createElement('div');
        logosDiv.className = 'logos';

        const htmlLogo = document.createElement('img');
        htmlLogo.src = project.htmlLogo;
        htmlLogo.alt = project.altHtml;
        logosDiv.appendChild(htmlLogo);

        const cssLogo = document.createElement('img');
        cssLogo.src = project.cssLogo;
        cssLogo.alt = project.altCss;
        logosDiv.appendChild(cssLogo);

        const jsLogo = document.createElement('img');
        jsLogo.src = project.jsLogo;
        jsLogo.alt = project.altJs;
        logosDiv.appendChild(jsLogo);

        projectInfo.appendChild(logosDiv);
        projectCard.appendChild(projectInfo);
        container.appendChild(projectCard);
    });
const signupForm = document.getElementById('signup-form');

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        const pass = document.getElementById('password').value;
        const confirmPass = document.getElementById('confirm-password').value;

        if (pass !== confirmPass) {
            e.preventDefault(); // Evita que se envíe el formulario
            alert("Passwords do not match!");
        } else {
            alert("Form submitted successfully!");
        }
    });
}
});