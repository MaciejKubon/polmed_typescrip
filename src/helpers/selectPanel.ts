import { price } from "../types/types";
import { calenderRender } from "./calenderRender.js";
const expandCalender: {
  opacity: number;
  height?: string;
}[] = [
  {
    // from
    opacity: 0,
    height: "0px",
  },
  {
    // to
    opacity: 0,
    height: "480px",
  },
  {
    opacity: 1,
  },
];
const typeOfVisit = (visitTypes: String[], visitPrice: price) => {
  const targetSelectionElement: HTMLElement = document.createElement("div");
  targetSelectionElement.classList.add("targetSelection");
  const targetSelectElement: HTMLElement = document.createElement("div");
  targetSelectElement.classList.add("targetSelect");
  targetSelectElement.innerHTML = `<label for="typeOfVisit">Wybierz cel wizyty:</label>`;
  const selectElement: HTMLSelectElement = document.createElement("select");
  selectElement.id = "typeOfVisit";
  selectElement.name = "typeVisit";
  visitTypes.forEach((element) => {
    const option: HTMLOptionElement = document.createElement("option");
    option.value = `${element}`;
    option.innerHTML = `${element}`;

    selectElement.appendChild(option);
  });
  targetSelectElement.appendChild(selectElement);
  targetSelectionElement.appendChild(targetSelectElement);
  //Cena
  const priceElement: HTMLElement = document.createElement("div");
  priceElement.classList.add("price");
  priceElement.innerHTML = `<h3>Cena: </h3><h3 id="price">-</h3>`;
  targetSelectionElement.appendChild(priceElement);

  selectElement.addEventListener("change", (element) => {
    const priceElement: HTMLElement = document.querySelector("#price");
    if (selectElement.value == "-") priceElement.innerHTML = "-";
    else priceElement.innerHTML = `${visitPrice[selectElement.value]} zł`;
  });
  return targetSelectionElement;
};

