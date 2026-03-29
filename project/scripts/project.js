document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            projectName: "WebPage Temple",
            imageUrl: "../project/images/temple-project.png",
            width: "893px",
            height: "784px",
            htmlLogo: "../project/images/logos/html-logo-s.png",
            altHtml: "HTML5 Logo",
            cssLogo: "../project/images/logos/css-logo-s.png",
            altCss: "CSS Logo",
            jsLogo: "../project/images/logos/javaScript-logo-s.png",
            altJs: "JavaScript Logo",
            projectDescription: "This webpage features an interactive section to filter and display information about various LDS temples around the world, with a responsive hamburger menu for easy navigation. Users can view details such as temple names, locations, dedication dates, and areas, complemented by images."
        },
        {
            projectName: "WebPage Places",
            imageUrl: "../project/images/place-project.png",
            width: "765px",
            height: "601px",
            htmlLogo: "../project/images/logos/html-logo-s.png",
            altHtml: "HTML5 Logo",
            cssLogo: "../project/images/logos/css-logo-s.png",
            altCss: "CSS Logo",
            jsLogo: "../project/images/logos/javaScript-logo-s.png",
            altJs: "JavaScript Logo",
            projectDescription: "This section dynamically calculates and displays the wind chill factor based on static temperature and wind speed values. It enhances the weather information table, providing accurate and relevant details for the user's convenience."
        }
    ];

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
});