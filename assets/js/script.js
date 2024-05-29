//Wait for DOM to finish loading before running puzzle
document.addEventListener("DOMContentLoaded", function() {

});

/** Audio */
//Toggle on/off - adapted in codepen from tutorial https://stackoverflow.com/questions/55018585/how-to-turn-on-audio-on-click-icon-play-pause
function togglePlay() {
    let audio = document.getElementsByTagName("audio")[0]; /* 0 v important here */
    if (audio.paused) {
        audio.play();
        document.getElementById("volume-icon").src = "assets/images/vol-on.webp"
    } else {
        audio.pause();
        document.getElementById("volume-icon").src = "assets/images/vol-off.webp"
    }
}