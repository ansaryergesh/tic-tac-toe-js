let players = [];
let symbols = ["X","O"];
let scores = [0, 0];

let winValues = [7,56,73,84,146,273,292,448];

let gameOver = false;

scores[0]
let turnOf = 0;
players[0] = "Player1";
players[1] = "Player2";

//Build Board

//helpers
function updateGameMessage(message) {
    document.getElementById("turn-text").innerText = message;
}
//Check if winning

function winCheck() {
    for (var i = 0; i< winValues.length; i++){
        if((scores[turnOf] & winValues[i]) == winValues[i]){
            updateGameMessage(players[turnOf] + " Wins!");
            gameOver = true;
        }

    }

    
    if (((scores[0] + scores[1]) == 511) && !gameOver) {
        updateGameMessage(" Draw!")
        gameOver = true;
    }
}
//Play the game

function playGame(clickDiv, boxValue) {
    if (!gameOver) {
    scores[turnOf] += boxValue;

    clickDiv.onclick = "";
    clickDiv.innerHTML = "<span> "+ symbols[turnOf] +" </span>";
    winCheck();
    if (!gameOver) {switchTurn();}
    }
}

function switchTurn() {
    if(turnOf == 0) turnOf = 1; 
    else turnOf = 0;

    updateGameMessage(players[turnOf] + "'s turn ");
}
//Keep track of whose turn

//Create players

//win algorithm

//reset game