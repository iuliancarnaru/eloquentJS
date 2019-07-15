const starsArray = [
  "star-outline",
  "star-outline",
  "star-outline",
  "star-outline",
  "star-outline"
];


const rootElement = document.querySelector("#root");
const starFragment = document.createDocumentFragment();

starsArray.map((star, index) => {
  const icon = document.createElement("ion-icon");
  icon.setAttribute("name", star);
  icon.setAttribute("data-value", index + 1);
  icon.classList.add("star");
  starFragment.appendChild(icon);
});

rootElement.appendChild(starFragment);
const starArray = Array.from(document.querySelectorAll('.star'));

starArray.map(item => {
  item.addEventListener('click', () => {
    const newArray = starArray.slice(0, item.dataset.value - 1);
    console.log(newArray);
  });

  console.log(item);
});

