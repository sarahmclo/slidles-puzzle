//Wait for DOM to finish loading before running puzzle
document.addEventListener("DOMContentLoaded", function() {

});

/** Audio */
//Toggle on/off - adapted in codepen from tutorial https://stackoverflow.com/questions/55018585/how-to-turn-on-audio-on-click-icon-play-pause
function togglePlay() {
    let audio = document.getElementsByTagName("audio")[0]; /* 0 v important here */
    if (audio.paused) {
        audio.play();
        document.getElementById("volume-icon").src = "assets/images/vol-on.webp";
    } else {
        audio.pause();
        document.getElementById("volume-icon").src = "assets/images/vol-off.webp";
    }
}

/** Info modal */
//Modal - practiced in codepen and MDN, adapted from tutorial https://www.w3schools.com/howto/howto_css_modals.asp adjusted to use click on image (not button) to open modal
//Get info modal
let modal = document.getElementById("myModal");
//Get icon that opens modal
let img = document.getElementById("info-modal");
//Get element that closes modal
let span = document.getElementsByClassName("close")[0];
//When user clicks on icon, open modal
img.onclick = function () {
    modal.style.display = "block";
};
//When user clickson x, close modal
span.onclick = function () {
    modal.style.display = "none";
};