//Wait for DOM to finish loading before running puzzle
document.addEventListener("DOMContentLoaded", function () {
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
        for (let i = 0; i < 100; i++) {
            const directions = ['up', 'down', 'left', 'right'];
            const randomIndex = Math.floor(Math.random() * 4)
            //using Math.floor(Math.random() * 4), you get one of the four possible integers: 0, 1, 2, or 3. These integers are then used as indices to pick a random direction from the directions array, which contains the strings 'up', 'down', 'left', and 'right'
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
            const direction = directions[randomIndex];
            moveTile(direciton);
        }
    }

    //Add event listener for playButton click to shuffle tiles and start puzzle
    playButton.addEventListener, () => {
        shuffle();
        gameStarted = true;
    }
});

//Add event listeners to tiles
tiles.forEach((tile, index) => { //line starts a loop over each tile element in the tiles NodeList using the forEach method. It takes a callback function with parameters tile representing the current tile element and index representing the index of the current tile in the tiles NodeList.
    tile.addEventListener('click', () => {
        const row = Math.floor(index / 3); //calculates the row index of the clicked tile based on its position in the tiles NodeList. Since there are 3 tiles per row, dividing the index by 3 and using Math.floor ensures we get the correct row index.
        const col = index % 3; //calculates the column index of the clicked tile based on its position in the tiles NodeList. The modulo operator % gives the remainder of the division by 3, which gives the column index.
        if (Math.abs(row - blankTileRow) + Math.abs(col - blankTileCol) === 1 && gameStarted) { //checks if the clicked tile is adjacent to the blank tile (located at blankTileRow and blankTileCol) by calculating the Manhattan distance. If the sum of the absolute differences in row and column indices is 1 (meaning they are adjacent) and the game has started (gameStarted is true), the condition is met.
            moveTile(getDirection(row, col)); //If condition in previous true, this line calls the moveTile function with the direction returned by the getDirection function, passing the row and column indices of the clicked tile. This function is responsible for moving the tile in the appropriate direction.
        }
    });
});

//Function to get direction of tile move
function getDirection(row, col) {
    if (row < blankTileRow) {
        return 'up';
    } else if (row > blankTileRow) {
        return 'down';
    } else if (col < blankTileCol) {
        return 'left';
    } else {
        return 'right';
    }
}
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