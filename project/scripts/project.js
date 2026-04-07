
const projects = [
     {
        title: "project 1: Home Page",
        image: "images/portafolio2.png",
        desc: "This is a simple HTML personal homepage I've created for my course Dynamic Web Fundamentals (WDD131) in BYU-Idaho.",
        link: "https://tasha0204.github.io/wdd131/index.html"
    },
     {
        title: "project 2: Picture Album",
        image: "images/portafolio4.png",
        desc: "This website portfolio is the beta version of the Filtered Temples page.",
        link: "https://tasha0204.github.io/wdd131/temples.html"
    },
    {
        title: "project 3: Country Page",
        image: "images/portafolio1.png",
        desc: "This is a project from Lima, Peru, that shows a panoramic view of the Costa Verde along with key statistical data and the current weather conditions.",
        link: "https://tasha0204.github.io/wdd131/place.html"
    },
   
    {
        title: "project 4: Picture Album Enhancement",
        image: "images/portafolio3.png",
        desc: "This is a project for a dynamic gallery of southern temples with filtering options by age and size, displaying architectural data and locations.",
        link: "https://tasha0204.github.io/wdd131/filtered-temples.html"
    },
 {
        title: "project 5: Product Review",
        image: "images/portafolio6.png",
        desc: "This is a rating form.",
        link: "https://tasha0204.github.io/wdd131/form.html"
    },
  
    {
        title: "project 6: Whitewater rafting site (WDD130)",
        image: "images/portafolio5.png",
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