var typed = new Typed('#element', {
    strings: ['Front-End Developer', 'AWS Cloud Engineer', 'UX Designer .'],
    typeSpeed: 50,
    backSpeed: 40,
    backDelay: 1000,
    loop: true
});
 
function loadanimation() {
    var tl = gsap.timeline()
    tl.from(".intro", {
        opacity: 0,
        duration: 0.3,
        delay: 0.2
    })
    tl.from(".intro", {
        borderRadius: "100px",
        duration: 0.2,
        ease: "expo.out"
    })
    tl.from("header", {
        opacity: 0,
        delay: 0.2
    })
    tl.from(" .intro div", {
        opacity: 0,
        duration: 0.3,
        stagger: 0.2
    })
}
loadanimation()




