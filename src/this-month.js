import Section from "./Section";
import { newToDos, newProject } from ".";

const thisMonthList = document.createElement("div");
thisMonthList.classList.add("thisMonthList");

const thisMonthListSection = new Section(thisMonthList);
thisMonthListSection.create("div", "thisMonthListTitle");
thisMonthListSection.create("div", "thisMonthListContent");
thisMonthListSection.update();

const thisMonthListContent = document.querySelector(".thisMonthListContent");
const thisMonthListContentSection = new Section(thisMonthListContent);

export default thisMonthList;
