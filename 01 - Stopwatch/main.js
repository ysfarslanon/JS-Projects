let miliSeconds = 0
let seconds = 0
let minutes = 0

let miliSecondsDOM = document.getElementById("miliSeconds")
let secondsDOM = document.getElementById("seconds")
let minutesDOM = document.getElementById("minutes")

let buttonStart = document.getElementById("button-start")
let buttonStop = document.getElementById("button-stop")
let buttonReset = document.getElementById("button-reset")

let interval

function startTimer() {
    miliSeconds++

    miliSeconds < 9
                ? miliSecondsDOM.innerHTML = "0"+ miliSeconds
                : miliSecondsDOM.innerHTML = miliSeconds

    if(miliSeconds > 99){
        seconds++
        miliSeconds = 0
        secondsDOM.innerHTML = "0" + seconds
        miliSecondsDOM.innerHTML = "0" + miliSeconds
    }

    seconds > 9
            ? secondsDOM.innerHTML = seconds
            : secondsDOM.innerHTML = "0" + seconds

    if (seconds > 59) {
        minutes++
        seconds = 0
        secondsDOM.innerHTML = "0" + seconds
        minutesDOM.innerHTML = "0" + minutes
    }
}
buttonStart.onclick = function () {
    interval = setInterval(startTimer,10)
}

buttonStop.onclick = function () {
    clearInterval(interval)
}

buttonReset.onclick = function(){
    clearInterval(interval)
    miliSeconds = "00"
    seconds = "00"
    minutes = "00"
    secondsDOM.innerHTML = seconds
    miliSecondsDOM.innerHTML = miliSeconds
    minutesDOM.innerHTML = minutes
}