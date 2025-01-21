var typed = new Typed('#element', {
    strings: ['Software Tester', 'AWS Cloud Engineer'],
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

gsap.registerPlugin(ScrollTrigger);

const sectionIds = ["About", "St", "Skills", "Projects", "Contact"];

sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power1.in",
            scrollTrigger: {
                trigger: section,
                start: "top 70%",
                // end: "top 50%",
                toggleActions: "play reverse play reverse",
                markers: false,
            },
        }
    );
});







