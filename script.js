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

    document.addEventListener("DOMContentLoaded", () => {
        gsap.from("#logo", { duration: 2, y: -100, opacity: 0, ease: "bounce" });
        gsap.from("#cc-img", { duration: 2, x: -100, opacity: 0, ease: "power3.out", delay: 0.5 });
        gsap.from(".video-div h1", { duration: 2, x: 100, opacity: 0, ease: "power3.out", delay: 1 });
      });    



    gsap.registerPlugin(ScrollTrigger);

  
    gsap.to("#moving-text .con", {
        scrollTrigger: {
            trigger: "#moving-text",
            start: "top center",
            end: "bottom center",
            scrub: true,
        },
        x: 100, 
        duration: 1,
        stagger: 0.5
    });

    gsap.from(".makers-img-div1 img, .makers-img-div2 img", {
        scrollTrigger: {
            trigger: ".makers-img",
            start: "top 80%",
            end: "bottom 90%",
            scrub: true,
        },
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.3
    });
    
    gsap.from(".makers-img-div3 img, .makers-img-div4 img", {
        scrollTrigger: {
            trigger: ".makers-img2",
            start: "top 80%",
            end: "bottom 90%",
            scrub: true,
        },
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.3
    });







loco();
HomepageAnimation();
realAnimation();
teamAnimation();