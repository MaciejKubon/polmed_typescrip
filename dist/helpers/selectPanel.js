import { calenderRender } from "./calenderRender.js";
const expandCalender = [
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
const typeOfVisit = (visitTypes, visitPrice) => {
    const targetSelectionElement = document.createElement("div");
    targetSelectionElement.classList.add("targetSelection");
    const targetSelectElement = document.createElement("div");
    targetSelectElement.classList.add("targetSelect");
    targetSelectElement.innerHTML = `<label for="typeOfVisit">Wybierz cel wizyty:</label>`;
    const selectElement = document.createElement("select");
    selectElement.id = "typeOfVisit";
    selectElement.name = "typeVisit";
    visitTypes.forEach((element) => {
        const option = document.createElement("option");
        option.value = `${element}`;
        option.innerHTML = `${element}`;
        selectElement.appendChild(option);
    });
    targetSelectElement.appendChild(selectElement);
    targetSelectionElement.appendChild(targetSelectElement);
    //Cena
    const priceElement = document.createElement("div");
    priceElement.classList.add("price");
    priceElement.innerHTML = `<h3>Cena: </h3><h3 id="price">-</h3>`;
    targetSelectionElement.appendChild(priceElement);
    selectElement.addEventListener("change", (element) => {
        selectElement.style.background = "white";
        const priceElement = document.querySelector("#price");
        if (selectElement.value == "-")
            priceElement.innerHTML = "-";
        else
            priceElement.innerHTML = `${visitPrice[selectElement.value]} zł`;
    });
    return targetSelectionElement;
};
export const selectPanel = (visitTypes, visitPrice, date) => {
    const selectPanelElement = document.createElement("div");
    selectPanelElement.classList.add("selectPanel");
    const doctorAppointmentElement = document.createElement("div");
    doctorAppointmentElement.classList.add("doctorAppointment");
    //Wybór wizyty
    doctorAppointmentElement.appendChild(typeOfVisit(visitTypes, visitPrice));
    //Kalendarz
    const timeSelectionElement = document.createElement("div");
    timeSelectionElement.classList.add("timeSelection");
    doctorAppointmentElement.appendChild(timeSelectionElement);
    timeSelectionElement.innerHTML = `<h3>Data wizyty:</h3>`;
    const calenderBoxElement = document.createElement("div");
    calenderBoxElement.classList.add("calenderBox");
    timeSelectionElement.appendChild(calenderBoxElement);
    //Tworzenie strzałek
    const leftArrowElement = document.createElement("button");
    leftArrowElement.classList.add("arrow");
    leftArrowElement.innerHTML = "&lt";
    calenderBoxElement.appendChild(leftArrowElement);
    const rightArrowSmallScreenElement = document.createElement("button");
    rightArrowSmallScreenElement.classList.add("arrow");
    rightArrowSmallScreenElement.innerHTML = "&gt";
    rightArrowSmallScreenElement.id = "smallScreen";
    calenderBoxElement.appendChild(rightArrowSmallScreenElement);
    calenderBoxElement.appendChild(calenderRender(date));
    const rightArrowBigScreenElement = document.createElement("button");
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
    const moreTermButton = document.createElement("button");
    moreTermButton.id = "moreTerm";
    moreTermButton.innerHTML = "Rozwiń";
    timeSelectionElement.appendChild(moreTermButton);
    let pressBool = false;
    moreTermButton.addEventListener("click", (event) => {
        const hoverButtonElement = document.querySelectorAll(".day div");
        hoverButtonElement.forEach((element) => {
            if (!pressBool) {
                element.animate(expandCalender, 1000);
                element.style.setProperty("display", "block");
            }
            else {
                element.style.setProperty("display", "none");
            }
        });
        pressBool
            ? (moreTermButton.innerHTML = "Rozwiń")
            : (moreTermButton.innerHTML = "Zwiń");
        pressBool = !pressBool;
    });
    //Przewijanie kalendarza
    let weekNumber = 1;
    leftArrowElement.style.setProperty("opacity", "0.3");
    leftArrowElement.style.setProperty("cursor", "default");
    rightArrowBigScreenElement.addEventListener("click", () => {
        if (weekNumber < 5) {
            const weekElement = document.querySelector(`#week${weekNumber}`);
            weekElement.style.setProperty("display", "none");
            weekNumber++;
            const nextWeekElement = document.querySelector(`#week${weekNumber}`);
            nextWeekElement.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
            nextWeekElement.style.setProperty("display", "flex");
        }
        if (weekNumber == 5) {
            rightArrowBigScreenElement.style.setProperty("opacity", "0.3");
            rightArrowBigScreenElement.style.setProperty("cursor", "default");
            rightArrowSmallScreenElement.style.setProperty("opacity", "0.3");
            rightArrowSmallScreenElement.style.setProperty("cursor", "default");
        }
        else {
            rightArrowBigScreenElement.style.setProperty("opacity", "1");
            rightArrowSmallScreenElement.style.setProperty("opacity", "1");
        }
        leftArrowElement.style.setProperty("opacity", "1");
        leftArrowElement.style.setProperty("cursor", "pointer");
    });
    rightArrowSmallScreenElement.addEventListener("click", () => {
        if (weekNumber < 5) {
            const weekElement = document.querySelector(`#week${weekNumber}`);
            weekElement.style.setProperty("display", "none");
            weekNumber++;
            const nextWeekElement = document.querySelector(`#week${weekNumber}`);
            nextWeekElement.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
            nextWeekElement.style.setProperty("display", "flex");
        }
        if (weekNumber == 5) {
            rightArrowSmallScreenElement.style.setProperty("opacity", "0.3");
            rightArrowSmallScreenElement.style.setProperty("cursor", "default");
            rightArrowBigScreenElement.style.setProperty("opacity", "0.3");
            rightArrowBigScreenElement.style.setProperty("cursor", "default");
        }
        else {
            rightArrowSmallScreenElement.style.setProperty("opacity", "1");
            rightArrowBigScreenElement.style.setProperty("opacity", "1");
        }
        leftArrowElement.style.setProperty("opacity", "1");
        leftArrowElement.style.setProperty("cursor", "pointer");
    });
    leftArrowElement.addEventListener("click", () => {
        if (weekNumber > 1) {
            const weekElement = document.querySelector(`#week${weekNumber}`);
            weekElement.style.setProperty("display", "none");
            weekNumber--;
            const nextWeekElement = document.querySelector(`#week${weekNumber}`);
            nextWeekElement.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
            nextWeekElement.style.setProperty("display", "flex");
        }
        if (weekNumber == 1) {
            leftArrowElement.style.setProperty("opacity", "0.3");
            leftArrowElement.style.setProperty("cursor", "default");
        }
        else {
            leftArrowElement.style.setProperty("opacity", "1");
        }
        rightArrowSmallScreenElement.style.setProperty("opacity", "1");
        rightArrowSmallScreenElement.style.setProperty("cursor", "pointer");
        rightArrowBigScreenElement.style.setProperty("opacity", "1");
        rightArrowBigScreenElement.style.setProperty("cursor", "pointer");
    });
    return selectPanelElement;
};
