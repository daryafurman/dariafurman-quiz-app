console.clear();

document.addEventListener("DOMContentLoaded", function () {
  // Bookmark button
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

  // Answer button
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

  // Form
  const questionField = document.getElementById("question-area");
  const answerField = document.getElementById("answer");
  const tagField = document.getElementById("tag");
  const submitButton = document.querySelector(".submit-form");

  function updateCounter(field, counter) {
    const maxChars = parseInt(field.getAttribute("maxlength"));
    const remainingChars = maxChars - field.value.length;
    counter.textContent = `Characters remaining: ${remainingChars}`;
  }

  questionField.addEventListener("input", function () {
    updateCounter(questionField, questionCounter);
  });

  answerField.addEventListener("input", function () {
    updateCounter(answerField, answerCounter);
  });

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const question = questionField.value;
    const answer = answerField.value;
    const tags = tagField.value;

    // Create card elements
    const card = document.createElement("section");
    card.classList.add("question-card");

    const article = document.createElement("article");
    article.classList.add("question");

    const questionText = document.createElement("h3");
    questionText.classList.add("question-text");
    questionText.textContent = question;

    const answerButton = document.createElement("button");
    answerButton.classList.add("answer-button");
    answerButton.textContent = "Answer";

    const answerP = document.createElement("p");
    answerP.classList.add("answer");
    answerP.classList.add("hidden");
    answerP.textContent = answer;

    const hashtagsList = document.createElement("div");
    hashtagsList.classList.add("hashtags-list");

    const ul = document.createElement("ul");

    const li = document.createElement("li");
    li.classList.add("hashtags");
    li.textContent = tags;

    // Append the card to the page
    const mainContainer = document.querySelector("main");
    mainContainer.appendChild(card);
    card.appendChild(article);
    article.appendChild(questionText);
    article.appendChild(answerButton);
    article.appendChild(answerP);
    card.appendChild(hashtagsList);
    hashtagsList.appendChild(ul);
    ul.appendChild(li);
  });
});
