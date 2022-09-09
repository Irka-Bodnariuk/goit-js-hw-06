const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish',
};
// Change code below this line

const child = Object.create(parent);

// Change code above this line
child.name = 'Jason';
child.age = 27;
console.log(parent.hasOwnProperty('surname'));
console.log(child.hasOwnProperty('name'));
console.log(child.hasOwnProperty('surname'));
console.log(parent.isPrototypeOf(child));
