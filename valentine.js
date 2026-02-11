document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");

  const noTexts = [
    "Are you sure?",
    "Really sure?",
    "Think Again!",
    "Last Chance",
    "Surely not",
    "You might regret this",
    "Give another thought",
    "Are you absolute certain?",
    "This could be a mistake",
    "Have a heart",
    "Don't be so cold",
    "Change of heart",
    "You are breaking my heart",
    "Wouldn't you reconsider now?",
    "Is this your final answer?",
    "This should be the last"
  ];

  let step = 0;

  noBtn.addEventListener("click", () => {
    if (step < noTexts.length) {
      // Change No button text
      noBtn.textContent = noTexts[step];

      // Grow Yes button
      const currentScale = yesBtn.style.transform.replace(/[^0-9.]/g, "") || 1;
      const newScale = parseFloat(currentScale) + 0.1;
      yesBtn.style.transform = `scale(${newScale})`;

      step++;
    }
  });

  yesBtn.addEventListener("click", () => {
    // Redirect to the confetti/love page
    window.location.href = "love.html";
  });
});
