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
