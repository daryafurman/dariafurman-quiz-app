console.clear();

document.addEventListener("DOMContentLoaded", function () {
  const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
  let isBookmarked = false;

  bookmarkButton.addEventListener("click", function () {
    isBookmarked = !isBookmarked;
    if (isBookmarked) {
      bookmarkButton.src = "img/red-bookmark.png";
    } else {
      bookmarkButton.src = "img/empty-bookmark.webp";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const questionCards = document.querySelectorAll('[data-js="question-card"]');

  questionCards.forEach(function (card) {
    const answerButton = card.querySelector('[data-js="answer-button"]');
    const answerText = card.querySelector(".answer");
    let isAnswerVisible = false;

    answerButton.addEventListener("click", function () {
      isAnswerVisible = !isAnswerVisible;
      answerText.classList.toggle("hidden", !isAnswerVisible);
      answerButton.textContent = isAnswerVisible ? "Hide Answer" : "Answer";
    });
  });
});
