const starsArray = new Array(5).fill("*");

const rootDiv = document.querySelector("#root");

starsArray.map((star, index) => {
  const starElement = document.createElement("div");
  starElement.innerHTML = `<ion-icon name="star-outline"></ion-icon>`;
  starElement.classList.add("star");
  starElement.setAttribute("data-value", `${index + 1}`)
  rootDiv.appendChild(starElement);
});

const allStars = document.querySelectorAll(".star");
const result = document.createElement('p');
rootDiv.appendChild(result);

Array.from(allStars).map(star => {
  star.addEventListener('click', () => {
    result.innerHTML = `${star.dataset.value}`;
  })
})



