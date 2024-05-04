let timer;
let timeLeft;
let isRunning = false;
let saat = document.getElementById("timer");



function startTimer() {
    if (!isRunning) {
        let currentMinutes = parseInt(saat.innerHTML.split(':')[0]);
        let currentSeconds = parseInt(saat.innerHTML.split(':')[1]);
        timeLeft = currentMinutes * 60 + currentSeconds; // Kaldığı yerden devam etmek için kalan zamanı al
        isRunning = true;
        saat.style.color = "lightgreen";
        updateTimer();
        timer = setInterval(updateTimer, 1000);
    }
}


function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    saat.style.color = "white";
    document.getElementById("timer").innerHTML = "0:00";
}

function pauseTimer() {
    clearInterval(timer);
    saat.style.color = "red";
    isRunning = false;
}

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    saat.innerHTML = `${minutes}:${seconds}`;

    if (timeLeft === 0) {
        clearInterval(timer);
        saat.style.color = "red";
        document.querySelector(".bip").play();
        isRunning = false;
    } else {
        timeLeft--;
    }
}

function setTime(minutes) {
    if (isRunning) {

    } else {
        saat.style.color = "white";
    }

    document.getElementById("timer").setAttribute('data-time', minutes);
    document.getElementById("timer").innerHTML = `${minutes}:00`;
}

function playVideo() {
    var intro = document.querySelector(".intro");
    var baslat = document.querySelector(".baslat");
    baslat.style.display = "none";
    intro.style.display = "block";

    intro.addEventListener('ended', function () {
        baslat.style.display = "block";
        intro.style.display = "none";
        location.href = "#2"
    });

    intro.play();
}

// localStorage'den sınıf adlarını çek
let savedClassA = localStorage.getItem("classA");
let savedClassB = localStorage.getItem("classB");

// Sınıf adlarını kullanarak sayfa içeriğini güncelle
if (savedClassA && savedClassB) {
    document.querySelector(".third .kazanan").innerHTML = `ŞAMPİYON: <a href="##">${savedClassA}</a> MI <a href="##">${savedClassB}</a> MI`;
}

let az = document.querySelectorAll(".third a");

az.forEach(item => {
    item.addEventListener("click", (event) => {
        document.querySelector(".third audio").remove();
        document.querySelector(".third a").remove();
        document.querySelector(".third h1").remove();
        document.querySelector(".third h1").textContent = `ŞAMPİYON ${event.target.textContent}!`;
        confetti.start();
    });
});