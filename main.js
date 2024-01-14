onload = () =>{
        document.body.classList.remove("container");
};

const messages = [
  "Hey Froggo, here's a message for you",
  "Another message for Froggo",
  "Yet another message!"
];
let currentMessage = 0;

function typeMessage() {
  if (currentMessage >= messages.length) {
    currentMessage = 0;
  }

  const typewriterText = document.getElementById('typewriterText');
  typewriterText.textContent = messages[currentMessage];
  typewriterText.style.animation = 'none';
  typewriterText.offsetHeight; /* Trigger reflow */
  typewriterText.style.animation = null;

  currentMessage++;
}

// Start the typewriter effect
typeMessage();

// Change message every 5 seconds (adjust as needed)
setInterval(typeMessage, 5000);