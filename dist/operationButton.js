//Obsługa przycisku rozwijania
const expandCalender = [
    {
        // from
        opacity: 0,
        height: "0px",
    },
    {
        // to
        opacity: 0,
        height: "480px",
    },
    {
        opacity: 1,
    },
];
const moreTermButton = document.querySelector("#moreTerm");
let pressBool = false;
moreTermButton.addEventListener("click", (event) => {
    const hoverButtonElement = document.querySelectorAll(".day div");
    hoverButtonElement.forEach((element) => {
        if (!pressBool) {
            element.animate(expandCalender, 1000);
            element.style.setProperty("display", "block");
        }
        else {
            element.style.setProperty("display", "none");
        }
    });
    pressBool
        ? (moreTermButton.innerHTML = "Rozwiń")
        : (moreTermButton.innerHTML = "Zwiń");
    pressBool = !pressBool;
});
//Obsługa wyboru rodzaju wizyty
const price_of_visit = {
    "-": "-",
    "wizyta kontrolna": 180,
    konsultacja: 200,
    choroba: 240,
    "wypisanie recepty": 80,
    szczepienie: 210,
};
