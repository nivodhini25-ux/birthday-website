function updateProgress(value) {
    document.getElementById("progress").style.width = value + "%";
}
function showMessage() {
    updateProgress(33);
    document.getElementById("birthdayMusic").play();
    document.querySelector(".container").innerHTML = `
        <h1>🎂 Happy Birthday! 🎂</h1>

        <img src="images/abi 2.jpeg" class="birthday-photo">

        <p>
            Wishing you endless happiness, success, laughter, and beautiful memories.
            You deserve all the love and joy in the world. ❤️
        </p>

        <button onclick="nextSurprise()">Next Surprise ➜</button>
    `;
}

function nextSurprise() {
    document.querySelector(".container").innerHTML = `
        <h1>💌 A Special Letter 💌</h1>

        <img src="images/abi 3.jpeg" class="birthday-photo">

        <p>
            Happy Birthday! 🎉<br><br>

            I hope today brings you countless smiles, unforgettable memories,
            and everything you've been wishing for.<br><br>

            Thank you for being such an important part of my life. ❤️
        </p>

        <button onclick="memoryGallery()">Memory Gallery 📸</button>
    `;
}

function finalSurprise() {
    updateProgress(66);
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });

    document.querySelector(".container").innerHTML = `
        <h1>🎉 Happy Birthday! 🎉</h1>

        <p id="letter"></p>

        <button onclick="location.reload()">🏠 Back to Home</button>
    `;

    typeWriter(
        "To My World, Abi ❤️\n\nI hope today brings you the biggest smile, the warmest hugs, the sweetest surprises, and memories you'll treasure forever.\n\nMay this year be filled with exciting opportunities, endless joy, and everything that makes your heart happy.\n\nStay the incredible person you are and keep shining.\n\nHappy Birthday! 🎂✨💕",
        "letter",
        35
    );
}

function typeWriter(text, elementId, speed) {
    let i = 0;

    function typing() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}
function memoryGallery() {
    document.getElementById("birthdayMusic").play();
    document.querySelector(".container").innerHTML = `
        <h1>📸 Our Beautiful Memories 📸</h1>

        <img id="galleryImage" src="images/abi 2.jpeg" class="birthday-photo">

        <br><br>

        <button onclick="previousPhoto()">⬅ Previous</button>

        <button onclick="nextPhoto()">Next ➡</button>

        <br><br>

       <button onclick="whySpecial()">Continue ❤️</button>
    `;
}
let photos = [
    "images/abi 2.jpeg",
    "images/abi 3.jpeg",
    "images/abi 4.jpeg",
    "images/abi 5.jpeg",
    "images/abi 6.jpeg",
    "images/abi 7.jpeg",
    "images/abi 8.jpeg",
    "images/abi 9.jpeg"
];

let currentPhoto = 0;
function nextPhoto() {
    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    document.getElementById("galleryImage").src = photos[currentPhoto];
}

function previousPhoto() {
    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    document.getElementById("galleryImage").src = photos[currentPhoto];
}
function whySpecial() {
    document.querySelector(".container").innerHTML = `
        <h1>🌸 Why You're So Special 🌸</h1>

        <p>
            ❤️ You always know how to make people smile.<br><br>

            🌼 You have one of the kindest hearts I've ever known.<br><br>

            ✨ Every moment with you becomes a beautiful memory.<br><br>

            💖 Your happiness means more than you know.<br><br>

            🌎 The world is a little brighter because you're in it.
        </p>

        <button onclick="littlePromise()">Next ➜</button>
    `;
}
function littlePromise() {
    document.querySelector(".container").innerHTML = `
        <h1>🤍 A Little Promise 🤍</h1>

        <p>
            No matter where life takes us,
            I hope we always have wonderful memories together. ❤️<br><br>

            I hope this birthday is the beginning of another beautiful year in your life.<br><br>

            Thank you for being someone who makes life brighter just by being yourself. 🌸
        </p>

        <button onclick="finalSurprise()">Final Surprise 🎁</button>
    `;
}
