const folder = document.querySelector(".folder");
const github = document.querySelector(".github");
const linkedin = document.querySelector(".linkedin");
const about = document.querySelector(".about");
let isToggled = false;
folder.addEventListener("click", () => {
    folder.classList.toggle("folder-open");
    if(!folder.classList.contains("folder-open")){
            github.classList.remove("github-open");
    linkedin.classList.remove("linkedin-open");
    about.classList.remove("about-open");
    }
})


github.addEventListener("click", () => {
    github.classList.toggle("github-open");
})


linkedin.addEventListener("click", () => {
    linkedin.classList.toggle("linkedin-open");
})


about.addEventListener("click", () => {
    about.classList.toggle("about-open");
})