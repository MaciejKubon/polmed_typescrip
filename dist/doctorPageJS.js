import date from "./data/data_calender.json" assert { type: "json" };
import data from "./data/data_doctor.json" assert { type: "json" };
import { informationPanel } from "./helpers/informationPanel.js";
import { selectPanel } from "./helpers/selectPanel.js";
const link = location.href;
const id = link.split("?")[1].split("=")[1];
const doctorInformation = data.id[id];
const doctorCalender = date[id];
const noChoiceOfVisitType = () => {
    const overlayElement = document.querySelector("#windowOverlay");
    const contentElement = document.querySelector(".windowContent");
    overlayElement.classList.add("opened");
    contentElement.classList.add("opened");
    const closeButton = document.querySelector(".windowClose");
    const targetSelectElement = document.querySelector("#typeOfVisit");
    targetSelectElement.style.background = "red";
    closeButton.addEventListener("click", () => {
        overlayElement.classList.remove("opened");
        contentElement.classList.remove("opened");
    });
};
const selectionPanelElement = document.querySelector(".selectionPanel");
selectionPanelElement.appendChild(informationPanel(doctorInformation));
selectionPanelElement.appendChild(selectPanel(doctorInformation.type_of_visit, doctorInformation.price_of_visit, doctorCalender));
const clickButtonElement = document.querySelectorAll(".freeTerm");
clickButtonElement.forEach((element, index) => {
    element.addEventListener("click", () => {
        const targetSelectElement = document.querySelector("#typeOfVisit");
        const targetSelectValue = targetSelectElement.value;
        targetSelectValue != "-"
            ? (location.href = `./confirmPage.html?${id}#${element.value}#${targetSelectValue}`)
            : noChoiceOfVisitType();
    });
});
