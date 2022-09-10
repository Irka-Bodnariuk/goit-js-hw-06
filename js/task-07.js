const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.input.addEventListener('input', onChangeText);

function onChangeText(event) {
  refs.text.style.fontSize = `${event.target.value}px`;
}