export const selectPanel = (
  visitTypes: String[],
  visitPrice: price,
  date: object
) => {
  const selectPanelElement: HTMLElement = document.createElement("div");
  selectPanelElement.classList.add("selectPanel");
  const doctorAppointmentElement: HTMLElement = document.createElement("div");
  doctorAppointmentElement.classList.add("doctorAppointment");
  //Wybór wizyty
  doctorAppointmentElement.appendChild(typeOfVisit(visitTypes, visitPrice));

  //Kalendarz
  const timeSelectionElement: HTMLElement = document.createElement("div");
  timeSelectionElement.classList.add("timeSelection");
  doctorAppointmentElement.appendChild(timeSelectionElement);
  timeSelectionElement.innerHTML = `<h3>Data wizyty:</h3>`;
  const calenderBoxElement: HTMLElement = document.createElement("div");
  calenderBoxElement.classList.add("calenderBox");
  timeSelectionElement.appendChild(calenderBoxElement);
  //Tworzenie strzałek
  const leftArrowElement: HTMLButtonElement = document.createElement("button");
  leftArrowElement.classList.add("arrow");
  leftArrowElement.innerHTML = "&lt";
  calenderBoxElement.appendChild(leftArrowElement);
  const rightArrowSmallScreenElement: HTMLButtonElement =
    document.createElement("button");
  rightArrowSmallScreenElement.classList.add("arrow");
  rightArrowSmallScreenElement.innerHTML = "&gt";
  rightArrowSmallScreenElement.id = "smallScreen";
  calenderBoxElement.appendChild(rightArrowSmallScreenElement);

  calenderBoxElement.appendChild(calenderRender(date));
  const rightArrowBigScreenElement: HTMLElement =
    document.createElement("button");
  rightArrowBigScreenElement.classList.add("arrow");
  rightArrowBigScreenElement.id = "bigScreen";
  rightArrowBigScreenElement.innerHTML = "&gt";
  calenderBoxElement.appendChild(rightArrowBigScreenElement);

  selectPanelElement.appendChild(doctorAppointmentElement);
  //

  leftArrowElement.addEventListener("click", () => {
    console.log(leftArrowElement.value);
  });

  //Rozwijanie kalendarza
  const moreTermButton: HTMLButtonElement = document.createElement("button");
  moreTermButton.id = "moreTerm";
  moreTermButton.innerHTML = "Rozwiń";
  timeSelectionElement.appendChild(moreTermButton);
  let pressBool: Boolean = false;
  moreTermButton.addEventListener("click", (event) => {
    const hoverButtonElement: NodeListOf<Element> =
      document.querySelectorAll(".day div");
    hoverButtonElement.forEach((element: HTMLElement) => {
      if (!pressBool) {
        element.animate(expandCalender, 1000);
        element.style.setProperty("display", "block");
      } else {
        element.style.setProperty("display", "none");
      }
    });
    pressBool
      ? (moreTermButton.innerHTML = "Rozwiń")
      : (moreTermButton.innerHTML = "Zwiń");
    pressBool = !pressBool;
  });

  //Przewijanie kalendarza

  let weekNumber: number = 1;
  leftArrowElement.style.setProperty("opacity", "0.3");
  leftArrowElement.style.setProperty("cursor", "default");
  rightArrowBigScreenElement.addEventListener("click", () => {
    if (weekNumber < 5) {
      const weekElement: HTMLElement = document.querySelector(
        `#week${weekNumber}`
      );
      weekElement.style.setProperty("display", "none");
      weekNumber++;
      const nextWeekElement: HTMLElement = document.querySelector(
        `#week${weekNumber}`
      );
      nextWeekElement.style.setProperty("display", "flex");
    }
    if (weekNumber == 5) {
      rightArrowBigScreenElement.style.setProperty("opacity", "0.3");
      rightArrowBigScreenElement.style.setProperty("cursor", "default");
      rightArrowSmallScreenElement.style.setProperty("opacity", "0.3");
      rightArrowSmallScreenElement.style.setProperty("cursor", "default");
    } else {
      rightArrowBigScreenElement.style.setProperty("opacity", "1");
      rightArrowSmallScreenElement.style.setProperty("opacity", "1");
    }
    leftArrowElement.style.setProperty("opacity", "1");
    leftArrowElement.style.setProperty("cursor", "pointer");

  });
  rightArrowSmallScreenElement.addEventListener("click", () => {
    if (weekNumber < 5) {
      const weekElement: HTMLElement = document.querySelector(
        `#week${weekNumber}`
      );
      weekElement.style.setProperty("display", "none");
      weekNumber++;
      const nextWeekElement: HTMLElement = document.querySelector(
        `#week${weekNumber}`
      );
      nextWeekElement.style.setProperty("display", "flex");
    }
    if (weekNumber == 5) {
      rightArrowSmallScreenElement.style.setProperty("opacity", "0.3");
      rightArrowSmallScreenElement.style.setProperty("cursor", "default");
      rightArrowBigScreenElement.style.setProperty("opacity", "0.3");
      rightArrowBigScreenElement.style.setProperty("cursor", "default");
    } else {
      rightArrowSmallScreenElement.style.setProperty("opacity", "1");
      rightArrowBigScreenElement.style.setProperty("opacity", "1");
    }
    leftArrowElement.style.setProperty("opacity", "1");
    leftArrowElement.style.setProperty("cursor", "pointer");
  });
  leftArrowElement.addEventListener("click", () => {
    if (weekNumber > 1) {
      const weekElement: HTMLElement = document.querySelector(
        `#week${weekNumber}`
      );
      weekElement.style.setProperty("display", "none");
      weekNumber--;
      const nextWeekElement: HTMLElement = document.querySelector(
        `#week${weekNumber}`
      );
      nextWeekElement.style.setProperty("display", "flex");
    }
    if(weekNumber==1){
        leftArrowElement.style.setProperty("opacity", "0.3");
        leftArrowElement.style.setProperty("cursor", "default");
    }
    else{
        leftArrowElement.style.setProperty("opacity", "1");
    }
    rightArrowSmallScreenElement.style.setProperty("opacity", "1");
    rightArrowSmallScreenElement.style.setProperty("cursor", "pointer");
    rightArrowBigScreenElement.style.setProperty("opacity", "1");
    rightArrowBigScreenElement.style.setProperty("cursor", "pointer");
  });

  return selectPanelElement;
};
