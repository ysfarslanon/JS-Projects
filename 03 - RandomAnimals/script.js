// elements
const dog = document.querySelector("#dog");
const btnRandomDog = document.querySelector("#btnRandomDog");

// events
btnRandomDog.addEventListener("click", getRandomDog);

function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      if (data.url.includes('.mp4')) {
        getRandomDog();
      } else {
        dog.innerHTML = `
            <img src="${data.url}" class="img-fluid"/>`;
      }
    });
}
