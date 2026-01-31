const container = document.querySelector(".confetti-container");
const hearts = ["💖","💗","💘","💕","💞","💓"];

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("confetti");
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";
  heart.style.fontSize = 20 + Math.random() * 30 + "px";

  container.appendChild(heart);

  // Remove heart after animation
  setTimeout(() => {
    container.removeChild(heart);
  }, parseFloat(heart.style.animationDuration) * 1000);
}

// Create a new heart every 200ms
setInterval(createHeart, 200);
