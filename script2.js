let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let codeDisplay = document.getElementById("codeDisplay");
let hexDigits = "0123456789abcdef";

// function for copy code 
codeDisplay.addEventListener("click", (e) => {
    window.navigator.clipboard.writeText(codeDisplay.innerText);
    copy.style.display = "block";
    setTimeout(() => {
        copy.style.display = "none";
    }, 800);
});


let generateRandomColor = () => {
    let color = "#";
    for (let value = 0; value < 6; value++) {
        color += hexDigits[Math.floor(Math.random() * 16)]
    } return color
}

let color1 = "#aaffcc"
let color2 = "#ffaaac"
btn1.innerText = color1;
btn2.innerText = color2;
codeDisplay.innerText = ` background-image:linear-gradient(to right,${color1},${color2})`
document.body.style.backgroundImage = `linear-gradient(to right,${color1},${color2})`



btn1.addEventListener("click", () => {
    color1 = generateRandomColor();
    btn1.innerText = color1;
    codeDisplay.innerText = ` background-image:linear-gradient(to right,${color1},${color2})`
    document.body.style.backgroundImage = `linear-gradient(to right,${color1},${color2})`
})



btn2.addEventListener("click", () => {
    color2 = generateRandomColor();
    btn2.innerText = color2;
    codeDisplay.innerText = ` background-image:linear-gradient(to right,${color1},${color2})`

    document.body.style.backgroundImage = `linear-gradient(to right,${color1},${color2})`
})