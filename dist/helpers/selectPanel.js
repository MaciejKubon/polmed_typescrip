import { calenderRender } from "./calenderRender.js";
const typeOfVisit = (visitTypes, visitPrice) => {
    const targetSelectionElement = document.createElement('div');
    targetSelectionElement.classList.add('targetSelection');
    const targetSelectElement = document.createElement('div');
    targetSelectElement.classList.add('targetSelect');
    targetSelectElement.innerHTML = `<label for="typeOfVisit">Wybierz cel wizyty:</label>`;
    const selectElement = document.createElement('select');
    selectElement.id = "typeOfVisit";
    selectElement.name = "typeVisit";
    visitTypes.forEach(element => {
        const option = document.createElement('option');
        option.value = `${element}`;
        option.innerHTML = `${element}`;
        selectElement.appendChild(option);
    });
    targetSelectElement.appendChild(selectElement);
    targetSelectionElement.appendChild(targetSelectElement);
    //Cena
    const priceElement = document.createElement('div');
    priceElement.classList.add('price');
    priceElement.innerHTML = `<h3>Cena: </h3><h3 id="price">-</h3>`;
    targetSelectionElement.appendChild(priceElement);
    selectElement.addEventListener("change", (element) => {
        const priceElement = document.querySelector("#price");
        if (selectElement.value == "-")
            priceElement.innerHTML = "-";
        else
            priceElement.innerHTML = `${visitPrice[selectElement.value]} zł`;
    });
    return targetSelectionElement;
};
export const selectPanel = (visitTypes, visitPrice, date) => {
    const selectPanelElement = document.createElement('div');
    selectPanelElement.classList.add('selectPanel');
    const doctorAppointmentElement = document.createElement('div');
    doctorAppointmentElement.classList.add('doctorAppointment');
    //Wybór wizyty
    doctorAppointmentElement.appendChild(typeOfVisit(visitTypes, visitPrice));
    //Kalendarz
    const timeSelectionElement = document.createElement('div');
    timeSelectionElement.classList.add('timeSelection');
    doctorAppointmentElement.appendChild(timeSelectionElement);
    timeSelectionElement.innerHTML = `<h3>Data wizyty:</h3>`;
    const calenderBoxElement = document.createElement('div');
    calenderBoxElement.classList.add('calenderBox');
    timeSelectionElement.appendChild(calenderBoxElement);
    //Tworzenie strzałek
    calenderBoxElement.innerHTML = `<div class="arrow"><button>&lt</button></div>`;
    calenderBoxElement.innerHTML += `<div class="arrow" id="smallScreen"><button>&gt</button></div>`;
    calenderBoxElement.appendChild(calenderRender(date));
    calenderBoxElement.innerHTML += `<div class="arrow" id="bigScreen"><button>&gt</button></div>`;
    timeSelectionElement.innerHTML += `<button id="moreTerm">Rozwiń</button>`;
    selectPanelElement.appendChild(doctorAppointmentElement);
    return selectPanelElement;
};
