const btn = document.getElementById("fetchBtn");
const container = document.getElementById("container");
const resultContainer = document.getElementById("result");
const responseBox = document.getElementById("response");

const headerText = document.getElementById("header-text");
const option1 = document.getElementById("option-1");
const option2 = document.getElementById("option-2");
const option3 = document.getElementById("option-3");
const option4 = document.getElementById("option-4");
const selectedOptions = [];

function deleteBtns() {
  option1.remove();
  option2.remove();
  option3.remove();
  option4.remove();
  btn.remove();
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

  url = url + "&fields=*,availability&limit=40";
  return url;
}

runQuiz();
//Post-Quiz
btn.addEventListener("click", async function () {
     // resultContainer.style.visibility = "visible";

  deleteBtns();
  if (selectedOptions.length == 0) {
    console.log("pick an option");
    return;
  }
  
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
    console.log(booksWithCovers);
    // Pick a random book
    const randomIndex = Math.floor(Math.random() * booksWithCovers.length);

    const book = booksWithCovers[randomIndex];
    console.log(book);
    console.log("Random book:", book);

// const booksWithCovers = response.docs.filter((book) => book.cover_i);
//     if (booksWithCovers.length === 0) {
//       console.log("No books with covers found.");
//       return;
//     }
//     console.log(booksWithCovers);
    // Pick a random book

//     const randomIndex = Math.floor(Math.random() * response.numFound);
    
//          const uri = buildURL(url) + "&offset=" + randomIndex; 
//       const requestN = await fetch(uri, options);
//   const responseN = await requestN.json();
//   console.log(uri);
//   console.log(response);
//     const book = responseN[0];
    console.log(book);
    console.log("Random book:", book);

///////// revamp how book details are output
///////// one option: create divs and classes that populate after but exist in the html pre-formatted
///////// then set these values to those classes




/// add author photo https://openlibrary.org/dev/docs/api/covers





    // Create book title
    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = book.title;

    // Create author
    const author = document.createElement("p");
        author.classList.add("author");

    author.textContent = `Author: ${book.author_name ? book.author_name.join(", ") : "Unknown"}`;

    // Create publication year
    const year = document.createElement("p");
            year.classList.add("year");

    year.textContent = `First published: ${book.first_publish_year || "Unknown"}`;

    // Create cover image
    const cover = document.createElement("img");

    cover.src = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;

    cover.alt = `Book cover for ${book.title}`;
    cover.classList.add("cover");
    // Clear previous result
    const oldResult = document.getElementById("book-result");

    if (oldResult) {
      oldResult.remove();
    }

    headerText.textContent = "Your book vibe is:";
    // Create result container
    // const result = document.createElement("div");
    // result.id = "book-result";

    responseBox.appendChild(title);
    responseBox.appendChild(author);
    responseBox.appendChild(year);
    responseBox.appendChild(cover);
    //responseBox.appendChild(result);

   // container.appendChild(result);
  } catch (error) {
    console.error("Error fetching book:", error);
  }
});
