function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputNumber: document.querySelector('[type="number"]'),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  boxesForDiv: document.querySelector('#boxes'),
};

const arreyDiv = [];

refs.createButton.addEventListener('click', addBoxes);

refs.destroyButton.addEventListener('click', destroyBoxes);

function addBoxes() {
  createBoxes(Number(refs.inputNumber.value));

  refs.boxesForDiv.insertAdjacentHTML('beforeend', arreyDiv);
  refs.inputNumber.value = '';
}

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    arreyDiv.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`
    );
    size += 10;
  }
  return arreyDiv.join('');
}

function destroyBoxes() {
  refs.boxesForDiv.innerHTML = '';
  refs.inputNumber.value = '';
}
