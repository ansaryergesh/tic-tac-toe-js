let players = [];
let symbols = ["X","O"];
let scores = [0, 0];

let winValues = [7,56,73,84,146,273,292,448];

scores[0]
let turnOf = 0;
players[0] = "Player1";
players[1] = "Player2";

//Build Board


//Check if winning

function winCheck() {
    for (var i = 0; i< winValues.length; i++){
        if((scores[turnOf] & winValues[i]) == winValues[i]){
            alert(players[turnOf] + " Wins");
        }
    }
}
//Play the game

function playGame(clickDiv, boxValue) {
    scores[turnOf] += boxValue;

    clickDiv.onclick = "";
    clickDiv.innerHTML = "<span> "+ symbols[turnOf] +" </span>";
    winCheck();
    switchTurn();
}

function switchTurn() {
    if(turnOf == 0) turnOf = 1; 
    else turnOf = 0;

    document.getElementById("turn-text").innerText = players[turnOf] + "'s turn "
}
//Keep track of whose turn

//Create players

//win algorithm

//reset game