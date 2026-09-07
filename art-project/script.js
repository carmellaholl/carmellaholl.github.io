const btn = document.getElementById("fetchBtn");

// these things must happen upon button click, info not input before
const text = document.getElementById("answer-text");
const heading = document.getElementById("header");

// function formatInput(input){
//      for (let i = 0; i < input.length; i++) {
//         input[i] = input[i][0].toUpperCase() + input[i].slice(1);
//     }

//     return input;
// }

btn.addEventListener("click", async () => {
  // input handling
  const beginYearInput = document.getElementById("beginning-year-input");
  const endYearInput = document.getElementById("end-year-input");

  const begin = beginYearInput.value;
  const end = endYearInput.value;

  // change so that multiple options can be taken?
  // if checkbox = selected ...

  // randomizes qeury before request so that request may not need to be done twice
//   let metAPI =
//     "https://collectionapi.metmuseum.org/public/collection/v1.1/search" +
//     "?hasImages=true" +
//     "&dateBegin=" +
//     begin +
//     "&dateEnd=" +
//     end;


  let metAPI = "https://api.artic.edu/api/v1/artworks" + "?date_start=" + begin + "&date_end=" + end + "&limit=100";
  let request = await fetch(metAPI);
  let response = await request.json();
  console.log(response);
  const randomIndex = Math.floor(Math.random() * response.pagination.total);
  const randomAPI =
    "https://api.artic.edu/api/v1/artworks" +
    "?date_start=" +
    begin +
    "&dateEnd=" +
    end +
    "&offset=" +
    randomIndex +
    "&limit=1";
//console.log(randomAPI);
  request = await fetch(randomAPI);
  response = await request.json();
  console.log(response);
 // const artistName = response.artist_display;
  //const 
  //container.innerHTML = "<ul><li>Cheese</li><li>Tomato</li></ul>"; // Then, we set the innerHTML property of the container to a string. This string has to have all the markup necessary 
const artwork = response.data[0];

const randomImage = document.createElement("img");

randomImage.src =`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;

randomImage.alt = artwork.title;

container.appendChild(randomImage);
//   const objID = response.objectIDs[0]
//   const artistGET =
//     "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
//     objID;

//   request = await fetch(artistGET);
//   response = await request.json();
//   // final relevant ID
//     console.log(response);

//   console.log(response.artistDisplayName);

  if (request.ok) {
    

  //  heading.textContent = response.artistDisplayName + ":" + response.title ;
  } else {
    text.textContent = "Try another input!";
  }
});
