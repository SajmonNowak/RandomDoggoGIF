const normalModeImg = document.querySelector("img");
const randomBtn = document.getElementById("randomBtn");
const doggoModeBtn = document.getElementById("doggoModeBtn");
const container = document.getElementById("container");

const randomDoggo = (img) => {
  fetch(
    "https://api.giphy.com/v1/gifs/random?api_key=148Y4On6S8E6gcW8IhWGuDLr1qVyfgFx&rating=g&tag=dog",
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.fixed_height.url;
    });
  return img;
};

const doggoMode = () => {
  for (let i = 0; i < 30; i++) {
    const doggoImg = document.createElement("img");
    doggoImg.classList.add("doggoImage");
    const doneImage = randomDoggo(doggoImg);
    let promise = new Promise((resolve, reject) => {
      resolve(randomDoggo(doggoImg));
    }).then((img) => {
      console.log(img);
      container.append(img);
    });
  }
};

randomBtn.addEventListener("click", () => {
  container.innerHTML = "";
  let normalModeImg = document.createElement("img");
  container.appendChild(normalModeImg);
  randomDoggo(normalModeImg);
});
doggoModeBtn.addEventListener("click", doggoMode);
document.addEventListener("DOMContentLoaded", () => {
  randomDoggo(normalModeImg);
});
