const refs = {
  buttonDecrement: document.querySelector('[data-action="decrement"]'),
  buttonIncrement: document.querySelector('[data-action="increment"]'),
  valueSpan: document.querySelector('#value'),
};

let counterValue = 0;

const handleClickDecrement = () => {
  counterValue -= 1;
  refs.valueSpan.textContent = counterValue;
};

const handleClickIncrement = () => {
  counterValue += 1;
  refs.valueSpan.textContent = counterValue;
};

refs.buttonDecrement.addEventListener('click', handleClickDecrement);

refs.buttonIncrement.addEventListener('click', handleClickIncrement);
