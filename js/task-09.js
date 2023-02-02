function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeButton = document.querySelector('button.change-color');
const textColor = document.querySelector('span.color');
console.log(changeButton)


changeButton.addEventListener('click', function() {
  const colorBg = getRandomHexColor();
  document.body.style.background = colorBg;
  textColor.textContent = colorBg;
})
