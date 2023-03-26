import { renderRating } from "./ratingCreate.js";
import { renderCalender } from "./renderCalender.js";
const mainElement = document.querySelector('.physicianSelectionPanel');
export const render = (doctorList) => {
    mainElement.innerHTML = "";
    doctorList.forEach(element => {
        //Create doctor Card
        const doctorCardElement = document.createElement('div');
        doctorCardElement.classList.add('doctorCard');
        //Create a photo
        const doctorPhotoElement = document.createElement('div');
        doctorPhotoElement.classList.add('doctorPhoto');
        doctorPhotoElement.innerHTML = `<img src="${element.img}" alt="${element.name}">`;
        doctorCardElement.appendChild(doctorPhotoElement);
        //Create a docotr data
        const doctorDataElement = document.createElement('div');
        doctorDataElement.classList.add('doctorData');
        doctorDataElement.innerHTML = `<h2>${element.name}</h2> 
        <h5>${element.type}</h5>`;
        //Creat a docotr rating
        doctorDataElement.appendChild(renderRating(element.rating, element.number_of_ratings));
        //Creat a doctor calender
        doctorDataElement.appendChild(renderCalender(element.id));
        doctorCardElement.appendChild(doctorDataElement);
        mainElement.appendChild(doctorCardElement);
    });
};
