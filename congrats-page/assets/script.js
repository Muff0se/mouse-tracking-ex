const blocker = document.querySelector('.blocker');
const titleH3 = document.getElementById('titleH3');
const leaveButton = document.getElementById('leaveButton');

blocker.addEventListener('animationend', () => {
    blocker.remove();
    titleH3.style.animation = 'slideIn 1s forwards';
    titleH3.style.animationDelay = '0.5s'
})

titleH3.addEventListener('animationend', () => {
    leaveButton.style.animation = 'slideIn 1s forwards';
})

function redirectToNyanCat () {
    window.open('https://youtu.be/2yJgwwDcgV8');
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
