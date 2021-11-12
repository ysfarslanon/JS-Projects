// elements
const dog = document.querySelector("#dog")
const btnRandomDog = document.querySelector("#btnRandomDog")
const cat = document.querySelector("#cat")
const btnRandomCat = document.querySelector("#btnRandomCat")
const fox = document.querySelector("#fox")
const btnRandomFox = document.querySelector("#btnRandomFox")

// events
btnRandomDog.addEventListener("click", getRandomDog)
btnRandomCat.addEventListener("click", getRandomCat)
btnRandomFox.addEventListener("click", getRandomFox)

// functions
function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      if (data.url.includes('.mp4')) {
        getRandomDog()
      } else {
        dog.innerHTML = `
            <img src="${data.url}" class="img-fluid"/>`
      }
    })
}

function getRandomCat(){
    fetch("https://aws.random.cat/meow")
      .then(res => res.json())
      .then(data => {
          cat.innerHTML = `
          <img src="${data.file}" class="img-fluid"/>`
      })
}

function getRandomFox(){
    fetch("https://randomfox.ca/floof/")
    .then(res=>res.json())
    .then(data =>{
        fox.innerHTML = `
        <img src="${data.image}" class="img-fluid"/>`
    })
}