const today_data: Date = new Date();
const doba: number = 86400000;
let day_name: string[] = [];
let day_data: string[] = [];
const day_of_the_week: string[] = ["Pn", "Wt", "Śr", "Czw", "Pt"];

const NumberMonth = (NumMonth: number) => {
  let tekst: string = "";
  if (NumMonth < 10) tekst = "0" + NumMonth;
  else tekst = NumMonth.toString();

  return tekst;
};

export const calenderRender = (date: object) => {
  let time: number = today_data.getTime();
  const calnederElement: HTMLElement = document.createElement("div");
  calnederElement.classList.add("calender");
  for (let weekNumber: number = 1; weekNumber < 6; weekNumber++) {
    const weekElement: HTMLElement = document.createElement("div");
    weekElement.classList.add("week");

    if (weekNumber != 1) {
      weekElement.style.setProperty("display", "none");
    }
    for (let i = 0; i < 5; i++) {
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
      if (weekNumber == 1) {
        if (i == 0) {
          if (today_data.getDay() == dzien.getDay()) day_name[0] = "Dziś";
          else if (today_data.getDay() == dzien.getDay()) day_name[0] = "Jutro";
          else day_name[0] = day_of_the_week[dzien.getDay() - 1];
        } else if (i == 1) {
          if (today_data.getDay() == dzien.getDay() - 1) day_name[1] = "Jutro";
          else day_name[1] = day_of_the_week[dzien.getDay() - 1];
        } else day_name[i] = day_of_the_week[dzien.getDay() - 1];
      } else day_name[i] = day_of_the_week[dzien.getDay() - 1];

      const dayElement: HTMLElement = document.createElement("div");
      dayElement.classList.add("day");
      weekElement.appendChild(dayElement);
      dayElement.innerHTML = `<h3>${day_name[i]}</h3><h3>${day_data[i]}</h3>`;
      const dayTimmer:string[] = date[day_data[i]];
      let godzina: string;

    for (let j: number = 0; j < 6; j++) {
      godzina = dayTimmer[j];
      if (godzina == "-")
        dayElement.innerHTML += '<button class="emptyTerm">-</button>';
      else if (godzina.length > 5)
        dayElement.innerHTML +=
          '<button class="bookedTerm">' + godzina.slice(0, -1) + "</button>";
      else
        dayElement.innerHTML +=
          `<button class="freeTerm">` + godzina + "</button>";
    }
    const hoverButtonElement:HTMLElement = document.createElement('div');
    hoverButtonElement.classList.add('hoverButton');
    hoverButtonElement.style.setProperty("display", "none");
    for (let j: number = 6; j < 18; j++) {
        godzina = dayTimmer[j];
        if (godzina == "-")
          hoverButtonElement.innerHTML += '<button class="emptyTerm">-</button>';
        else if (godzina.length > 5)
          hoverButtonElement.innerHTML +=
            '<button class="bookedTerm">' + godzina.slice(0, -1) + "</button>";
        else
          hoverButtonElement.innerHTML +=
            `<button class="freeTerm">` + godzina + "</button>";
      }

    dayElement.appendChild(hoverButtonElement);
      
    }
    calnederElement.appendChild(weekElement);
  }

  return calnederElement;
};
