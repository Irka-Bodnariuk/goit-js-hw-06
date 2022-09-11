function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputNumber: document.querySelector('[type="number"]'),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  boxesForDiv: document.querySelector('#boxes'),
};

let arreyDiv = '';
let size = 30;

refs.createButton.addEventListener('click', addBoxes);

refs.destroyButton.addEventListener('click', destroyBoxes);

function addBoxes() {
  createBoxes(Number(refs.inputNumber.value));

  refs.boxesForDiv.insertAdjacentHTML('beforeend', arreyDiv);
  refs.inputNumber.value = ''; //очистка інпута
}

function createBoxes(amount) {
  arreyDiv = '';
  for (let i = 0; i < amount; i += 1) {
    arreyDiv += `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    size += 10;
  }
  return arreyDiv;
}

function destroyBoxes() {
  size = 30;
  arreyDiv = '';
  refs.boxesForDiv.innerHTML = '';
  refs.inputNumber.value = '';
}
