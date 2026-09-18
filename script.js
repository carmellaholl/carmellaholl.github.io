const folder = document.querySelector(".folder");
const skills = document.querySelector(".github");
const linkedin = document.querySelector(".linkedin");
const objective = document.querySelector(".about");
folder.addEventListener("click", () => {
  folder.classList.toggle("folder-open");
  if (!folder.classList.contains("folder-open")) {
    skills.classList.remove("github-open");
    linkedin.classList.remove("linkedin-open");
    objective.classList.remove("about-open");
  }
});

const skillsPara = document.createElement("p");

skills.addEventListener("click", () => {
  skills.classList.toggle("github-open");
  skillsPara.textContent = "Java | HTML / CSS | Javascript | C";
  if (skillsPara.parentElement == skills) {
    console.log(skills.childNodes);
    skills.removeChild(skillsPara);
    return;
  }
  skills.appendChild(skillsPara);
});

linkedin.addEventListener("click", () => {
  linkedin.classList.toggle("linkedin-open");
});

const objecPara = document.createElement("p");

objective.addEventListener("click", () => {
  objective.classList.toggle("about-open");
  objecPara.textContent = "Develop products with a positive impact";
  if (objecPara.parentElement == objective) {
    console.log(objective.childNodes);
    objective.removeChild(objecPara);
    return;
  }
  objective.appendChild(objecPara);
});
