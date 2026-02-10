const envelope = document.getElementById("envelope");
const textEl = document.getElementById("typed-text");

const message = `My dearest Sinch ❤️

You are the most special person in my life…
So today I made this for you 💖

Happy Valentine’s Day 💕`;

let i = 0;

function typeWriter() {
  if (i < message.length) {
    textEl.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

envelope.onclick = () => {
  envelope.classList.remove("close");
  envelope.classList.add("open");
  setTimeout(typeWriter, 800);
};
