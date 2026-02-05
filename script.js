const form = document.getElementById("valentineForm");
const noBtn = document.getElementById("noBtn");

// Make No button dodge the mouse
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Handle form submit
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const answer = document.querySelector('input[name="answer"]:checked');

  if (!answer) {
    alert("Please choose an option 💖");
    return;
  }

  if (answer.value === "Yes") {
    window.location.href = "index2.html";
  } else {
    alert("Aww, maybe next time! 💕");
  }
});

