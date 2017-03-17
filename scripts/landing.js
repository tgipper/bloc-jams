var pointsArray = document.getElementsByClassName('point');

var revealPoint = function (point) {
    'use strict';
    point.style.opacity = 1;
    point.style.transform = "scaleX(1) translateY(0)";
    point.style.mstransform = "scaleX(1) translateY(0)";
    point.style.WebkitTransform = "scaleX(1) TranslateY(0)";
};

var animatePoints = function (points) {
    'use strict';
    forEach(points, revealPoint);
};

window.onload = function () {
    if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    window.addEventListener('scroll', function (event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);
        }
    });
};