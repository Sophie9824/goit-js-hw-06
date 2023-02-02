const ref =  {
    increment: document.querySelector('[data-action="increment"]'),
    decrement: document.querySelector('[data-action="decrement"]'),
    counter: document.querySelector('#value')

}

let counterValue = 0;


ref.decrement.addEventListener('click', function () {
    counterValue--;
    ref.counter.innerHTML = counterValue;
});

ref.increment.addEventListener('click', function () {
    counterValue++;
    ref.counter.innerHTML = counterValue;
});