function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  spanColor: document.querySelector('.color'),
  btnColor: document.querySelector('.change-color'),
};

refs.btnColor.addEventListener('click', onchangeBodyColor);

function onchangeBodyColor() {
  refs.spanColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = refs.spanColor.textContent;
}
