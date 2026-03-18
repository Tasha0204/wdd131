document.addEventListener("DOMContentLoaded", () => {
    const tempElement = document.getElementById("temp");
    const windElement = document.getElementById("wind");
    const wcElement = document.getElementById("windchill");

    if (tempElement && windElement && wcElement) {
        const temp = parseFloat(tempElement.textContent);
        const wind = parseFloat(windElement.textContent);

        const calculateWindChill = (t, v) => {
            return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
        };

        if (temp <= 10 && wind > 4.8) {
            wcElement.textContent = `${calculateWindChill(temp, wind)} °C`;
        } else {
            wcElement.textContent = "N/A";
        }
    }

    const yearElement = document.getElementById("currentyear");
    const lastModElement = document.getElementById("lastModified");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    if (lastModElement) {
        lastModElement.textContent = `Last Modification: ${document.lastModified}`;
    }
});