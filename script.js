const textOptions = ["a Software QA Engineer", "a Cloud Enthusiast", " an Aspiring Software Engineer"];
let index = 0;
const textElement = document.querySelector(".changing-text");

function changeText() {
    textElement.style.opacity = 0; // Fade out
    setTimeout(() => {
        index = (index + 1) % textOptions.length; // Cycle through the text
        textElement.textContent = textOptions[index];
        textElement.style.opacity = 1; // Fade in
    }, 500); // Wait for the fade-out to complete before changing text
}

setInterval(changeText, 4000); // Change text every 2 seconds
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

document.querySelectorAll('.experience-item').forEach(item => {
    observer.observe(item);
});

var modal = document.getElementById("myModal");

var img = document.getElementById("awardImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}