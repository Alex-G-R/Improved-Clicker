export function getRandomPosition() {
    const winWidth = window.innerWidth - 70;
    const winHeight = window.innerHeight - 70;
    const randomX = Math.floor(Math.random() * winWidth);
    const randomY = Math.floor(Math.random() * winHeight);
    return { x: randomX, y: randomY};
}

export function hideYellowSquare() {
    const yellowSquare = document.getElementById("yellow-square");
    yellowSquare.style.display = "none";
}