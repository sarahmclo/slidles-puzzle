//Wait for DOM to finish loading before running puzzle
document.addEventListener("DOMContentLoaded", function () {
    //Get elements
    const playButton = document.querySelector(".playButton");
    const tiles = document.querySelectorAll(".tile");
    const timerDisplay = document.getElementById('timer');
    const movesDisplay = document.getElementById('moves');

    //Puzzle Variables - blank tile position
    //Define two variables, blankTileRow and blankTileCol, which represent the row and column indices of a blank tile in a puzzle. These indices are 0-based, meaning the top-left tile is at index (0,0) and the bottom-right tile is at index (rows - 1, columns - 1).
    //Therefore the blank tile is located at row 2 and column 2, which means it is the third row and the third column from the top-left corner of the puzzle.
    let blankTileRow = 2; //Row index of blank tile (based on 0)
    let blankTileCol = 2; //Columnindex of blank tile (based on 0)
    let moves = 0; //Start counter at 0
    let timerInterval;
    let seconds = 0;
    let minutes = 0;
    let gameStarted = false;
    
    //Add solution
    const solution = ["1", "2", "3", "4", "5", "6", "7", "8", ""];

    //Function to shuffle tiles
    //Adapt code shuffle tiles array https://stackoverflow.com/questions/57907979/javascript-shuffle-table-rows
    //i<100 allows the tiles shuffle sufficiently
    function shuffle() {
        for (let i = 0; i < 100; i++) {
            const directions = ['up', 'down', 'left', 'right'];
            const randomIndex = Math.floor(Math.random() * 4);
            //using Math.floor(Math.random() * 4), you get one of the four possible integers: 0, 1, 2, or 3. These integers are then used as indices to pick a random direction from the directions array, which contains the strings 'up', 'down', 'left', and 'right'
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
            const direction = directions[randomIndex];
            moveTile(direction);
        }
        moves = 0;
        movesDisplay.textContent = moves;
    }

    //Function to move a tile
    function moveTile(direction) {
        let validMove = false;
        switch (direction) {
            //Use case and break in switch statement - control flow based on direction value
            case 'up':
                if (blankTileRow > 0) {
                    swapTiles(blankTileRow, blankTileCol, blankTileRow - 1, blankTileCol);
                    blankTileRow--;
                    validMove = true;
                }
                break;
            case 'down':
                if (blankTileRow < 2) {
                    swapTiles(blankTileRow, blankTileCol, blankTileRow + 1, blankTileCol);
                    blankTileRow++;
                    validMove = true;
                }
                break;
            case 'left':
                if (blankTileCol > 0) {
                    swapTiles(blankTileRow, blankTileCol, blankTileRow, blankTileCol - 1);
                    blankTileCol--;
                    validMove = true;
                }
                break;
            case 'right':
                if (blankTileCol < 2) {
                    swapTiles(blankTileRow, blankTileCol, blankTileRow, blankTileCol + 1);
                    blankTileCol++;
                    validMove = true;
                }
                break;
        }
        if (validMove && gameStarted) {
            moves++;
            movesDisplay.textContent = moves;

            // Check if the puzzle is solved after each tile move
            if (isSolved()) {
                //Stop timer
                clearInterval(timerInterval);
                //Display "You solved Slidles!" mesage
                //Add setTimeout to stop alert from showing before last tile has moved
                //https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
                setTimeout(() => alert("Hurray! You solved Slidles!"), 100);
            }
        }
    }

    // Function to swap tiles
    function swapTiles(row1, col1, row2, col2) {
        const tile1Index = row1 * 3 + col1;
        const tile2Index = row2 * 3 + col2;
        [tiles[tile1Index].textContent, tiles[tile2Index].textContent] = [tiles[tile2Index].textContent, tiles[tile1Index].textContent];
        [tiles[tile1Index].className, tiles[tile2Index].className] = [tiles[tile2Index].className, tiles[tile1Index].className];
    }

    //Function to reset puzzle
    function resetGame() {
        
        // Reset the tiles to their initial positions without numbers
        tiles.forEach((tile, index) => {
            tile.textContent = index < 8 ? (index + 1).toString() : "";
            //tile.textContent = ""; // Remove the numbers from tiles
            tile.className = `tile tile${index + 1}`;
        });

        //Reset blank
        blankTileCol = 2;
        blankTileRow = 2;

        // Reset the moves counter
        moves = 0;
        movesDisplay.textContent = moves;
        gameStarted = false;

        // Reset the timer
        clearInterval(timerInterval);
        seconds = 0;
        minutes = 0;
        timerDisplay.textContent = '0:00';
    }

    //Function to check if puzzle is solved and tiles back to correct position
    function isSolved() {
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i].textContent !== solution[i]) {
                return false;
            }
        }
        return true;
    }

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

