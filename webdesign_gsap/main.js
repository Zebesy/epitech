let tl;
function createHappy() {
    gsap.to(".control", {duration : 0.1, repeat: 250, x: 3 });
    gsap.to(".lever", {duration : 0.1, repeat: 250, x: 3 });
    gsap.to(".conveyor_arm", {duration : 2, rotation: -180, transformOrigin:"top"});
    gsap.to(".conveyor_arm", {delay : 2.5, duration : 2, rotation: -1, transformOrigin:"top"});
    gsap.to(".face", {delay : 2.5, duration : 2, ease: Circ.easeOut, y: 235 });

    gsap.to(".face", {delay : 4.5, duration : 2, x: 210 });
    gsap.to(".second_conveyor_arm", {delay : 6.5, duration : 2, rotation: 145, transformOrigin:"top"});
    gsap.to(".second_conveyor_arm", {delay : 9, duration : 2, rotation: 1, transformOrigin:"top"});
    gsap.to(".happy_eyes", {delay : 9, duration : 2, ease: Circ.easeOut, y: 170 });

    gsap.to(".happy_eyes", {delay : 11.5, duration : 2, x: 270 });
    gsap.to(".face", {delay : 11.5, duration : 2, x: 480 });
    gsap.to(".third_conveyor_arm", {delay : 13.75, duration : 2, rotation: -145, transformOrigin:"top"});
    gsap.to(".third_conveyor_arm", {delay : 16.25, duration : 2, rotation: -1, transformOrigin:"top"});
    gsap.to(".happy_mouth", {delay : 16.25, duration : 2, ease: Circ.easeOut, y: 218 });

    gsap.to(".face", {delay : 18.75, duration : 2, x: 610 });
    gsap.to(".happy_eyes", {delay : 18.75, duration : 2, x: 400 });
    gsap.to(".happy_mouth", {delay : 18.75, duration : 2, x: 129 });

    gsap.to(".face", {delay : 22.75, duration: 2, rotation: 720, opacity : 0, x: 910 });
    gsap.to(".happy_eyes", {delay : 22.75, duration: 2, rotation: 720, opacity : 0, x: 700 });
    gsap.to(".happy_mouth", {delay : 22.75, duration: 2, rotation: 720, opacity : 0, x: 429 });
    tl = gsap.timeline({restart});
}

function createSad() {
    gsap.to(".control", {duration : 0.1, repeat: 250, x: 3 });
    gsap.to(".lever", {duration : 0.1, repeat: 250, x: 3 });
    gsap.to(".conveyor_arm", {duration : 2, rotation: -180, transformOrigin:"top"});
    gsap.to(".conveyor_arm", {delay : 2.5, duration : 2, rotation: -1, transformOrigin:"top"});
    gsap.to(".face2", {delay : 2.5, duration : 2, ease: Circ.easeOut, y: 235 });

    gsap.to(".face2", {delay : 4.5, duration : 2, x: 210 });
    gsap.to(".second_conveyor_arm", {delay : 6.5, duration : 2, rotation: 145, transformOrigin:"top"});
    gsap.to(".second_conveyor_arm", {delay : 9, duration : 2, rotation: 1, transformOrigin:"top"});
    gsap.to(".sad_eyes", {delay : 9, duration : 2, ease: Circ.easeOut, y: 165 });

    gsap.to(".sad_eyes", {delay : 11.5, duration : 2, x: 270 });
    gsap.to(".face2", {delay : 11.5, duration : 2, x: 480 });
    gsap.to(".third_conveyor_arm", {delay : 13.75, duration : 2, rotation: -145, transformOrigin:"top"});
    gsap.to(".third_conveyor_arm", {delay : 16.25, duration : 2, rotation: -1, transformOrigin:"top"});
    gsap.to(".sad_mouth", {delay : 16.25, duration : 2, ease: Circ.easeOut, y: 210 });

    gsap.to(".face2", {delay : 18.75, duration : 2, x: 610 });
    gsap.to(".sad_eyes", {delay : 18.75, duration : 2, x: 400 });
    gsap.to(".sad_mouth", {delay : 18.75, duration : 2, x: 129 });

    gsap.to(".face2", {delay : 22.75, duration: 2, rotation: 720, opacity : 0, x: 910 });
    gsap.to(".sad_eyes", {delay : 22.75, duration: 2, rotation: 720, opacity : 0, x: 700 });
    gsap.to(".sad_mouth", {delay : 22.75, duration: 2, rotation: 720, opacity : 0, x: 429 });
}

