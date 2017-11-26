(function () {
    function Player(sign, isComputer) {
        this.sign = sign;
        this.isComputer = isComputer;
    }

    var playerX = new Player("X", false);
    var playerO = new Player("O", true);
    var activePlayer = playerX;
    var gameEnded = false;


    function nextPlayer(player1, player2) {
        if (activePlayer === player1) {
            activePlayer = player2
        } else {
            activePlayer = player1;
        }
    }

    function getCell(row, col) {
        return document.querySelector('#cell-' + row + '-' + col).innerText;
    }

    function endGame(message) {
        alert(message);
        gameEnded = true;
    }

    function resetGame() {
        cells.forEach(function (cell) {
            cell.innerText = "";
            gameEnded = false;
            activePlayer = playerX;
        })
    }

    function checkWin() {
        if (getCell(0, 0) === playerX.sign && getCell(1, 0) === playerX.sign && getCell(2, 0) === playerX.sign) {
            return endGame("Player X won!");
        }

        if (getCell(0, 0) === playerO.sign && getCell(1, 0) === playerO.sign && getCell(2, 0) === playerO.sign) {
            return endGame("Player O won!");
        }

        if (getCell(0, 1) === playerX.sign && getCell(1, 1) === playerX.sign && getCell(2, 1) === playerX.sign) {
            return endGame("Player X won!");
        }

        if (getCell(0, 1) === playerO.sign && getCell(1, 1) === playerO.sign && getCell(2, 1) === playerO.sign) {
            return endGame("Player O won!");
        }

        if (getCell(0, 2) === playerX.sign && getCell(1, 2) === playerX.sign && getCell(2, 2) === playerX.sign) {
            return endGame("Player X won!");
        }

        if (getCell(0, 2) === playerO.sign && getCell(1, 2) === playerO.sign && getCell(2, 2) === playerO.sign) {
            return endGame("Player O won!");
        }

        if (getCell(0, 0) === playerX.sign && getCell(0, 1) === playerX.sign && getCell(0, 2) === playerX.sign) {
            return endGame("Player X won!");
        }

        if (getCell(0, 0) === playerO.sign && getCell(0, 1) === playerO.sign && getCell(0, 2) === playerO.sign) {
            return endGame("Player O won!");
        }

        if (getCell(1, 0) === playerX.sign && getCell(1, 1) === playerX.sign && getCell(1, 2) === playerX.sign) {
            return endGame("Player X won!");
        }

        if (getCell(1, 0) === playerO.sign && getCell(1, 1) === playerO.sign && getCell(1, 2) === playerO.sign) {
            return endGame("Player O won!");
        }

        if (getCell(2, 0) === playerX.sign && getCell(2, 1) === playerX.sign && getCell(2, 2) === playerX.sign) {
            return endGame("Player X won!");
        }

        if (getCell(2, 0) === playerO.sign && getCell(2, 1) === playerO.sign && getCell(2, 2) === playerO.sign) {
            return endGame("Player O won!");
        }

        if (getCell(0, 0) === playerX.sign && getCell(1, 1) === playerX.sign && getCell(2, 2) === playerX.sign) {
            return endGame("Player X won!");
        }

        if (getCell(0, 0) === playerO.sign && getCell(1, 1) === playerO.sign && getCell(2, 2) === playerO.sign) {
            return endGame("Player O won!");
        }

        if (getCell(0, 2) === playerX.sign && getCell(1, 1) === playerX.sign && getCell(2, 0) === playerX.sign) {
            return endGame("Player X won!");
        }

        if (getCell(0, 2) === playerO.sign && getCell(1, 1) === playerO.sign && getCell(2, 0) === playerO.sign) {
            return endGame("Player O won!");
        }

        if (getFreeCells().length === 0) {
            return endGame("It is a tie");
        }
    }

    function getFreeCells() {
       return cells.filter(function (cell) {
            return cell.innerText === "";
        });
    }

    function computerMove() {
        var freeCells = getFreeCells();

        var randomIndex = Math.floor(Math.random() * freeCells.length);
        var cell = freeCells[randomIndex];
        cell.innerText = activePlayer.sign;
        nextPlayer(playerX, playerO);
        checkWin();
    }

    function gameStartsWithXByPlayer() {
        playerX.isComputer = false;
        playerO.isComputer = true;
        resetGame();
    }

    function gameStartsWithXByComputer() {
        playerX.isComputer = true;
        playerO.isComputer= false;
        resetGame();
        computerMove();
    }

    var player = document.querySelector('#player');
    player.addEventListener('click', gameStartsWithXByPlayer);

    var computer = document.querySelector('#computer');
    computer.addEventListener('click', gameStartsWithXByComputer);

    var cells = Array.prototype.slice.call(document.querySelectorAll('.cell-board'));
    var reset = document.querySelector('#reset');
    reset.addEventListener('click', resetGame);

    cells.forEach(function (cell) {
        cell.addEventListener('click', function (e) {
            if (cell.innerText !== '') {
                return;
            }

            if (gameEnded === true) {
                return alert("The game is over! You can't make a turn.");
            }

            cell.innerText = activePlayer.sign;
            nextPlayer(playerX, playerO);
            checkWin();

            if (activePlayer.isComputer && !gameEnded) {
                computerMove();
            }

        });
    })
})();
