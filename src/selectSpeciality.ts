const data= await fetch("../dist/data/setOfSpeciality.json").then((data) => data.json());

import {dataDoctor} from "./types/types";
import {render} from "./creatDoctorCard.js";



const listOfSpeciality: string[] = data.listOfSpeciality;

const creatNavSpeciality = () => {
  const navElement: HTMLElement = document.querySelector("nav");
  listOfSpeciality.forEach((elemnt, i) => {
    const buttonElement: HTMLButtonElement = document.createElement("button");
    buttonElement.classList.add("choiceOfSpecialitiesButton");
    buttonElement.innerHTML = elemnt;
    if (i == 0) 
    {
        buttonElement.classList.add("activeBtn");
        const listOfDoctor: dataDoctor[] = data.listOfDoctor[data.listOfSpeciality[i]];
        render(listOfDoctor);
    }
    navElement.appendChild(buttonElement);
    buttonElement.addEventListener("click", () => {
      const buttonActiveElement: HTMLButtonElement =
        document.querySelector(".activeBtn");
      buttonActiveElement.classList.remove("activeBtn");
      buttonElement.classList.add("activeBtn");
      const listOfDoctor: dataDoctor[] = data.listOfDoctor[data.listOfSpeciality[i]];
      render(listOfDoctor);
    });
  });
  const activeElement: HTMLButtonElement = document.querySelector("#activeBtn");
};

creatNavSpeciality();

