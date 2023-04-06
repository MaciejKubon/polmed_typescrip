import data from "./data/data_doctor.json" assert { type: "json" };
import {doctorData} from "./types/types"
const link: string = location.href;
const information:string = link.split("?")[1];
const id:string=information.split("#")[0];
const visitDate:string = information.split("#")[1];
const typeOfVisit:string = information.split("#")[2].replace("_", " ");
const day:string=visitDate.split("T")[0];
const time:string=visitDate.split("T")[1];
const data_doctor:doctorData = data.id[id];

const creatImageElement:HTMLElement = document.querySelector('.leftSide');
creatImageElement.innerHTML=`<img src="../img/zdj/${data_doctor.img}" alt="${data_doctor.name}">`

const creatInformationPanel:HTMLElement = document.querySelector('.rightSide');
creatInformationPanel.innerHTML=`<h3>${data_doctor.name}</h3><h3>${data_doctor.addres}</h3>`;
creatInformationPanel.innerHTML+=`<h3>${typeOfVisit}: ${data_doctor.price_of_visit[typeOfVisit]}zł</h3> `;
creatInformationPanel.innerHTML+=`<h3>${time} ${day} </h3>`;
creatInformationPanel.innerHTML+=`<h2>Płatność tylko gotówką</h2>`;


//obsługa przycisku anuluj

const cancelVisitButton:HTMLButtonElement = document.querySelector('.cancelVisit button');
cancelVisitButton.addEventListener("click",()=>{
    const overlayElement: HTMLElement = document.querySelector("#windowOverlay");
    const contentElement: HTMLElement = document.querySelector(".windowContent");
    overlayElement.classList.add("opened");
    contentElement.classList.add("opened");
    const closeButton: HTMLButtonElement = document.querySelector(".windowClose");
    closeButton.addEventListener("click", () => {
      location.href=`../index.html`
    });
})



