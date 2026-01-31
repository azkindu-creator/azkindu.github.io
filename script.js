const form = document.getElementById("valentineForm");

const bubbles = document.querySelectorAll(".bubble-bg span");

bubbles.forEach(bubble => {
  bubble.style.left = Math.random() * 100 + "vw";
  bubble.style.animationDelay = Math.random() * 10 + "s";
  bubble.style.animationDuration = 8 + Math.random() * 6 + "s";
});


form.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent default form submission

  const answer = document.querySelector('input[name="answer"]:checked');

  if (!answer) {
    alert("Please choose an option 💖");
    return;
  }

  if (answer.value === "Yes") {
    // Go to index2.html
    window.location.href = "index2.html";
  } else {
    // No was chosen — stay on page
    alert("Wrong answer boo 💕");
  }
});



