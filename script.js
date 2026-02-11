document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.querySelector(".envelope");
  const lines = document.querySelectorAll(".line");
  const signature = document.querySelector(".signature");

  const text = [
    "Hi baby… 💌",
    "We’ve known each other for almost 8 years now, and we’ve liked each other for the past 4 years… ❤️",
    "I know I’m not the person you once wished for. I’m just someone ordinary… maybe even boring.",
    "But still… I feel something real for you.",
    "And somehow, I feel this Valentine might be the last one I ever get to celebrate with you… 💔",
    "Maybe we aren’t meant to stay forever. But I truly wish… at least for this Valentine, we can still be together. 💖"
  ];

  let lineIndex = 0;
  let charIndex = 0;

  // Open envelope
  setTimeout(() => {
    envelope.classList.add("open");
  }, 1500);

  // Fade envelope & start typing
  setTimeout(() => {
    envelope.classList.add("fade");
    typeText();
  }, 3800);

  function typeText() {
    if (lineIndex < text.length) {
      if (charIndex < text[lineIndex].length) {
        lines[lineIndex].textContent += text[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 60); // slow typing
      } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(typeText, 700); // pause between paragraphs
      }
    } else {
      signature.textContent = "— Yours, always 💖";
    }
  }
});
