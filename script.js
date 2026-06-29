// Dark Mode
const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkBtn.innerHTML = "☀️";
    } else {
        darkBtn.innerHTML = "🌙";
    }
});

// Typing Animation
const words = [
    "Computer Science Student",
    "Future Web Developer",
    "Tech Enthusiast",
    "Lifelong Learner"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
    const typing = document.getElementById("typing");

    currentWord = words[wordIndex];

    if (!isDeleting) {
        typing.textContent = currentWord.substring(0, letterIndex++);
    } else {
        typing.textContent = currentWord.substring(0, letterIndex--);
    }

    let speed = 120;

    if (!isDeleting && letterIndex === currentWord.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// Contact Form

// Smooth Scrolling
document.querySelectorAll("nav a").forEach(anchor=>{
    anchor.addEventListener("click",function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });
    });
});