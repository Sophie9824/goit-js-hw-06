const categoriesList = document.querySelector('ul#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');





console.log(`Number of categories: `, categoryItems.length)

categoryItems.forEach(item => {
    const textValue = item.querySelector('h2').textContent
    const itemsNumber = item.querySelectorAll(`li`).length
    console.log(`Category: `, textValue); 
    console.log(`Elements: `, itemsNumber);
})