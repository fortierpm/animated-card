// Main Card
const container = document.querySelector(".container");
const card = document.querySelector(".card"); 
// Items
const title = document.querySelector(".title");
const projection = document.querySelector(".projection img");
const description = document.querySelector(".info h3");
const options = document.querySelector(".options");
const optionActive = document.querySelector(".options button.active");
const submit = document.querySelector(".submit");

// Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    // Popout Effect
    projection.style.transform = "translateZ(120px) rotateZ(0deg) rotateX(0deg)";
    title.style.transform = "translateZ(80px)";
    description.style.transform = "translateZ(70px)";
    options.style.transform = "translateZ(100px)";
    optionActive.style.transform = "rotateZ(5deg)";
    submit.style.transform = "translateZ(100px)";
})

// Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // Popback
    projection.style.transform = "translateZ(0px) rotateZ(0deg) rotateX(0deg)";
    title.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    options.style.transform = "translateZ(0px)";
    optionActive.style.transform = "rotateZ(0deg)";
    submit.style.transform = "translateZ(0px)";
});