import Section from "./Section";
import { previousPage } from ".";

export const newToDoForm = document.createElement("div");
newToDoForm.classList.add("newToDoForm");

const newToDoFormSection = new Section(newToDoForm);
newToDoFormSection.create("div", "newToDoTitle");
newToDoFormSection.create("div", "newToDoContent");
newToDoFormSection.create("div", "dueDate");
newToDoFormSection.create("div", "priority");

newToDoFormSection.create("button", "newToDoConfirm");
newToDoFormSection.create("button", "newToDoCancel");
newToDoFormSection.update();

export function newToDoCancel() {
    const newToDoCancel = document.querySelector(".newToDoCancel");
    newToDoCancel.addEventListener("click", () => {
        previousPage();
    });
}

// console.log(newToDoCancel);
