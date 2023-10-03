function loadAuthors() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "books.json", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = xhr.responseText;
      const authors = document.getElementById("authors");
      const loadButton = document.getElementById("loadButton");

      const data = JSON.parse(response);

      authors.innerHTML = "";

      data.forEach(function (book) {
        const authorName = book.author;
        const listItem = document.createElement("li");
        listItem.textContent = authorName;
        authors.appendChild(listItem);
      });
      loadButton.style.display = "none";
    }
  };

  xhr.send();
}
