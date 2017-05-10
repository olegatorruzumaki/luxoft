var sliderElement = document.getElementsByClassName('header__slider-ul');
var a = 5;

var slider = setInterval(function() {
    a = a-1;
    sliderElement[0].style.marginLeft = a + "px";
    if (a < -665) {
        a = 5;
    }
}, 100);

function sliderMouseOut() {
    slider = setInterval(function() {
        a = a-1;
        sliderElement[0].style.marginLeft = a + "px";
        if (a < -665) {
            a = 5;
        }
    }, 100);
}

function sliderMouseOver() {
    clearInterval(slider)
}
