const btnHex = document.getElementById("btnHex");
const colors=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F',];

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}

function createHexColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += colors[getRandomNumber()];
    }
    return hexColor
}

function applyColor() {
    document.body.style.backgroundColor = createHexColor()
    document.getElementById("colorText").innerHTML = createHexColor()
}

btnHex.addEventListener("click",applyColor)