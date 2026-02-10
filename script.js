document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  if (!envelope) return;

  // auto open envelope after 1.5s
  setTimeout(() => {
    envelope.classList.add("open");

    // wait for expand animation to finish
    setTimeout(startTyping, 2000);

  }, 1500);

  // 💌 LETTER CONTENT (SLOW & EMOTIONAL)
  const text = [
    "Hi baby… 💌\n\nWe’ve known each other for almost 8 years now,\nand we’ve liked each other for the past 4 years… ❤️",

    "I know I’m not the person you once wished for.\nI’m just someone ordinary… maybe even boring.\n\nBut still… I feel something real for you.",

    "And somehow, I feel this Valentine\nmight be the last one I ever get to celebrate with you… 💔\n\nMaybe we aren’t meant to stay forever.\nBut I truly wish… at least for this Valentine,\nwe can still be together. 💖",

    "— Always yours"
  ];

  const paragraphs = document.querySelectorAll(".type");
  let p = 0, c = 0;

  function startTyping() {
    if (p >= text.length) return;

    const typing = setInterval(() => {
      paragraphs[p].textContent += text[p][c];
      c++;

      if (c === text[p].length) {
        clearInterval(typing);
        p++;
        c = 0;

        // pause between paragraphs
        setTimeout(startTyping, 1400);
      }
    }, 75); // slow typing speed
  }

  // floating hearts (very subtle)
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (7 + Math.random() * 6) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 13000);
  }, 3200);
});
