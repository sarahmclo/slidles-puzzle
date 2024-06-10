// Wait for DOM to finish loading before running puzzle
document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const playButton = document.querySelector('.playButton');
    const tiles = document.querySelectorAll('.tile');
    const timerDisplay = document.getElementById('timer');
    const movesDisplay = document.getElementById('moves');
    const audio = document.getElementById('slide-click-sound');

    //  Puzzle Variables - blank tile position
    let moves = 0; // Start counter at 0
    let timerInterval;
    let seconds = 0;
    let minutes = 0;
    let gameStarted = false;

    // Index tutorial https://www.w3schools.com/jsref/jsref_indexof_array.asp
    // Define two variables, blankTileRow and blankTileCol representing the row and column indices of a blank tile in a puzzle. These indices are 0-based, meaning the top-left tile is at index (0,0) and the bottom-right tile is at index (rows - 1, columns - 1).
    let blankTileRow = 2; // Row index of blank tile (based on 0)
    let blankTileCol = 2; // Column index of blank tile (based on 0)
    // Blank tile is located at row 2 and column 2, which means it is the third row and the third column from the top-left corner of the puzzle.

    // Add solution
    const solution = ["1", "2", "3", "4", "5", "6", "7", "8", ""];

    // Function to shuffle tiles
    // Adapt code shuffle tiles https://stackoverflow.com/questions/57907979/javascript-shuffle-table-rows
    // i < 100 allows the tiles shuffle sufficiently
    function shuffle() {
        for (let i = 0; i < 100; i++) {
            const directions = ['up', 'down', 'left', 'right'];
            const randomIndex = Math.floor(Math.random() * 4);
            // Using Math.floor(Math.random() * 4), you get one of the four possible integers: 0, 1, 2, or 3. These integers are then used as indices to pick a random direction from the directions array, which contains the strings 'up', 'down', 'left', and 'right'
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
            const direction = directions[randomIndex];
            moveTile(direction);
        }
        moves = 0;
        movesDisplay.textContent = moves;
    }

    // Function to move a tile
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

            // Audio tile-slide click sound effect
            var clickSound = document.getElementById("slide-click-sound");
            clickSound.currentTime = 0; //Reset to beginning
            clickSound.play(); //Play sound effect on click

            // Confetti function adapted from tutorial https://www.npmjs.com/package/js-confetti
            const jsConfetti = new JSConfetti();
            var winSound = document.getElementById("win-sound");

            function puzzleSolved() {
                jsConfetti.addConfetti({
                    confettiColors: [
                      '#F3A0BC', '#A8CD6E', '#F2DD4E', '#87AAD0', '#FCBE4F', '#FF69B4', '#FFFFFF',
                    ],
                  });
                winSound.currentTime = 0;
                winSound.play();
            }
            // Check if the puzzle is solved after each tile move
            if (isSolved()) {
                // Stop timer
                clearInterval(timerInterval);
                document.getElementById("winModal").style.display = "block";
                // Display "You solved Slidles!" message and link users moves and time
                document.getElementById("winModalTime").textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                document.getElementById("winModalMoves").textContent = `${moves}`;

                puzzleSolved();
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

    // Function to get direction of tile move
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

    //Function to reset puzzle
    function resetGame() {

        // Reset the tiles to their initial positions without numbers being displayed
        tiles.forEach((tile, index) => {
            tile.textContent = index < 8 ? (index + 1).toString() : "";
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
        timerDisplay.textContent = '00:00';
    }

    // Function to check if puzzle is solved and tiles back to correct position
    function isSolved() {
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i].textContent !== solution[i]) {
                return false;
            }
        }
        return true;
    }

    // Add event listeners to tiles
    tiles.forEach((tile, index) => { // Line starts a loop over each tile element in the tiles NodeList using the forEach method. It takes a callback function with parameters tile representing the current tile element and index representing the index of the current tile in the tiles NodeList.
        tile.addEventListener('click', () => {
            const row = Math.floor(index / 3); // Calculates the row index of the clicked tile based on its position in the tiles NodeList. Since there are 3 tiles per row, dividing the index by 3 and using Math.floor ensures we get the correct row index.
            const col = index % 3; // Calculates the column index of the clicked tile based on its position in the tiles NodeList. The modulo operator % gives the remainder of the division by 3, which gives the column index.
            if (Math.abs(row - blankTileRow) + Math.abs(col - blankTileCol) === 1 && gameStarted) { // Checks if the clicked tile is adjacent to the blank tile (located at blankTileRow and blankTileCol) by calculating the Manhattan distance. If the sum of the absolute differences in row and column indices is 1 (meaning they are adjacent) and the game has started (gameStarted is true), the condition is met.
                moveTile(getDirection(row, col)); // If condition in previous true, this line calls the moveTile function with the direction returned by the getDirection function, passing the row and column indices of the clicked tile. This function is responsible for moving the tile in the appropriate direction.
            }
        });
    });

    // Add event listener for playButton click to shuffle tiles and start puzzle
    // Add function shuffleTilesStart for event listener - stop shuffle effecting moves counter
    playButton.addEventListener('click', function () {
        resetGame();
        shuffle();
        gameStarted = true;

        // Start timer when game begins
        timerInterval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            // Minutes and seconds - stack overflow
            timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    });

    // Reset timer and moves when play again button in win modal is clicked
    document.querySelector("#winModal .playAgainButton").addEventListener("click", function () {
        resetGame();
        shuffle();
        gameStarted = true;
        //Close win modal
        document.getElementById("winModal").style.display = "none";
        // Start timer when game begins
        timerInterval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            // Minutes and seconds - stack overflow
            timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    });
    
    /** Audio */
    // Sfx
    document.addEventListener('DOMContentLoaded', function() {
        // Select the button element or any other element to trigger the audio playback
        const playButton = document.getElementById('play-button');

        // Define the Howl instance
        const SlideClicksound = new Howl({ 
            src: ['assets/audio/slide-click.mp3', 'assets/audio/615099__mlaudio__magic_game_win_success.wav'], 
            preload: true
        });

        // Add click event listener to the button
        playButton.addEventListener('click', function() {
            // Start playing the audio after the user clicks the button
            SlideClicksound.play();
        });
    });

    // Toggle on/off - adapted in codepen from tutorial https://stackoverflow.com/questions/55018585/how-to-turn-on-audio-on-click-icon-play-pause
    // Assign togglePlay function to onclick events of vol-icon a (adapted from: https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link)
    function togglePlay() {
        let modal = document.getElementById("audioModal");
        modal.style.display = "block";
    }

    function resumeSettings() {
        let music = document.getElementById("music");
        let slideClickSound = document.getElementById("slide-click-sound");
        let winSound = document.getElementById("win-sound");

        let musicToggle = document.getElementById("music-toggle").checked;
        let sfxToggle = document.getElementById("sfx-toggle").checked;

        if (musicToggle) {
            music.play();
            document.getElementById("volume-icon").src = "assets/images/vol-on.webp";
        } else {
            music.pause();
            music.currentTime = 0;
            document.getElementById("volume-icon").src = "assets/images/vol-off.webp";
        }

        slideClickSound.muted = !sfxToggle;
        winSound.muted = !sfxToggle;

        // Hide after applying
        document.getElementById("audioModal").style.display = "none";

        audio.addEventListener('load', function () {
            audio.play();
        });
    }

    window.onload = function () {
        let applyBtn = document.getElementById("resumeButton");

        document.getElementById("volume-icon").onclick = togglePlay;
        applyBtn.onclick = resumeSettings;

        let slideClickSound = document.getElementById("slide-click-sound");
        slideClickSound.muted = true;
        slideClickSound.currentTime = 0;

        let winSound = document.getElementById("win-sound");
        winSound.muted = true;
        winSound.currentTime = 0;

        document.getElementById("volume-icon").onclick = togglePlay;
    };

    /** Info Modal */
    // Modal - practiced in codepen and MDN, adapted from tutorial https://www.w3schools.com/howto/howto_css_modals.asp adjusted to use click on image (not button) to open modal
    // Get info modal
    let modal = document.getElementById("myModal");
    // Get icon that opens modal
    let img = document.getElementById("info-modal");
    // Get element that closes modal
    let span = document.getElementsByClassName("close")[0];
    // When user clicks on icon, open modal
    img.onclick = function () {
        modal.style.display = "block";
    };
    // When user clickson x, close modal
    span.onclick = function () {
        modal.style.display = "none";
    };

    /** Hint Modal */
    // Get hint button 
    let hintButton = document.querySelector(".hintButton");
    // Get hint modal element
    let hintModal = document.getElementById("hintModal");
    // Add click event listener to hint button
    hintButton.addEventListener("click", function () {
        // Display hint modal
        hintModal.style.display = "block";
    });
    // Close modal
    hintModal.addEventListener("click", function (event) {
        if (event.target === hintModal || event.target.tagName === 'IMG') {
            hintModal.style.display = "none";
        }
    });
    // Close hint modal when click anywhere on modal (enhances UX)
    window.addEventListener("click", function (event) {
        if (event.target === hintModal) {
            hintModal.style.display = "none";
        }
        // Win Modal
        let winModal = document.getElementById("winModal");
        let winCloseButton = winModal.getElementsByClassName("close")[0];
        winCloseButton.onclick = function () {
            winModal.style.display = "none";
        };
    });
});