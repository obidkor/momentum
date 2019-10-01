const body = document.querySelector("body");
const img_num = 6;

function handleImgLoad(){
    console.log("finish loading")
}

function printImage(imgNum){
    const img = new Image();
    img.src = `/images/${imgNum+1}.jpg`
    img.classList.add("bgImg")
    body.prepend(img);
    
}

function genRandom(){
    const number = Math.floor(Math.random()*img_num);
    return number
}

function init(){
    const randomNum = genRandom();
    printImage(randomNum);
}

init();