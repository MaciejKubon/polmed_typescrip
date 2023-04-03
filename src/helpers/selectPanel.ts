import {price} from "../types/types"
import { calenderRender } from "./calenderRender.js";


const typeOfVisit = (visitTypes:String[]) =>{
    const targetSelectElement:HTMLElement= document.createElement('div');
    targetSelectElement.classList.add('targetSelect');
    targetSelectElement.innerHTML=`<label for="typeOfVisit">Wybierz cel wizyty:</label>`;
    const selectElement:HTMLSelectElement = document.createElement('select');
    selectElement.id="typeOfVisit";
    selectElement.name="typeVisit";
    visitTypes.forEach(element => {
        const option:HTMLOptionElement = document.createElement('option');
        option.value=`${element}`;
        option.innerHTML=`${element}`;

        selectElement.appendChild(option);  
    });
    targetSelectElement.appendChild(selectElement);

    return targetSelectElement;


}

export const selectPanel=(visitTypes:String[], visitPrice: price, date:object)=>{
    const selectPanelElement:HTMLElement = document.createElement('div');
    selectPanelElement.classList.add('selectPanel');
    const doctorAppointmentElement:HTMLElement = document.createElement('div');
    doctorAppointmentElement.classList.add('doctorAppointment');
    //Wybór wizyty
    const targetSelectElement:HTMLElement = document.createElement('div');
    targetSelectElement.classList.add('targetSelection');
    targetSelectElement.appendChild(typeOfVisit(visitTypes));
    doctorAppointmentElement.appendChild(targetSelectElement);
    //Cena
    const priceElement:HTMLElement = document.createElement('div');
    priceElement.classList.add('price');
    priceElement.innerHTML=`<h3>Cena: </h3><h3 id="price">-</h3>`;
    targetSelectElement.appendChild(priceElement);
    //Kalendarz
    const timeSelectionElement:HTMLElement = document.createElement('div');
    timeSelectionElement.classList.add('timeSelection');
    doctorAppointmentElement.appendChild(timeSelectionElement);
    timeSelectionElement.innerHTML=`<h3>Data wizyty:</h3>`;
    const calenderBoxElement:HTMLElement = document.createElement('div');
    calenderBoxElement.classList.add('calenderBox');
    timeSelectionElement.appendChild(calenderBoxElement);
    //Tworzenie strzałek
    calenderBoxElement.innerHTML=`<div class="arrow"><button>&lt</button></div>`;
    calenderBoxElement.innerHTML+=`<div class="arrow" id="smallScreen"><button>&gt</button></div>`;
    calenderBoxElement.appendChild(calenderRender(date));
    calenderBoxElement.innerHTML+=`<div class="arrow" id="bigScreen"><button>&gt</button></div>`;
    timeSelectionElement.innerHTML+=`<button id="moreTerm">Rozwiń</button>`;

    selectPanelElement.appendChild(doctorAppointmentElement);

    return selectPanelElement;
}