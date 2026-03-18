document.addEventListener("DOMContentLoaded", () => {
   
    const tempText = document.getElementById("temp").textContent;
    const windText = document.getElementById("wind").textContent;
    const wcElement = document.getElementById("windchill");

    const temp = parseFloat(tempText);
    const wind = parseFloat(windText);


    const calculateWindChill = (t, v) => {
        return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
    };


    if (temp <= 10 && wind > 4.8) {
        wcElement.textContent = `${calculateWindChill(temp, wind)} °C`;
    } else {
        wcElement.textContent = "N/A";
    }


    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = `Última modificación: ${document.lastModified}`;
});