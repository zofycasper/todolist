import Section from "./Section";
import { newToDos, newProject } from ".";

const thisWeekList = document.createElement("div");
thisWeekList.classList.add("thisWeekList");

const thisWeekListSection = new Section(thisWeekList);
thisWeekListSection.create("div", "thisWeekListTitle");
thisWeekListSection.create("div", "thisWeekListContent");
thisWeekListSection.update();

const thisWeekListContent = document.querySelector(".thisWeekListContent");
const thisWeekListContentSection = new Section(thisWeekListContent);

export default thisWeekList;
