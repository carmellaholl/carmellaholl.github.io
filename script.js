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

    const sp = skills.querySelector("p");
    const lk = linkedin.querySelector("a");
    const op = objective.querySelector("p");
    if (sp) skills.removeChild(sp);
    if (lk) linkedin.removeChild(lk);
    if (op) objective.removeChild(op);
  }
});

const skillsPara = document.createElement("p");

skills.addEventListener("click", () => {
  const isOpen = skills.classList.toggle("github-open");
  skillsPara.classList.add("paraText");
  skillsPara.textContent =
    "Languages: Java | C | Javascript | HTML / CSS \r\n Tools: JUnit | Jest | Git | REST API";

  if (isOpen) {
    skills.appendChild(skillsPara);
  } else {
    setTimeout(() => {
      if (skillsPara.parentElement === skills) {
        skills.removeChild(skillsPara);
      }
    }, 70);
  }
});

const link = document.createElement("a");
link.setAttribute("href", "https://www.linkedin.com/in/carmellaholloway/");
link.textContent = "Connect with me on Linkedin";

linkedin.addEventListener("click", () => {
  const isOpen = linkedin.classList.toggle("linkedin-open");

  if (isOpen) {
    linkedin.appendChild(link);
  } else {
    setTimeout(() => {
      if (link.parentElement === linkedin) {
        linkedin.removeChild(link);
      }
    }, 70);
  }
});

const objecPara = document.createElement("p");
objecPara.classList.add("paraText");
objecPara.textContent =
  "Software developer focused on building impactful technology \r\n that solves real problems and improves lives.";

objective.addEventListener("click", () => {
  const isOpen = objective.classList.toggle("about-open");

  if (isOpen) {
    objective.appendChild(objecPara);
  } else {
    setTimeout(() => {
      if (objecPara.parentElement === objective) {
        objective.removeChild(objecPara);
      }
    }, 70);
  }
});
