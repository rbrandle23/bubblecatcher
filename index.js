
let container = document.getElementById("container");
let secondcontainer = document.getElementById("second-container")
window.addEventListener("load", (event) => {
    let createbubble = document.createElement("div");
    secondcontainer.appendChild(createbubble);
    secondcontainer.addEventListener("mousemove", function(e) {
        let fullwidth = secondcontainer.offsetWidth - 40;
        let fullheight = secondcontainer.offsetHeight - 40;
        let randomheight = Math.floor((Math.random() * fullheight) + 1);
        let randomwidth = Math.floor((Math.random() * fullwidth) + 1);
        createbubble.style.transform = `translate(${randomwidth}px, ${randomheight}px)`;
    });
    });



