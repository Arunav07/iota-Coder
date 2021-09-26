$('.darkMode').click(function () {
    $('.main1').toggleClass("Black");
    $('.togglingDiv').toggleClass("White");
    $('.round').toggleClass("Black");
    $('.round').toggleClass("Left");
    $('*').css("transition", "0.1s");
});

$('.lessGo').mouseenter(function () {
    $('.lessGo').addClass("DesignerButton");
})
$('.lessGo').mouseleave(function () {
    $('.lessGo').removeClass("DesignerButton");
})

var preloader = document.getElementById("loading");
var mainContainer = document.getElementById("main1");
function LoadingFunction() {
}
 
$(document).ready(function LoadingFunction() {
    $('#loading').show();
    $('#loading').delay(3000).fadeOut(100);
    $("#main1").hide();
    $("#main1").delay(3000).fadeIn(100);  

})


(function() {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#main1");
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();


//GSAP
gsap.registerPlugin(scrollTrigger);
gsap.set(".ScrollTrigger")

