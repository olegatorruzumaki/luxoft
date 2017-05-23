var sliderElement = document.getElementById('sliderCarousel');
var sliderStartPoint = 0;
var sliderInterval;

function sliderFunc() {
    sliderInterval = setInterval(function () {
        sliderStartPoint--;
        sliderElement.style.transform= "translateX("+sliderStartPoint + "px)";
        // sliderElement.style.marginLeft = sliderStartPoint + "px";
        if (sliderStartPoint < -660) {
            sliderStartPoint = 0;
        }
    }, 100);
}

function sliderMouseOver() {
    clearInterval(sliderInterval);
}

sliderFunc();
