console.log("👍 JS Connected")

document.querySelectorAll(".card").forEach((item) => {

    item.addEventListener("click", (event) => {

        item.classList.toggle("flipped");
    });
})

let tl1 = gsap.timeline();

tl1.from("#myName", {
    y: 1000,
    ease: 'bounce',
    stagger: 1,
    delay: 1
})
.from("#selfie", {
    opacity: 0
});

