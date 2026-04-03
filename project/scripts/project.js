
const projects = [
    {
        title: "Portfolio 1: Place page",
        image: "images/portfolio-1-small.webp",
        desc: "This website portfolio uses picture and srcset in order to load different picture sizes. The site is about my dream destination, Banaue Rice Terraces in the Philippines!",
        link: "https://tasha0204.github.io/wdd131/place.html"
    },
    {
        title: "Portfolio 2: WDD131 home page",
        image: "images/project-images/portfolio-2.webp",
        desc: "This is a simple HTML personal homepage I've created for my course Dynamic Web Fundamentals (WDD131) in BYU-Idaho Spring Semester 2024.",
        link: "https://tasha0204.github.io/wdd131/index.html"
    },
    {
        title: "Portfolio 3: Filtered temples page",
        image: "images/project-images/portfolio-3.webp",
        desc: "This website portfolio uses filtering of array objects in JavaScript.",
        link: "https://tasha0204.github.io/wdd131/filtered-temples.html"
    },
    {
        title: "Portfolio 4: Unfiltered temples page",
        image: "images/project-images/portfolio-4.webp",
        desc: "This website portfolio is the beta version of the Filtered Temples page.",
        link: "https://tasha0204.github.io/wdd131/temples.html"
    },
    {
        title: "Portfolio 5: Holy grail layout (practice)",
        image: "images/project-images/portfolio-5.webp",
        desc: "This is only a practice website to create my first holy grail layout in HTML.",
        link: "https://tasha0204.github.io/wdd131/csspractice/holy-grail-layout-flex.html"
    },
    {
        title: "Portfolio 6: Whitewater rafting site (WDD130)",
        image: "images/project-images/portfolio-6.webp",
        desc: "This website portfolio is my project in Web Fundamentals (WDD130).",
        link: "https://tasha0204.github.io/wdd130/wwr/index.html"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.portfolio-container');

    if (container) {
        container.innerHTML = ""; 

        projects.forEach(project => {
        
            const card = `
                <div class="project-card">
                    <h3 class="project-title">${project.title}</h3>
                    <div class="picturediv">
                        <a href="${project.link}" target="_blank">
                            <img src="${project.image}" alt="${project.title}" loading="lazy" width="300" height="200">
                        </a>
                    </div>
                    <p class="project-desc">${project.desc}</p>
                </div>
            `;
            
            container.innerHTML += card;
        });
    }

    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            const pass = document.getElementById('pass').value;
            const confirm = document.getElementById('pass-confirm').value;

            if (pass !== confirm) {
                e.preventDefault();
                alert("Passwords do not match!");
            } else {

                localStorage.setItem('formSubmitted', 'true');
                alert("Form submitted successfully!");
            }
        });
    }
});