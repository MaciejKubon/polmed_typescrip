import date from "./data/data_calender.json" assert { type: "json" };
import data from "./data/data_doctor.json" assert { type: "json" };
import { doctorData } from "./types/types";
import { informationPanel } from "./helpers/informationPanel.js";
import { selectPanel } from "./helpers/selectPanel.js";
const link: string = location.href;
const id: string = link.split("?")[1].split("=")[1];
const doctorInformation: doctorData = data.id[id];
const doctorCalender: object = date[id];

const noChoiceOfVisitType = () => {
  const overlayElement: HTMLElement = document.querySelector("#windowOverlay");
  const contentElement: HTMLElement = document.querySelector(".windowContent");
  overlayElement.classList.add("opened");
  contentElement.classList.add("opened");
  const closeButton: HTMLButtonElement = document.querySelector(".windowClose");
  const targetSelectElement: HTMLSelectElement =
    document.querySelector("#typeOfVisit");
  targetSelectElement.style.background = "red";
  closeButton.addEventListener("click", () => {
    overlayElement.classList.remove("opened");
    contentElement.classList.remove("opened");
  });
};

const selectionPanelElement: HTMLElement =
  document.querySelector(".selectionPanel");
selectionPanelElement.appendChild(informationPanel(doctorInformation));
selectionPanelElement.appendChild(
  selectPanel(
    doctorInformation.type_of_visit,
    doctorInformation.price_of_visit,
    doctorCalender
  )
);
const clickButtonElement: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".freeTerm");
clickButtonElement.forEach((element, index) => {
  element.addEventListener("click", () => {
    const targetSelectElement: HTMLSelectElement =
      document.querySelector("#typeOfVisit");
    const targetSelectValue: String = targetSelectElement.value;

    targetSelectValue != "-"
      ? (location.href = `./confirmPage.html?${id}#${element.value}#${targetSelectValue.replace(" ","_")}`)
      : noChoiceOfVisitType();
  });
});
