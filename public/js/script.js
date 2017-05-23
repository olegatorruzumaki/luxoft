var sliderElement = document.getElementById('sliderCarousel');
var sliderStartPoint = 5;
var sliderInterval;

function sliderFunc() {
    sliderInterval = setInterval(function () {
        sliderStartPoint = sliderStartPoint - 1;
        sliderElement.style.marginLeft = sliderStartPoint + "px";
        if (sliderStartPoint < -665) {
            sliderStartPoint = 5;
        }
    }, 100);
}

function sliderMouseOver() {
    clearInterval(sliderInterval);
}

sliderFunc();
