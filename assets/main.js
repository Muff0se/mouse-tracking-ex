const mousePosTrack = document.getElementById('mousePosTrack');
const cathMeButton = document.getElementById("cathMeButton");

cathMeButton.addEventListener("mouseenter", () => {
    randomButtonPosition(0, 1075, 0, 703);
})

document.addEventListener("mousemove", () => {
    const x = event.clientX;
    const y = event.clientY;

    mousePosTrack.textContent = `X: ${x} / Y: ${y}`;
})

function randomButtonPosition (minX, maxX, minY, maxY) {
    let left = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    let top = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    cathMeButton.style.left = left + 'px';
    cathMeButton.style.top = top + 'px';
}

