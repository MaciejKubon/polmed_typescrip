const today_data = new Date();
const doba = 86400000;
let day_name = [];
let day_data = [];
const day_of_the_week = ["Pn", "Wt", "Śr", "Czw", "Pt"];
const NumberMonth = (NumMonth) => {
    let tekst = "";
    if (NumMonth < 10)
        tekst = "0" + NumMonth;
    else
        tekst = NumMonth.toString();
    return tekst;
};
export const timeSection = (date) => {
    // const timeSectionElement:HTMLElement = document.createElement('div');
    // timeSectionElement.classList.add('timeSection');
    // timeSectionElement.innerHTML=`<h3>Data wizyty:</h3>`;
    // const calenderBoxElement:HTMLElement = document.createElement('div');
    // calenderBoxElement.classList.add('calenderBox');
    // timeSectionElement.appendChild(calenderBoxElement);
    // //Tworzenie strzałek
    // calenderBoxElement.innerHTML=`<div class="arrow"><button>&lt</button></div>`;
    // calenderBoxElement.innerHTML+=`<div class="arrow" id="smallScreen"><button>&gt</button></div>`;
    // //Kalendarz 
    // const calnederElement:HTMLElement = document.createElement('div');
    // calnederElement.classList.add('calender');
    // calenderBoxElement.appendChild(calnederElement);
    // calnederElement.appendChild(renderCalender('zaq1'));
    // calenderBoxElement.innerHTML+=`<div class="arrow" id="bigScreen"><button>&gt</button></div>`;
    // return timeSectionElement;
};
