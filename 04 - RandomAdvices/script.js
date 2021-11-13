let adviceText = document.getElementById("adviceText")
getAdvice()

function getAdvice() {

     fetch("https://api.adviceslip.com/advice")
    .then(res=>res.json())
    .then(data => {
        adviceText.innerHTML = data.slip.advice
    })
}