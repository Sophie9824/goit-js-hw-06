const refs = {
    input: document.querySelector('input#name-input'),
    output: document.querySelector('span#name-output')
}

const Default_Value = 'Anonymous';

refs.input.addEventListener('input', function onInputChange(event) {
    refs.output.textContent = event.currentTarget.value === '' ? Default_Value : event.currentTarget.value
})