let players = [];
let symbols = ["X", "O"];
let scores = [];
let messageText;
let winValues = [7,56,73,84,146,273,292,448];

scores[0]
let turnOf = 0;
players[0] = "Player1";
players[1] = "Player2";

let gameOver;


function giveName() {
    player1 = document.getElementById("player-1");
    player2 = document.getElementById("player-2");
    if (player1.value == "") {
        players[0] = "Player1"
    }
    else {players[0] = player1.value;}

    if (player2.value == "") {
        players[1] = "Player2"
    }
    
   else{ players[1] = player2.value;}
    scatchBoard();
    document.getElementById("board").classList.remove("hide");
    document.getElementById("buttons").classList.remove("hide");
    document.getElementById("form").classList.add("hide");
}
function reset(){
    gameOver = false;
    scores = [0, 0];
    messageText = document.getElementById("turn-text");
    messageText.innerText = "";
    scatchBoard();
}

function scatchBoard() {
    var board = document.getElementById("board");
    var display="";
    var unique = 1
    for (var i=0; i < 9; i++) {
        display += '<div onclick="playGame(this,'+unique+');" class="box"></div>';
        unique=unique*2;
    }
    board.innerHTML = display;
    
}

//helpers
function updateGameMessage(message=false) {
    if(!message){
        messageText.innerText= players[turnOf] + "'s turn "
    }
    else {messageText.innerText = message;}
}

function refresh() {
    location.reload();
    document.getElementById("form").classList.remove("hide");
    document.getElementById("board").classList.add("hide");
    document.getElementById("buttons").classList.add("hide");
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

    updateGameMessage();
}
//Keep track of whose turn

//Create players

//win algorithm

//reset game