const playerText=document.querySelector('#playerText');
const computerText=document.querySelector('#computerText');
const resultText=document.querySelector('#resultText');
const choice=document.querySelectorAll('.choose-butto');

var player;
var computer;
var result;

choice.forEach(button => button.addEventListener("click",()  => {
    player =button.textContent;
    computerturn();
    playerText.textContent = `player: ${player}`;
    computerText.textContent=`computer: ${computer}`;
    resultText.textContent=checkWinner();

}));

function computerturn(){
    const randNum = Math.floor(Math.random()*3)+1 ;

    switch(randNum){
        case 1:
            computer = "rock";
            break;
        case 2:
            computer = "paper";
            break;
        case 3:
            computer = "scissors";
            break;
    }
}

function checkWinner(){
    if(player==computer){
        return "draw" ;
    }
    else if (computer == "rock"){
        return (player == "paper") ? "you win" : "you lose"
    }
    else if (computer == "paper"){
        return (player == "scissor") ? "you win" : "you lose"
    }
    else if (computer == "scissors"){
        return (player == "rock") ? "you win" : "you lose"
    }
}