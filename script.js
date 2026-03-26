// 🔐 PASSWORD
function checkPassword() {
    let correctPassword = "vinay@123";
    let input = document.getElementById("password").value;

    if (input === correctPassword) {
        document.getElementById("login").style.display = "none";
        document.getElementById("content").style.display = "block";

        // ▶️ Auto play music after unlock (user interaction = allowed)
        music.play();
    } else {
        document.getElementById("error").innerText = "Wrong password 💔";
    }
}

// ⏳ COUNTDOWN
let startDate = new Date("2025-08-09");

setInterval(() => {
    let now = new Date();
    let diff = now - startDate;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText =
        days + " days together ❤️";
}, 1000);

// 🎁 POPUP
setTimeout(() => {
    document.getElementById("popup").style.display = "block";
}, 3000);

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// 🎵 MUSIC PLAYER
let songs = ["Song.mp3"]; // 👈 Add more songs if you want
let names = ["Romantic Song 💖"];
let current = 0;

let music;
let title;

// Wait for page to load (IMPORTANT FIX)
window.onload = function () {
    music = document.getElementById("bg-music");
    title = document.getElementById("song-name");

    music.src = songs[current];
};

// ▶️ Play / Pause
function toggleMusic() {
    if (music.paused) music.play();
    else music.pause();
}

// ⏭️ Next
function nextSong() {
    current = (current + 1) % songs.length;
    updateSong();
}

// ⏮️ Previous
function prevSong() {
    current = (current - 1 + songs.length) % songs.length;
    updateSong();
}

// 🔄 Update Song
function updateSong() {
    music.src = songs[current];
    title.innerText = names[current];
    music.play();
}

// 🔊 Volume
function changeVolume(v) {
    music.volume = v;
}

// 💖 FLOATING HEARTS
setInterval(() => {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "20px";

    document.body.appendChild(heart);

    let move = setInterval(() => {
        heart.style.top = parseInt(heart.style.top) - 3 + "px";
    }, 50);

    setTimeout(() => {
        clearInterval(move);
        heart.remove();
    }, 4000);

}, 400);