//Add event listener for playButton click to shuffle tiles and start puzzle
//Add function shuffleTilesStart for event listener - stop shuffle effecting moves counter
playButton.addEventListener('click', function shuffleTilesAndStart() {
    shuffle();
    gameStarted = true;

    //Start timer when game begins
    timerInterval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        //Minutes and seconds - stack overflow
        timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);

    //Remove event listener from play button after initial shuffle
    //This ensures that it will not effect the moves counter
    playButton.removeEventListener('click', shuffleTilesAndStart)
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

//Reset puzzle when page loads
resetGame();
});

//Switch puzzles
let images = [
    "url('assets/images/pink-slidle.webp')",
    "url('assets/images/black-slidle.webp')",
    "url('assets/images/yellow-slidle.webp')",
    "url('assets/images/white-slidle.webp')"
  ];
  
  let currentImageIndex = 0;
  
  function switchImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Cycle through images
  
    let tiles = document.querySelectorAll(".tile1, .tile2, .tile3, .tile4, .tile5, .tile6, .tile7, .tile8, .tile9");
  
    tiles.forEach((tile, index) => {
      if (tile.classList.contains("tile9")) {
        // Ensure the blank tile has a white background
        tile.style.backgroundImage = "none";
        tile.style.backgroundColor = "white";
      } else {
        tile.style.backgroundImage = images[currentImageIndex];
      }
    });
  }

/** Audio */
//Toggle on/off - adapted in codepen from tutorial https://stackoverflow.com/questions/55018585/how-to-turn-on-audio-on-click-icon-play-pause
//Assign togglePlay function to onclick event of vol-icon a (adapted from: https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link)
document.getElementById("volume-icon").onclick = togglePlay;
function togglePlay() {
    let audio = document.getElementsByTagName("audio")[0]; /* 0 important here */
    if (audio.paused) {
        audio.play();
        document.getElementById("volume-icon").src = "assets/images/vol-on.webp";
        playSlideClickSound();
    } else {
        audio.pause();
        document.getElementById("volume-icon").src = "assets/images/vol-off.webp";
    }
}
    //Audio tile-slide click sound effect
    function playSlideClickSound() {
    var clickSound = document.getElementById("slide-click-sound");
    clickSound.currentTime = 0; //Reset to beginning
    clickSound.play(); //Play sound effect on click
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

/** Hint modal */
//Modal - practiced in codepen and MDN, adapted from tutorial https://www.w3schools.com/howto/howto_css_modals.asp adjusted to use click on image (not button) to open modal
//Get hint button 
let hintButton = document.querySelector(".hintButton");
//Get hint modal element
let hintModal = document.getElementById("hintModal");
//Add click event listener to hint button
hintButton.addEventListener("click", function () {
    //Display hint modal
    hintModal.style.display = "block";
});
//Close modal
hintModal.addEventListener("click", function (event) {
    if (event.target === hintModal || event.target.tagName === 'IMG') {
        hintModal.style.display = "none";
    }
});
//Close hint modal when click anywhere on modal (enhances UX)
window.addEventListener("click", function (event) {
    if (event.target === hintModal) {
        hintModal.style.display = "none";
    }
});