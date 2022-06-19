// const background = document.querySelector(".background");
const body = document.querySelector("body");

const imgFolder = "./img/"
const imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

changeBackground();
// background.addEventListener("click", changeBackground);


function changeBackground(event) {
    const currentImg = document.querySelector("img");
    if(currentImg != null){
        currentImg.remove();
    }

    const image = new Image();
    const randomNum = randomNumberInArr(imgs);
    const randomImg = imgs[randomNum];

    image.classList.add("bgimg");
    image.src = imgFolder + randomImg;
    body.appendChild(image);
}

function randomNumberInArr(arr) {
    return Math.floor(Math.random() * arr.length);
}
