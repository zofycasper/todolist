export default class Section {
    constructor(section) {
        this.section = section;
        this.elementList = [];
    }

    create(eleType, text) {
        const element = document.createElement(eleType);
        element.textContent = text;
        element.setAttribute("id", `${text}`);
        element.classList.add(`${text}`);
        this.elementList.push(element);
        return element;
    }
    append(element) {
        this.clear();
        this.section.appendChild(element);
        this.elementList.push(element);
        this.print();
    }
    update() {
        for (const element of this.elementList) {
            // console.log(element);

            this.section.appendChild(element);
        }
    }
    clear() {
        this.section.textContent = "";
    }

    print() {
        console.log(this.section);
    }
}
