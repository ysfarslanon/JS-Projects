const btnHex = document.getElementById("btnHex");
const btnRgb = document.getElementById("btnRgb");
const colors=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F',];

function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit)
}

function createHexColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += colors[getRandomNumber(colors.length)];
    }
    return hexColor
}

function applyHexColor() {
    document.body.style.backgroundColor = createHexColor()
    document.getElementById("colorText").innerHTML = createHexColor()
}

btnHex.addEventListener("click",applyHexColor)

function createRgbColor() {
    let rgbColor = "RGB("
    for (let i = 0; i < 3; i++) {
        if(i===2){
            rgbColor += `${(getRandomNumber(256)).toString()})`
        }else{
            rgbColor += `${(getRandomNumber(256)).toString()},`
        }
    }
    return rgbColor
}

function applyRgbColor() {
    document.body.style.backgroundColor = createRgbColor()
    document.getElementById("colorText").innerHTML = createRgbColor()
}
btnRgb.addEventListener("click",applyRgbColor)