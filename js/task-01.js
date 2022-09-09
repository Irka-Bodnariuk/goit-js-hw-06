'use strict';
const categoriesRef = document.querySelectorAll('.item');

console.log('Number of categories:', categoriesRef.length);

categoriesRef.forEach(item => {
  console.log('Category:', item.firstElementChild.textContent);

  const elementsInCategory = item.lastElementChild;

  console.log('Elements:', elementsInCategory.children.length);
});
