const quitDateString = '2024-07-07T16:47:00'; 
const quitDate = new Date(quitDateString).getTime();
function updateSmokefreeCounter() {
const now = new Date().getTime();
const difference = now - quitDate;

if (difference < 0) {
    document.getElementById("time-elapsed").innerHTML = "0d 00:00:00";
    return;
}

const days = Math.floor(difference / (1000 * 60 * 60 * 24));
const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((difference % (1000 * 60)) / 1000);
const formattedHours = hours.toString().padStart(2, '0');
const formattedMinutes = minutes.toString().padStart(2, '0');
const formattedSeconds = seconds.toString().padStart(2, '0');

let displayString = '';
if (days > 0) {
    displayString += `${days}d `;
}
displayString += `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

document.getElementById("time-elapsed").innerHTML = displayString;}
updateSmokefreeCounter();
setInterval(updateSmokefreeCounter, 1000);