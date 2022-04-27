const soda = document.getElementById('soda');
const cheese = document.getElementById('cheese');

soda.addEventListener('click', () => {
    soda.classList.toggle('picked');
});

cheese.addEventListener('click', () => {
    cheese.classList.toggle('picked');
});