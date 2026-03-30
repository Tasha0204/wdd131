document.addEventListener('DOMContentLoaded', () => {

    const MISSION = document.querySelector('.mission-myself');
    if (MISSION) {
        const aboutMyselfContent = `
            <h2>I transform your vision into a high-impact digital platform.</h2>
            <p>
                I'm a web developer in training, specializing in creating functional, modern, and scalable web platforms.
            </p> 
            <p>
                At A&S, I transform ideas into real digital tools using a solid stack of HTML, CSS, JavaScript, and MySQL.
            </p>     
            <p>
                My approach isn't just about programming; it's about designing technical solutions that bring real value 
                to your community and enhance your brand's professionalism. 
            </p>
        `;
        MISSION.innerHTML = aboutMyselfContent;
    }

    const vision = document.querySelector('.vision');
    if (vision) {
        const educationContent = `
            <h2>Build the technical foundation your brand needs to take off.</h2>
            <p>
               As a Software Development student, my greatest strengths are agility and mastery of current technologies.        
            </p>
            <p>
                At A&S, I offer web development services specifically designed for startups that need a strong digital 
                identity and a system that works from day one. 
            </p>
        `;
        vision.innerHTML = educationContent;
    }
});