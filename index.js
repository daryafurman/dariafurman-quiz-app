document.addEventListener("DOMContentLoaded", function () {
  const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
  const answerButton = document.querySelector('[data-js="answer-button"]');
  const answerText = document.querySelector(".answer");

  // Toggle bookmark styles
  bookmarkButton.addEventListener("click", function () {
    bookmarkButton.classList.toggle("bookmarked");
  });

  // Toggle answer visibility
  answerButton.addEventListener("click", function () {
    answerText.classList.toggle("hidden");

    // Toggle
    const buttonText = answerButton.innerText;
    answerButton.innerText = buttonText === "Answer" ? "Hide Answer" : "Answer";
  });
});

//pivot button animation

function rotateButton() {
  var answerButton = document.querySelector(".answer-button-pivot");
  answerButton.classList.toggle("rotated");
}
