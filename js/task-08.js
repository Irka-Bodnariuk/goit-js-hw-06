const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.target;

  if (email.value === '' || password.value === '') {
    alert('Всі поля повинні бути заповнені!');
    return;
  }

  const userData = {
    email: email.value,
    password: password.value,
  };

  console.log(userData);

  event.target.reset();
}
