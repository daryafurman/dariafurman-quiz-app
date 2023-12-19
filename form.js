document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quizForm");
  const questionTextarea = document.getElementById("question");
  const answerTextarea = document.getElementById("answer");
  const charCountQuestion = document.getElementById("charCountQuestion");
  const charCountAnswer = document.getElementById("charCountAnswer");

  // Event listener for the form submit
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Read entered data from the form fields
    const question = questionTextarea.value.trim();
    const answer = answerTextarea.value.trim();
    const tag = document.getElementById("tag").value.trim();

    // Validate data (you can add more validation as needed)
    if (!question || !answer || !tag) {
      alert("Please fill out all fields.");
      return;
    }

    // Create a new card element
    const card = createCardElement(question, answer, tag);

    // Append the new card below the form
    form.insertAdjacentElement("afterend", card);

    // Reset form fields
    form.reset();
  });

  // Event listener for input changes in the question textarea
  questionTextarea.addEventListener("input", function () {
    updateCharCount(questionTextarea, charCountQuestion);
  });

  // Event listener for input changes in the answer textarea
  answerTextarea.addEventListener("input", function () {
    updateCharCount(answerTextarea, charCountAnswer);
  });
});

function createCardElement(question, answer, tag) {
  const card = document.createElement("section");
  card.classList.add("question-card");

  const questionElement = document.createElement("article");
  questionElement.classList.add("question");
  questionElement.innerHTML = `
      <h3 class="question-text">${question}</h3>
      <button class="answer-button" data-js="answer-button">Answer is:</button>
      <p class="answer">${answer}</p>
    `;

  const tagsElement = document.createElement("div");
  tagsElement.classList.add("hashtags-list");
  tagsElement.innerHTML = `
      <ul>
        <li class="hashtags">#${tag}</li>
      </ul>
    `;

  card.appendChild(questionElement);
  card.appendChild(tagsElement);

  return card;
}

function updateCharCount(textarea, charCountElement) {
  const maxLength = parseInt(textarea.getAttribute("maxlength"));
  const remainingChars = maxLength - textarea.value.length;
  charCountElement.textContent = `Characters left: ${remainingChars}`;
}
