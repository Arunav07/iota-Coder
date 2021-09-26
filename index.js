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


//GSAP
gsap.registerPlugin(MotionPathPlugin, TextPlugin);



gsap.set('.main', {position:'fixed', background:'#fff', width:'100%', maxWidth:'100vw', top:0, left:'50%', x:'-50%'})
gsap.set('.scrollDist', { width: '100%', height: '200%' })
let tl = gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:2 }})
    .fromTo('.sky', {y:0},{y:-200}, 0)
    tl.fromTo('.cloud1', {y:100},{y:-800}, 0)
    tl.fromTo('.cloud2', {y:-150},{y:-500}, 0)
    tl.fromTo('.cloud3', {y:0},{y:-650}, 0)
    tl.to('.mountBg', {y:-10},{y:-100}, 0)
tl.to('.mountMg', { y: -30 }, { y: -250 }, 0)
tl.to('.mountFg', { y: -600, duration: 3, ease: none,  }, 0)
    
.fromTo('#clipPathReveal', {y: 0},{y:100}, 1)
