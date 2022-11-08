const prev = document.querySelector('.controlprev');
const next = document.querySelector('.controlnext');
const slider = document.querySelector('.slider');

prev.addEventListener('click', () => {
    slider.scrollLeft -= 300;
})

next.addEventListener('click', () => {
    slider.scrollLeft += 300;
})
