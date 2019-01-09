// (function() {
//   // Init
//   var container = document.getElementById("container"),
//     inner = document.getElementById("inner");
//     helper = document.getElementById("helper");
//
//
//   // Mouse
//   var mouse = {
//     _x: 0,
//     _y: 0,
//     x: 0,
//     y: 0,
//     updatePosition: function(event) {
//       var e = event || window.event;
//       this.x = e.clientX - this._x;
//       this.y = (e.clientY - this._y) * -1;
//     },
//     setOrigin: function(e) {
//       this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
//       this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
//     },
//     show: function() {
//       return "(" + this.x + ", " + this.y + ")";
//     }
//   };
//
//   // Track the mouse position relative to the center of the container.
//   mouse.setOrigin(container);
//
//   //-----------------------------------------
//
//   var counter = 0;
//   var updateRate = 10;
//   var isTimeToUpdate = function() {
//     return counter++ % updateRate === 0;
//   };
//
//   //-----------------------------------------
//
//   var onMouseEnterHandler = function(event) {
//     update(event);
//   };
//
//   var onMouseLeaveHandler = function() {
//     inner.style = "";
//   };
//
//   var onMouseMoveHandler = function(event) {
//     if (isTimeToUpdate()) {
//       update(event);
//     }
//     displayMousePositionHelper(event);
//
//   };
//
//   //-----------------------------------------
//
//   var update = function(event) {
//     mouse.updatePosition(event);
//     updateTransformStyle(
//       (mouse.y / inner.offsetHeight / 2).toFixed(2),
//       (mouse.x / inner.offsetWidth / 2).toFixed(2)
//     );
//   };
//
//   var displayMousePositionHelper = function(event) {
//     var e = event || window.event;
//     helper.innerHTML = mouse.show();
//     helper.style = "top:"+(e.clientY-container.offsetTop)+"px;"
//                  + "left:"+(e.clientX-container.offsetLeft)+"px;";
//   };
//
//
//   var updateTransformStyle = function(x, y) {
//     var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
//     inner.style.transform = style;
//     inner.style.webkitTransform = style;
//     inner.style.mozTransform = style;
//     inner.style.msTransform = style;
//     inner.style.oTransform = style;
//   };
//
//   //-----------------------------------------
//
//   container.onmouseenter = onMouseEnterHandler;
//   container.onmouseleave = onMouseLeaveHandler;
//   container.onmousemove = onMouseMoveHandler;
// })();

$(document).scroll(function () {
        $("#sticky").css({
            "top": "0",
            "position": $(this).scrollTop() > 105 ? "fixed" : "relative"
        });
});

$(window).on('scroll', function () {
    var pixs = $(window).scrollTop() - $('#image1').offset().top
    var pixs2 = $(window).scrollTop() - $('.out2').offset().top
    console.log(pixs);
    pixs = pixs / 10;
    pixs2 = pixs2 / 3;
    $(".out").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" });
    $(".out2").css({"-webkit-filter": "blur("+pixs2+"px)","filter": "blur("+pixs2+"px)" })
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
