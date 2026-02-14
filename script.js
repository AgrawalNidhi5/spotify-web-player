const audio = document.getElementById("audio-player");
const playBtn = document.querySelector(".play-btn");
const progressBar = document.querySelector(".progress-bar");
const volumeBar = document.querySelector(".control-bar");
const currentTimeEl = document.querySelector(".curr-time");
const totalTimeEl = document.querySelector(".tot-time");

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.src = "./assets/pauseicon.png";
    } else {
        audio.pause();
        playBtn.src = "./assets/player_icon3.png";
    }
});

audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
        updateTimeDisplay();
    }
});

progressBar.addEventListener("input", () => {
    if (audio.duration) {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    }
});

volumeBar.addEventListener("input", () => {
    audio.volume = volumeBar.value;
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

function updateTimeDisplay() {
    currentTimeEl.textContent = formatTime(audio.currentTime);
    totalTimeEl.textContent = formatTime(audio.duration);
}

function setMood(mood) {
    document.body.className = mood;

    const buttons = document.querySelectorAll(".mood-selector button");
    buttons.forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");
}

