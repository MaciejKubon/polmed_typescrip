import {dataDoctor} from "./types/types"
import { renderRating } from "./ratingCreate.js"
import { renderCalender } from "./renderCalender.js";

const mainElement: HTMLElement = document.querySelector('.physicianSelectionPanel');

export const render = (doctorList: dataDoctor[]) => {
    mainElement.innerHTML="";
    doctorList.forEach(element => {
        //Create doctor Card
        const doctorCardElement: HTMLElement = document.createElement('div');
        doctorCardElement.classList.add('doctorCard');
        //Create a photo
        const doctorPhotoElement: HTMLElement = document.createElement('div');
        doctorPhotoElement.classList.add('doctorPhoto');
        doctorPhotoElement.innerHTML=`<img src="${element.img}" alt="${element.name}">`;
        doctorCardElement.appendChild(doctorPhotoElement);
        //Create a docotr data
        const doctorDataElement: HTMLElement = document.createElement('div');
        doctorDataElement.classList.add('doctorData');
        doctorDataElement.innerHTML=`<h2>${element.name}</h2> 
        <h5>${element.type}</h5>`;
        //Creat a docotr rating
        doctorDataElement.appendChild(renderRating(element.rating,element.number_of_ratings));
        //Creat a doctor calender
        doctorDataElement.appendChild(renderCalender(element.id));
        doctorCardElement.appendChild(doctorDataElement);
        mainElement.appendChild(doctorCardElement);
    });
}