const mousePosTrack = document.getElementById('mousePosTrack');

document.addEventListener("mousemove", () => {
    const x = event.clientX;
    const y = event.clientY;

    mousePosTrack.textContent = `X: ${x} / Y: ${y}`;
})
