var animatePoints = function () {
    'use strict';
    var points = document.getElementsByClassName('point');
    
    var revealPoint = function (index) {
        points[index].style.opacity = 1;
        points[index].style.transform = "scaleX(1) translateY(0)";
        points[index].style.mstransform = "scaleX(1) translateY(0)";
        points[index].style.WebkitTransform = "scaleX(1) TranslateY(0)";
    };
    for (var = i; i<points.length; i++) {
        revealPoint(i);       
    }        
};
