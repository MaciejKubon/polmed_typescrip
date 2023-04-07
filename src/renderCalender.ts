
const data = await fetch("./dist/data/data_calender.json").then((data) => data.json());


const today_data: Date = new Date();
const doba:number = 86400000;
let day_name: string[] = [];
let day_data: string[] = [];
const day_of_the_week: string[] = ["Pn", "Wt", "Śr", "Czw", "Pt"];

const NumberMonth = (NumMonth: number) => {
  let tekst: string = "";
  if (NumMonth < 10) tekst = "0" + NumMonth;
  else tekst = NumMonth.toString();

  return tekst;
};

export const renderCalender = (index: string) => {

  let time: number = today_data.getTime();
  const smallCalenderElement: HTMLElement = document.createElement("div");
  smallCalenderElement.classList.add("smallCalender");
  smallCalenderElement.id = index;
  for (let i: number = 0; i < 5; i++) {
    let dzien: Date = new Date(time);
    if (dzien.getDay() != 0 && dzien.getDay() != 6) {
      day_data[i] =
        dzien.getDate() + "." + NumberMonth(Number(dzien.getMonth()) + 1);
      time = time + doba;
    } else if (dzien.getDay() == 0) {
      dzien = new Date(time + doba);
      day_data[i] =
        dzien.getDate() + "." + NumberMonth(Number(dzien.getMonth()) + 1);
      time = time + 2 * doba;
    } else {
      dzien = new Date(time + 2 * doba);
      day_data[i] =
        dzien.getDate() + "." + NumberMonth(Number(dzien.getMonth()) + 1);
      time = time + 3 * doba;
    }
    if (i == 0) {
      if (today_data.getDay() == dzien.getDay()) day_name[0] = "Dziś";
      else if (today_data.getDay() == dzien.getDay()) day_name[0] = "Jutro";
      else day_name[0] = day_of_the_week[dzien.getDay() - 1];
    } else if (i == 1) {
      if (today_data.getDay() == dzien.getDay() - 1) day_name[1] = "Jutro";
      else day_name[1] = day_of_the_week[dzien.getDay() - 1];
    } else day_name[i] = day_of_the_week[dzien.getDay() - 1];
    const dayElement: HTMLElement = document.createElement("div");
    dayElement.classList.add("day");
    const dayNameElement: HTMLElement = document.createElement("div");
    dayNameElement.classList.add("dayName");
    dayNameElement.innerHTML = `<h5>${day_name[i]}</h5><h6>${day_data[i]}</h6>`;
    const dayDataElement: HTMLElement = document.createElement("div");
    dayDataElement.classList.add("dayData");
    const calender = data[index];
    const dayTimmer:string[] = calender[day_data[i]];
    let godzina: string;

    for (let j: number = 0; j < 4; j++) {
      godzina = dayTimmer[j];
      if (godzina == "-")
        dayDataElement.innerHTML += '<button class="emptyTerm">-</button>';
      else if (godzina.length > 5)
        dayDataElement.innerHTML +=
          '<button class="bookedTerm">' + godzina.slice(0, -1) + "</button>";
      else
        dayDataElement.innerHTML +=
          `<button class="freeTerm" name=${index}>` + godzina + "</button>";
    }
    dayElement.appendChild(dayNameElement);
    dayElement.appendChild(dayDataElement);

    smallCalenderElement.appendChild(dayElement);
  }

  return smallCalenderElement;
};
