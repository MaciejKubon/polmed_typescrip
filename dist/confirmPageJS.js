import data from "./data/data_doctor.json" assert { type: "json" };
const link = location.href;
const information = link.split("?")[1];
const id = information.split("#")[0];
const visitDate = information.split("#")[1];
const typeOfVisit = information.split("#")[2].replace("_", " ");
const day = visitDate.split("T")[0];
const time = visitDate.split("T")[1];
const data_doctor = data.id[id];
const creatImageElement = document.querySelector('.leftSide');
creatImageElement.innerHTML = `<img src="../img/zdj/${data_doctor.img}" alt="${data_doctor.name}">`;
const creatInformationPanel = document.querySelector('.rightSide');
creatInformationPanel.innerHTML = `<h3>${data_doctor.name}</h3><h3>${data_doctor.addres}</h3>`;
creatInformationPanel.innerHTML += `<h3>${typeOfVisit}: ${data_doctor.price_of_visit[typeOfVisit]}zł</h3> `;
creatInformationPanel.innerHTML += `<h3>${time} ${day} </h3>`;
creatInformationPanel.innerHTML += `<h2>Płatność tylko gotówką</h2>`;
//obsługa przycisku anuluj
const cancelVisitButton = document.querySelector('.cancelVisit button');
cancelVisitButton.addEventListener("click", () => {
    const overlayElement = document.querySelector("#windowOverlay");
    const contentElement = document.querySelector(".windowContent");
    overlayElement.classList.add("opened");
    contentElement.classList.add("opened");
    const closeButton = document.querySelector(".windowClose");
    closeButton.addEventListener("click", () => {
        location.href = `../index.html`;
    });
});
