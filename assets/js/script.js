//Wait for DOM to finish loading before running puzzle
document.addEventListener("DOMContentLoaded", function() {
    //Get playButton element
    const playButton = document.querySelector(".playButton")
    //Get tile element
    const tiles = document.querySelectorAll(".tile")

    //Puzzle Variables - blank tile position
    //Define two variables, blankTileRow and blankTileCol, which represent the row and column indices of a blank tile in a puzzle. These indices are 0-based, meaning the top-left tile is at index (0,0) and the bottom-right tile is at index (rows - 1, columns - 1).
    //Therefore the blank tile is located at row 2 and column 2, which means it is the third row and the third column from the top-left corner of the puzzle.
    let blankTileRow = 2; //Row index of blank tile (based on 0)
    let blankTileCol = 2; //Columnindex of blank tile (based on 0)
    let gameStarted = false;


    //Function to shuffle tiles
    //Adapt code shuffle tiles array https://stackoverflow.com/questions/57907979/javascript-shuffle-table-rows
    //i<100 allows the tiles shuffle sufficiently
    function shuffle() {
        for (let i =0; i<100; i++) {
            const directions = ['up', 'down', 'left', 'right'];
            const randomIndex = Math.floor(Math.random()*4) 
            //using Math.floor(Math.random() * 4), you get one of the four possible integers: 0, 1, 2, or 3. These integers are then used as indices to pick a random direction from the directions array, which contains the strings 'up', 'down', 'left', and 'right'
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
            const direction = directions[randomIndex];
            moveTile(direciton);
        }
    }

    //Add event listener for playButton click to shuffle tiles and start puzzle
    playButton.addEventListener, () => {
        shuffle();
        gameStarted =true;
    }
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
    //Assign togglePlay function to onclick event of vol-icon a (adapted from: https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link)
    document.getElementById("volume-icon").onclick = togglePlay;
    
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