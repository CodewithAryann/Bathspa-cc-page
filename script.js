function HomepageAnimation() {
    gsap.set(".slidesm", { scale: 2 })


    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 2
        }
    })
    tl
        .to(".vidodiv", {

            '--clip': "0%",
            ease: Power2,
        }, 'a')
        .to(".slidesm", {
            scale: 1,
            ease: Power2
        }, 'a')
        .to(".lft", {
            xPercent: -10,
            stagger: .03,
            ease: Power2

        }, 'b')
        .to(".rgt", {
            xPercent: 10,
            stagger: .03,
            ease: Power2

        }, 'b')

}
function realAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        },
        xPercent: -130,
        ease: Power4
    })
}
function teamAnimation() {
    document.querySelectorAll(".listelem")
        .forEach(function (el) {
            el.addEventListener("mousemove", function (dets) {
                gsap.to(this.querySelector(".picture"), {
                    opacity: 1,
                    x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                    ease: Power4,
                    duration: .5
                })
            })
            el.addEventListener("mouseleave", function (dets) {
                gsap.to(this.querySelector(".picture"), {
                    opacity: 0,
                    ease: Power4,
                    duration: .5
                })
            })

        })
}
function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    const scrollToTop = (duration) => {
        const start = window.pageYOffset;
        const startTime = performance.now();

        const scroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            window.scrollTo(0, start * (1 - progress));

            if (progress < 1) {
                requestAnimationFrame(scroll);
            }
        };

        requestAnimationFrame(scroll);
    };

    scrollToTop(2000); // Adjust the duration as needed (2000ms = 2 seconds)
});
loco();
HomepageAnimation();
realAnimation();
teamAnimation();