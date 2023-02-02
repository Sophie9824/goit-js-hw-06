const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const itemsList = document.querySelector('ul#ingredients');

ingredients.forEach(item => {
  const li = document.createElement('li');
  li.className = "item"
  itemsList.appendChild(li);

  li.innerHTML += item
});