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

Array.from(document.querySelectorAll('.star')).map(icon => {
  icon.addEventListener('click', () => {
    console.log(icon.dataset.value);
  })
});