function createLove() {
    gsap.to(".control", {duration : 0.1, repeat: 250, x: 3 });
    gsap.to(".lever", {duration : 0.1, repeat: 250, x: 3 });
    gsap.to(".conveyor_arm", {duration : 2, rotation: -180, transformOrigin:"top"});
    gsap.to(".conveyor_arm", {delay : 2.5, duration : 2, rotation: -1, transformOrigin:"top"});
    gsap.to(".face3", {delay : 2.5, duration : 2, ease: Circ.easeOut, y: 235 });

    gsap.to(".face3", {delay : 4.5, duration : 2, x: 210 });
    gsap.to(".second_conveyor_arm", {delay : 6.5, duration : 2, rotation: 145, transformOrigin:"top"});
    gsap.to(".second_conveyor_arm", {delay : 9, duration : 2, rotation: 1, transformOrigin:"top"});
    gsap.to(".in-love_eyes", {delay : 9, duration : 2, ease: Circ.easeOut, y: 165 });

    gsap.to(".in-love_eyes", {delay : 11.5, duration : 2, x: 270 });
    gsap.to(".face3", {delay : 11.5, duration : 2, x: 480 });
    gsap.to(".third_conveyor_arm", {delay : 13.75, duration : 2, rotation: -145, transformOrigin:"top"});
    gsap.to(".third_conveyor_arm", {delay : 16.25, duration : 2, rotation: -1, transformOrigin:"top"});
    gsap.to(".in-love_mouth", {delay : 16.25, duration : 2, ease: Circ.easeOut, y: 216 });

    gsap.to(".face3", {delay : 18.75, duration : 2, x: 610 });
    gsap.to(".in-love_eyes", {delay : 18.75, duration : 2, x: 400 });
    gsap.to(".in-love_mouth", {delay : 18.75, duration : 2, x: 129 });

    gsap.to(".face3", {delay : 22.75, duration: 2, rotation: 720, opacity : 0, x: 910 });
    gsap.to(".in-love_eyes", {delay : 22.75, duration: 2, rotation: 720, opacity : 0, x: 700 });
    gsap.to(".in-love_mouth", {delay : 22.75, duration: 2, rotation: 720, opacity : 0, x: 429 });
}

function createTongue() {
    gsap.to(".control", {duration : 0.1, repeat: 250, x: 3 });
    gsap.to(".lever", {duration : 0.1, repeat: 250, x: 3 });
    gsap.to(".conveyor_arm", {duration : 2, rotation: -180, transformOrigin:"top"});
    gsap.to(".conveyor_arm", {delay : 2.5, duration : 2, rotation: -1, transformOrigin:"top"});
    gsap.to(".face4", {delay : 2.5, duration : 2, ease: Circ.easeOut, y: 235 });

    gsap.to(".face4", {delay : 4.5, duration : 2, x: 210 });
    gsap.to(".second_conveyor_arm", {delay : 6.5, duration : 2, rotation: 145, transformOrigin:"top"});
    gsap.to(".second_conveyor_arm", {delay : 9, duration : 2, rotation: 1, transformOrigin:"top"});
    gsap.to(".tongue_eyes", {delay : 9, duration : 2, ease: Circ.easeOut, y: 165 });

    gsap.to(".tongue_eyes", {delay : 11.5, duration : 2, x: 270 });
    gsap.to(".face4", {delay : 11.5, duration : 2, x: 480 });
    gsap.to(".third_conveyor_arm", {delay : 13.75, duration : 2, rotation: -145, transformOrigin:"top"});
    gsap.to(".third_conveyor_arm", {delay : 16.25, duration : 2, rotation: -1, transformOrigin:"top"});
    gsap.to(".tongue_mouth", {delay : 16.25, duration : 2, ease: Circ.easeOut, y: 186 });

    gsap.to(".face4", {delay : 18.75, duration : 2, x: 610 });
    gsap.to(".tongue_eyes", {delay : 18.75, duration : 2, x: 400 });
    gsap.to(".tongue_mouth", {delay : 18.75, duration : 2, x: 129 });

    gsap.to(".face4", {delay : 22.75, duration: 2, rotation: 720, opacity : 0, x: 910 });
    gsap.to(".tongue_eyes", {delay : 22.75, duration: 2, rotation: 720, opacity : 0, x: 700 });
    gsap.to(".tongue_mouth", {delay : 22.75, duration: 2, rotation: 720, opacity : 0, x: 429 });
}
