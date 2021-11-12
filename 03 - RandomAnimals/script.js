// elements
const dog = document.querySelector("#dog")
const btnRandomDog = document.querySelector("#btnRandomDog")
const cat = document.querySelector("#cat")
const btnRandomCat = document.querySelector("#btnRandomCat")
// events
btnRandomDog.addEventListener("click", getRandomDog)
btnRandomCat.addEventListener("click", getRandomCat)

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