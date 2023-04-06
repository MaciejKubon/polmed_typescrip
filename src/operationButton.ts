//Obsługa przycisku rozwijania

const expandCalender: {
  opacity: number;
  height?: string;
}[] = [
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

const moreTermButton: HTMLElement = document.querySelector("#moreTerm");
let pressBool: Boolean = false;
moreTermButton.addEventListener("click", (event) => {
  const hoverButtonElement: NodeListOf<Element> =
    document.querySelectorAll(".day div");
  hoverButtonElement.forEach((element: HTMLElement) => {
    if (!pressBool) {
      element.animate(expandCalender, 1000);
      element.style.setProperty("display","block");
    } else {
      element.style.setProperty("display","none");
    }
  });
  pressBool
    ? (moreTermButton.innerHTML = "Rozwiń")
    : (moreTermButton.innerHTML = "Zwiń");
  pressBool = !pressBool;
});

