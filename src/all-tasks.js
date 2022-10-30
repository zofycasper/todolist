import Section from "./Section";
import { newToDos, newProject } from ".";

const allTasksList = document.createElement("div");
allTasksList.classList.add("allTasksList");

const allTasksListSection = new Section(allTasksList);
allTasksListSection.create("div", "allTasksListTitle");
allTasksListSection.create("div", "allTasksListContent");
allTasksListSection.update();

const allTasksListContent = document.querySelector(".allTasksListContent");
const allTasksListContentSection = new Section(allTasksListContent);

export default allTasksList;
