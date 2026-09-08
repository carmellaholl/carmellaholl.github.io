const btn = document.getElementById("fetchBtn");
const container = document.getElementById("container");
const resultContainer = document.getElementById("result");

const headerText = document.getElementById("header-text");
const option1 = document.getElementById("option-1");
const option2 = document.getElementById("option-2");
const option3 = document.getElementById("option-3");
const option4 = document.getElementById("option-4");
const selectedOptions = [];

function hideBtns(btn) {
  option1.style.visibility = "hidden";
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
}

function toggleBtn(btn) {
  const choice = btn.value;

  if (btn.classList.contains("quiz-option-selected")) {
    // Button was selected, so deselect it
    btn.classList.remove("quiz-option-selected");
    btn.classList.add("quiz-option");

    const index = selectedOptions.indexOf(choice);
    if (index > -1) {
      selectedOptions.splice(index, 1);
    }
  } else {
    // Button was not selected, so select it
    btn.classList.remove("quiz-option");
    btn.classList.add("quiz-option-selected");

    selectedOptions.push(btn.value);
  }
}

let finalURL = "";
// quiz
function runQuiz() {
  // drama
  option1.addEventListener("click", () => {
    toggleBtn(option1);
    console.log(selectedOptions);
    finalURL = buildURL(url);
  });

  // romance
  option2.addEventListener("click", () => {
    toggleBtn(option2);
    console.log(selectedOptions);
    finalURL = buildURL(url);
  });

  option3.addEventListener("click", () => {
    toggleBtn(option3);

    console.log(selectedOptions);
    finalURL = buildURL(url);
  });

  option4.addEventListener("click", () => {
    toggleBtn(option4);

    console.log(selectedOptions);
    finalURL = buildURL(url);
  });

  // finalURL = buildURL(url);
  // console.log(finalURL);
}

let url = "https://openlibrary.org/search.json?q=";
function buildURL(url) {
  for (let i = 0; i < selectedOptions.length; i++) {
    if (i < selectedOptions.length - 1) {
      url = url + "subject:" + selectedOptions[i] + " AND ";
    } else {
      url = url + "subject:" + selectedOptions[i];
    }
  }

  url = url + "&fields=*,availability&limit=10";
  return url;
}

runQuiz();
//Post-Quiz
btn.addEventListener("click", async function () {
      resultContainer.style.visibility = "visible";

  hideBtns();
  if (selectedOptions.length == 0) {
    console.log("pick an option");
    return;
  }
  //  finalURL = buildURL(url);
  // console.log(finalURL);

  //    const url =
  //       `https://openlibrary.org/search.json` +
  //       `?q=subject:mystery AND subject:adventure` +
  //       `&fields=*,availability` +
  //       `&limit=100`;
  //       console.log(url);
  //   const url =
  //     `https://openlibrary.org/search.json` +
  //     `?q=subject:${selectedOptions[0]} AND subject:adventure` +
  //     `&fields=*,availability` +
  //     `&limit=100`;
  const headers = new Headers({
    "User-Agent": "book-explorer/1.0 (catfingers36@gmail.com)",
  });
  const options = {
    method: "GET",
    headers: headers,
  };

  console.log(finalURL);
  const request = await fetch(finalURL, options);
  const response = await request.json();

  console.log(response);
  try {
    // Only keep books that actually have a cover
    const booksWithCovers = response.docs.filter((book) => book.cover_i);
    if (booksWithCovers.length === 0) {
      console.log("No books with covers found.");
      return;
    }

    // Pick a random book
    const randomIndex = Math.floor(Math.random() * booksWithCovers.length);

    const book = booksWithCovers[randomIndex];
    console.log(book);
    console.log("Random book:", book);

    // Create book title
    const title = document.createElement("h2");
    title.textContent = book.title;

    // Create author
    const author = document.createElement("p");
    author.textContent = `Author: ${book.author_name ? book.author_name.join(", ") : "Unknown"}`;

    // Create publication year
    const year = document.createElement("p");
    year.textContent = `First published: ${book.first_publish_year || "Unknown"}`;

    // Create cover image
    const cover = document.createElement("img");

    cover.src = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;

    cover.alt = `Book cover for ${book.title}`;

    // Clear previous result
    const oldResult = document.getElementById("book-result");

    if (oldResult) {
      oldResult.remove();
    }

    headerText.textContent = "Your book vibe is:";
    // Create result container
    const result = document.createElement("div");
    result.id = "book-result";

    result.appendChild(title);
    result.appendChild(author);
    result.appendChild(year);
    result.appendChild(cover);

    container.appendChild(result);
  } catch (error) {
    console.error("Error fetching book:", error);
  }
});
