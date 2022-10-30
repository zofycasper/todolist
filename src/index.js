import "./style.css";
import Section from "./Section";

const body = document.querySelector("body");

const bodySection = new Section(body);

bodySection.create("div", "header");
bodySection.create("div", "sideBar");
bodySection.create("div", "main");
bodySection.create("div", "footer");
bodySection.update();

const sideBar = document.querySelector(".sideBar");
sideBar.textContent = "";

const sideBarSection = new Section(sideBar);

sideBarSection.create("div", "toDoList");
sideBarSection.create("div", "projects");
sideBarSection.update();

console.log(sideBarSection);

// Create toDoList and projects sections
const toDoList = document.querySelector(".toDoList");
const projects = document.querySelector(".projects");

const toDoListSection = new Section(toDoList);
const projectsSection = new Section(projects);

console.log(toDoListSection);
console.log(projectsSection);

// Create header section
const header = document.querySelector(".header");
const headerSection = new Section(header);
console.log(headerSection);

// Header content
headerSection.create("button", "newToDos");
headerSection.create("button", "newProject");
headerSection.create("div", "searchArea");

headerSection.create("div", "signUp");
headerSection.create("div", "login");
headerSection.update();

// const header = document.createElement("div");
// const sideBar = document.createElement("div");
// const main = document.createElement("div");
// const footer = document.createElement("div");

// body.appendChild(header);
// header.classList.add
// body.appendChild(sideBar);
// body.appendChild(main);
// body.appendChild(footer);
