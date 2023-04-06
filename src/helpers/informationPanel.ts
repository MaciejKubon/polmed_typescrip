import { doctorData } from "../types/types";
import { renderRating } from "./ratingCreate.js";

export const informationPanel = (doctorData: doctorData) => {
  const informationPanelElement: HTMLElement = document.createElement("div");
  informationPanelElement.classList.add("informationPanel");
  const basicInformationElement: HTMLElement = document.createElement("div");
  basicInformationElement.classList.add("basicInformation");
  informationPanelElement.appendChild(basicInformationElement);
  //Create a photo
  const doctorPhotoElement: HTMLElement = document.createElement("div");
  doctorPhotoElement.classList.add("doctorPhoto");
  doctorPhotoElement.innerHTML = `<img src="../img/zdj/${doctorData.img}" alt="${doctorData.name}">`;
  basicInformationElement.appendChild(doctorPhotoElement);
  //Create a docotr data
  const doctorDataElement: HTMLElement = document.createElement("div");
  doctorDataElement.classList.add("doctorInformation");
  doctorDataElement.innerHTML = `<h2>${doctorData.name}</h2> 
  <h5>${doctorData.type}</h5>`;
  basicInformationElement.appendChild(doctorDataElement);
  //Creat a docotr rating
  doctorDataElement.appendChild(
    renderRating(doctorData.rating, doctorData.number_of_ratings)
  );

  //Create message button
  doctorDataElement.innerHTML += `<div class="sendMsgButton"><button>Wyślij wiadomość</button></div>`;

  //create div more information
  const moreInformationElement:HTMLElement = document.createElement('div');
  moreInformationElement.classList.add('moreInformation');
  moreInformationElement.innerHTML=`<div class="doctorAddres"><h3>Adres:</h3><h3>${doctorData.addres}</h3></div>`;
  moreInformationElement.innerHTML+=`<div class="doctorPhoneNumber"><h3>Numer telefonu:</h3><h3>${doctorData.phone_number}</h3></div>`;
  moreInformationElement.innerHTML+=`<div class="description"><p>${doctorData.doctor_description}</p></div>`;
  informationPanelElement.appendChild(moreInformationElement);
  return informationPanelElement;
};
