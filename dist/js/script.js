/* Card */

const example = document.querySelector('.examples');
const card = document.querySelector('.examples__card');
const image = document.querySelector('.examples__img');
const text = document.querySelector('.examples__text');

card.addEventListener('mouseenter', function() {
    example.classList.add('active')
});

card.addEventListener('mouseleave', function() {
    example.classList.remove('active')
});