const buttonNextEl = document.querySelector(".next");
const buttonPrevEl = document.querySelector(".prev");
const imgEls = document.querySelectorAll("img");
const sliderEl = document.querySelector(".slider");
const navEls = document.querySelectorAll(".nav");

let indexVisibleImg = 0;

const visibleImgIndex = (array) => {
    for (let index = 0; index < array.length; index++) {
        if (array[index].className === "display") {
            indexVisibleImg = index;
        }
    }
}

const visibleImg = (array, visibleIndex) => {
    for (let index = 0; index < array.length; index++) {
        if (index === visibleIndex) {
            array[index].className = "display";
            navEls[index].classList.add("cur");
        }
        else {
            array[index].className = "hidden";
            navEls[index].classList.remove("cur");
        }
    }
}

buttonNextEl.addEventListener('click', function (e) {
    visibleImgIndex(imgEls);
    if (indexVisibleImg === imgEls.length - 1)
        visibleImg(imgEls, 0);
    else
        visibleImg(imgEls, indexVisibleImg + 1);
});

buttonPrevEl.addEventListener('click', function (e) {
    visibleImgIndex(imgEls);
    if (indexVisibleImg === 0)
        visibleImg(imgEls, 5);
    else
        visibleImg(imgEls, indexVisibleImg - 1);
});

sliderEl.addEventListener('click', function (e) {
    if (e.target.classList[0] === "nav") {
        indexVisibleImg = Number(e.target.textContent - 1);
        visibleImg(imgEls, indexVisibleImg);
    }
});