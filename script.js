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
  if (skillsPara.parentElement === skills) {
    setTimeout(() => {
      skills.removeChild(skillsPara);
    }, 100);
    return;
  }

  skills.appendChild(skillsPara);
});

//         <a href="https://www.linkedin.com/in/carmellaholloway/">Connect with me on Linkedin</a>

const link = document.createElement("a");

linkedin.addEventListener("click", () => {
  linkedin.classList.toggle("linkedin-open");
  link.setAttribute("href", "https://www.linkedin.com/in/carmellaholloway/");
  link.textContent = "Connect with me on Linkedin";

   if (link.parentElement === linkedin) {
    setTimeout(() => {
      linkedin.removeChild(link);
    }, 100);
    return;
  }

  linkedin.appendChild(link);

});

const objecPara = document.createElement("p");

objective.addEventListener("click", () => {
  objective.classList.toggle("about-open");
  objecPara.textContent = "Develop products with a positive impact";
  if (objecPara.parentElement === objective) {
   setTimeout(() => {
    objective.removeChild(objecPara);
    }, 100);
    return;
  }
  objective.appendChild(objecPara);
});
