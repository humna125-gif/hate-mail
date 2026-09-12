const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const redBtn = document.querySelector(".red-btn");
const greenBtn = document.querySelector(".btn[alt='yes']");

const title = document.getElementById("letter-title");
const snoopyImg = document.getElementById("letter-snoopy");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () =>{
        letter.querySelector(".letter-window").classList.add("open");
    },50);
});

redBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max =200;
    const distance= Math.random() * (max-min)+ min;
    const angle = Math.random() * Math.PI * 2;
    const moveX = Math.cos(angle) * distance;
    const moveY =Math.sin(angle) *distance;
    redBtn.style.transition = "transform 0.3s ease";
    redBtn.style.transition = `translate(${moveX}px, ${moveY}px)`;
});

greenBtn.addEventListener("click", () =>{
    title.textContent= "yay here's your letter";
    snoopyImg.src="snoopy.GIF"
    snoopyImg.src= "hate.mail.PNG"
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display= "none";
    finalText.style.display ="block";
});
