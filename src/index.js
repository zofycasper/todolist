import "./style.css";
import Section from "./Section";
import todayList from "./today";
import { newToDoForm, newToDoCancel } from "./new-to-do";
import thisWeekList from "./this-week";
import thisMonthList from "./this-month";
import allTasksList from "./all-tasks";

const body = document.querySelector("body");

const bodySection = new Section(body);

bodySection.create("div", "header");
bodySection.create("div", "sideBar");
bodySection.create("div", "main");
bodySection.create("div", "footer");
bodySection.update();

let activeSection = {
    // today on default
    today: 1,
    thisWeek: 0,
    thisMonth: 0,
    allTasks: 0,
};

const main = document.querySelector(".main");

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

export const newToDos = document.querySelector(".newToDos");
export const newProject = document.querySelector(".newProject");

newToDos.addEventListener("click", () => {
    main.textContent = "";
    main.appendChild(newToDoForm);
    newToDoCancel();
});

// For sidebar section
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

// toDoList section creation
toDoListSection.create("div", "today");
toDoListSection.create("div", "thisWeek");
toDoListSection.create("div", "thisMonth");
toDoListSection.create("div", "allTasks");
toDoListSection.update();

console.log(toDoListSection.elementList);

const toDoListButtons = toDoListSection.elementList;

toDoListButtons.forEach((button) => {
    button.addEventListener("click", () => {
        main.textContent = "";
        let buttonValue = button.innerText;
        active(buttonValue);
        console.log(activeSection);
    });
});

export function previousPage() {
    main.textContent = "";
    return activeSection.today == 1
        ? main.appendChild(todayList)
        : activeSection.thisWeek == 1
        ? main.appendChild(thisWeekList)
        : activeSection.thisMonth == 1
        ? main.appendChild(thisMonthList)
        : main.appendChild(allTasksList);
}

function active(buttonValue) {
    if (buttonValue == "today") {
        activeSection.today = 1;
        activeSection.thisWeek = 0;
        activeSection.thisMonth = 0;
        activeSection.allTasks = 0;
        main.appendChild(todayList);
    } else if (buttonValue == "thisWeek") {
        activeSection.today = 0;
        activeSection.thisWeek = 1;
        activeSection.thisMonth = 0;
        activeSection.allTasks = 0;
        main.appendChild(thisWeekList);
    } else if (buttonValue == "thisMonth") {
        activeSection.today = 0;
        activeSection.thisWeek = 0;
        activeSection.thisMonth = 1;
        activeSection.allTasks = 0;
        main.appendChild(thisMonthList);
    } else {
        activeSection.today = 0;
        activeSection.thisWeek = 0;
        activeSection.thisMonth = 0;
        activeSection.allTasks = 1;
        main.appendChild(allTasksList);
    }
}
console.log(toDoListButtons);
// Projects section creation
projectsSection.create("div", "default");
projectsSection.update();
