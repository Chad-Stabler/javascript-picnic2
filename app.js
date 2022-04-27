const soda = document.getElementById('soda');
const cheese = document.getElementById('cheese');
const grapes = document.getElementById('grapes');

soda.addEventListener('click', () => {
    soda.classList.toggle('picked');
});

cheese.addEventListener('click', () => {
    cheese.classList.toggle('picked');
});

grapes.addEventListener('click', () => {
    grapes.classList.toggle('picked');
});