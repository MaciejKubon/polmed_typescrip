const headerElement: HTMLElement = document.querySelector('header');
let previousScrollTop:number;
let isScrolling:boolean;

const hasScrolled = () => {
  const scrollTop:number = window.scrollY;
  if (scrollTop > previousScrollTop && scrollTop >50) {
    headerElement.classList.add('nav--up');
  } else {
    headerElement.classList.remove('nav--up');
  }

  previousScrollTop = scrollTop;
};

document.addEventListener('scroll', () => {isScrolling = true});

setInterval(() => {
  if (isScrolling) {
    hasScrolled();
    isScrolling = false;
  }
}, 100);