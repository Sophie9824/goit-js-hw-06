const ref = {
    input: document.querySelector('input#font-size-control'),
    text: document.querySelector('span#text'),
}

ref.input.addEventListener('input', function() {
    ref.text.style.fontSize = `${ref.input.value}px`
})