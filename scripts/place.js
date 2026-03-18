
const temperature = 10; 
const windSpeed = 5;

const calculateWindChill = (t, v) => (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);

const wcElement = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {

    wcElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
   
    wcElement.textContent = "N/A";
}

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;