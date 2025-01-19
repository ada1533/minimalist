gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true
})

const tl = gsap.timeline();

tl.fromTo('.logo', {
    x: -100,
    opacity: 1,
    opacity: 0
},  {
    x: 0,
    opacity: 1,
    duration: 1,
}).fromTo('.nav_span', {
    x: -100,
    opacity: 0
},  {
    x: 0,
    opacity: 1,
    duration: 1
}, 1).fromTo('.nav_button', {
    x: -100,
    opacity: 0
},  {
    x: 0,
    opacity: 1,
    duration: 1
}, 1).fromTo('.header_h1', {
    x: -100,
    opacity: 0
},  {
    x: 0,
    opacity: 1,
    duration: 1
}, 2).fromTo('.header_p', {
    y: +100,
    opacity: 0
},  {
    y: 0,
    opacity: 1,
    duration: 1
}, 3)
.fromTo('.header_button', {
    y: +100,
    opacity: 0
},  {
    y: 0,
    opacity: 1,
    duration: 1
}, 4)
.fromTo('.title__bottom_p', {
    x: +100,
    opacity: 0
},  {
    x: 0,
    opacity: 1,
    duration: 1
}, 5).fromTo('.header_image', {
    x: +100,
    opacity: 0
},  {
    x: 0,
    opacity: 1,
    duration: 1
}, 2)
gsap.to('.header', {
    y: "-100%",
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".header",
        start: 'top top', 
        end: '+=100%',
        scrub: true,
    }
});
gsap.from('.featureOne_block-1', {
    x: "-100%",
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".header",
        start: 'top top',
        end: '+=30%',
        scrub: true,
    }
});
gsap.from('.featureOne_block-2', {
    y: "+100%",
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".header",
        start: 'top top',
        end: '+=30%',
        scrub: true,
    }
});
gsap.from('.featureOne_block-3', {
    x: "+100%",
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".header",
        start: 'top top',
        end: '+=30%',
        scrub: true,
    }
});

gsap.from('.infoImg', {
    x: "-100%",
    y: "+100%",
    opacity: 0,
    duration: 2,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".header",
        start: 'top end',
        end: '+=60%',
        scrub: true,
    }
});

gsap.from('.infoBlock__right', {
    x: "+100%",
    y: "+100%",
    opacity: 0,
    duration: 2,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".header",
        start: 'end end',
        end: '+=70%',
        scrub: true,
    }
});

gsap.to('.infoLine', {
    x: "-100%",
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".infoFone",
        start: 'top top',
        end: '+=100%',
        scrub: true,
    }
});

gsap.from('.containerBlock', {
    x: "+100%",
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".infoFone",
        start: 'top top',
        end: '+=50%',
        scrub: true,
    }
});

gsap.from('.tagline_h6', {
    y: "+50%",
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".containerBlock",
        start: 'top end',
        end: '+=50%',
        scrub: true,
    }
});
gsap.from('.tagline_h2', {
    y: "+50%",
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".containerBlock",
        start: 'center end',
        end: '+=30%',
        scrub: true,
    }
});
gsap.from('.tagline_button', {
    y: "+50%",
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".container_btn",
        start: 'top top',
        end: '+=20%',
        scrub: true,
    }
});