import data from "./data/setOfSpeciality.json" assert { type: "json" };
import { render } from "./creatDoctorCard.js";
const listOfSpeciality = data.listOfSpeciality;
const creatNavSpeciality = () => {
    const navElement = document.querySelector("nav");
    listOfSpeciality.forEach((elemnt, i) => {
        const buttonElement = document.createElement("button");
        buttonElement.classList.add("choiceOfSpecialitiesButton");
        buttonElement.innerHTML = elemnt;
        if (i == 0) {
            buttonElement.classList.add("activeBtn");
            const listOfDoctor = data.listOfDoctor[data.listOfSpeciality[i]];
            render(listOfDoctor);
        }
        navElement.appendChild(buttonElement);
        buttonElement.addEventListener("click", () => {
            const buttonActiveElement = document.querySelector(".activeBtn");
            buttonActiveElement.classList.remove("activeBtn");
            buttonElement.classList.add("activeBtn");
            const listOfDoctor = data.listOfDoctor[data.listOfSpeciality[i]];
            render(listOfDoctor);
        });
    });
    const activeElement = document.querySelector("#activeBtn");
};
creatNavSpeciality();
