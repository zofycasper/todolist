import Section from "./Section";
import { newToDos, newProject } from ".";

const todayList = document.createElement("div");
todayList.classList.add("todayList");

const todayListSection = new Section(todayList);
todayListSection.create("div", "todayListTitle");
todayListSection.create("div", "todayListContent");
todayListSection.update();

const todayListContent = document.querySelector(".todayListContent");
const todayListContentSection = new Section(todayListContent);

export default todayList;
