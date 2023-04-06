export const renderRating = (star, numberRating, imgPath) => {
    const doctorRatingElement = document.createElement('div');
    doctorRatingElement.classList.add('doctorRating');
    const starsElements = document.createElement('div');
    starsElements.classList.add('stars');
    for (let i = 0; i < star; i++) {
        starsElements.innerHTML += `<img src="${imgPath}star.png" alt="star">`;
    }
    for (let i = star; i < 5; i++) {
        starsElements.innerHTML += `<img src="${imgPath}star_white.png" alt="star">`;
    }
    doctorRatingElement.appendChild(starsElements);
    doctorRatingElement.innerHTML += `<h3>${numberRating}</h3>`;
    return doctorRatingElement;
};
