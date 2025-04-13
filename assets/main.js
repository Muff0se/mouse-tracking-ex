const mousePosTrack = document.getElementById('mousePosTrack');
const cathMeButton = document.getElementById("cathMeButton");

cathMeButton.addEventListener("mouseenter", () => {
    randomButtonPosition();
})

document.addEventListener("mousemove", () => {
    const x = event.clientX;
    const y = event.clientY;

    mousePosTrack.textContent = `X: ${x} / Y: ${y}`;
})

function randomButtonPosition () {
    const btnWidth = cathMeButton.offsetWidth;
    const btnHeight = cathMeButton.offsetHeight;

    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    const left = Math.floor(Math.random() * maxX);
    const top = Math.floor(Math.random() * maxY);

    cathMeButton.style.left = left + 'px';
    cathMeButton.style.top = top + 'px';
}

