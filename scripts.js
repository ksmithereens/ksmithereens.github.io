console.log("👍 JS Connected")

document.querySelectorAll(".card").forEach((item) => {

    item.addEventListener("click", (event) => {

        item.classList.toggle("flipped");
    });
});