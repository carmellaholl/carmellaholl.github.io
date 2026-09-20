const folder = document.querySelector(".folder");
const skills = document.querySelector(".skills");
const linkedin = document.querySelector(".linkedin");
const objective = document.querySelector(".about");
const whoEats = document.querySelector(".wEw");
const sas = document.querySelector(".sas");

folder.addEventListener("click", () => {
  folder.classList.toggle("folder-open");
  if (!folder.classList.contains("folder-open")) {
    skills.classList.remove("skills-open");
    linkedin.classList.remove("linkedin-open");
    objective.classList.remove("about-open");
    whoEats.classList.remove("wEw-open");
    sas.classList.remove("sas-open");

    const sp = skills.querySelector("p");
    const lk = linkedin.querySelector("a");
    const op = objective.querySelector("p");
    const wh = whoEats.querySelector("p");
    const whA = whoEats.querySelector("a");
    const sasP = sas.querySelector("p");
    const sasA = sas.querySelector("a");

    if (sp) skills.removeChild(sp);
    if (lk) linkedin.removeChild(lk);
    if (op) objective.removeChild(op);
    if (wh) whoEats.removeChild(wh);
    if (whA) whoEats.removeChild(whA);
    if (sasP) sas.removeChild(sasP);
    if (sasA) sas.removeChild(sasA);
  }
});

const skillsPara = document.createElement("p");

skills.addEventListener("click", () => {
  const isOpen = skills.classList.toggle("skills-open");
  skillsPara.classList.add("paraText");
  skillsPara.textContent =
    "Languages: Java, C, Javascript, HTML / CSS \r\n Tools: JUnit, Jest, Git, REST API";

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

const wEwPara = document.createElement("p");
wEwPara.classList.add("whoEatsText");
wEwPara.textContent =
  "Transformed cluttered scientific data into intuitive, explorable\r\nvisualizations to support ecological research.";

const weBtn = document.createElement("a");
weBtn.classList.add("whoEatsBtn");
weBtn.setAttribute("href", "whw.html");
weBtn.textContent = "Learn More";

whoEats.addEventListener("click", () => {
  const isOpen = whoEats.classList.toggle("wEw-open");

  if (isOpen) {
    whoEats.appendChild(weBtn);
    whoEats.appendChild(wEwPara);
  } else {
    setTimeout(() => {
      if (wEwPara.parentElement === whoEats) {
        if (wEwPara) whoEats.removeChild(wEwPara);
        if (weBtn) whoEats.removeChild(weBtn);
      }
    }, 70);
  }
});

const sasPara = document.createElement("p");
sasPara.classList.add("sasText");
sasPara.textContent =
  "Improved reliability, accessibility, and global usability of a healthcare\r\nanalytics platform used for data-driven workflows.";

const sasBtn = document.createElement("a");
sasBtn.classList.add("sasBtn");
sasBtn.setAttribute("href", "whw.html");
sasBtn.textContent = "Learn More";

sas.addEventListener("click", () => {
  const isOpen = sas.classList.toggle("sas-open");

  if (isOpen) {
    sas.appendChild(sasPara);
    sas.appendChild(sasBtn);
  } else {
    setTimeout(() => {
      if (sasPara.parentElement === sas) {
        sas.removeChild(sasPara);
        if (sasBtn) sas.removeChild(sasBtn);
      }
    }, 70);
  }
});
