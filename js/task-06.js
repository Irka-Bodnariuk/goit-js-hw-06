const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputValueLength = event.target.value.length;
  const inputDataset = Number(event.target.dataset.length);

  if (inputValueLength === inputDataset) {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
  } else {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
  }
}
