const soda = document.getElementById('soda');
const cheese = document.getElementById('cheese');
const grapes = document.getElementById('grapes');
const bread = document.getElementById('bread');
const melon = document.getElementById('watermelon');
const btn = document.getElementById('randomPick');

function randomItem() {
    if (Math.ceil(Math.random() * 5) === 1) {
        return 'soda';
    } else if (Math.ceil(Math.random() * 5) === 2) {
        return 'cheese';
    } else if (Math.ceil(Math.random() * 5) === 3) {
        return 'grapes';
    } else if (Math.ceil(Math.random() * 5) === 4) {
        return 'bread';
    } else return 'watermelon';
    
}

soda.addEventListener('click', () => {
    soda.classList.toggle('picked');
});

cheese.addEventListener('click', () => {
    cheese.classList.toggle('picked');
});

grapes.addEventListener('click', () => {
    grapes.classList.toggle('picked');
});

bread.addEventListener('click', () => {
    bread.classList.toggle('picked');
});

melon.addEventListener('click', () => {
    melon.classList.toggle('picked');
});

btn.addEventListener('click', () => {
    document.getElementById(`${randomItem()}`).classList.add('picked');
});