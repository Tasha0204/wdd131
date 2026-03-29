    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');
    const socialContent = `
        <a href="https://github.com/demetrioaris" target="_blank" title="GitHub"><img
                class="icon github-logo" src="../project/images/logos/github-mark-white.png"
                alt="GitHub icon" /></a>
        <a href="https://x.com/demetrio_aris" target="_blank" title="X"><img class="icon x-logo"
                src="../project/images/logos/logo-x-version-white.png" alt="X logo" /></a>
        <a href="https://www.linkedin.com/in/d-aris" target="_blank" title="LinkedIn"><img
                class="icon linkedin-logo" src="../project/images/logos/linkedin-logo-white.png"
                alt="LinkedIn icon" /></a>
    `;

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('open');
        navigation.classList.toggle('open');
    });

    document.querySelectorAll('.intro-social, .social').forEach(div => {
        div.innerHTML = socialContent;
    });

    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});