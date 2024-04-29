let timer;
let timeLeft;
let isRunning = false;
let saat = document.getElementById("timer");

function startTimer() {
    if (!isRunning) {
        timeLeft = parseInt(document.getElementById("timer").getAttribute('data-time')) * 60 - 1; // Geriye doğru saymaya başlamak için 1 saniye azalt
        isRunning = true;
        saat.style.color = "white";
        timer = setInterval(updateTimer, 1000);
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("timer").innerHTML = "0:00";
}

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    saat.innerHTML = `${minutes}:${seconds}`;

    if (timeLeft === 0) {
        clearInterval(timer);
        saat.style.color = "red";
        isRunning = false;
    } else {
        timeLeft--;
    }
}

function setTime(minutes) {
    document.getElementById("timer").setAttribute('data-time', minutes);
    document.getElementById("timer").innerHTML = `${minutes}:00`;
}

let a = document.querySelectorAll(".third a");

a.forEach(item => {
    item.addEventListener("click", (event) => {
        document.querySelector("iframe").remove();
        document.querySelector(".third a").remove();
        document.querySelector(".third h1").textContent = `Kazanan ${event.target.textContent}`;
    });
});


