const btn = Array.from(document.getElementsByClassName('btn'));
const headingText = document.getElementById('result');
const scoretext = document.getElementById('playerscore');
const computertext = document.getElementById('computerscore');

var player;
var computer;
var result;
var playerscore = 0;
var computerscore = 0;

btn.forEach( function(button){
    button.addEventListener("click" , ()=>{
        player = button.value;
        computerMove();
        result = checkWinner();
        headingText.innerText = result;

        if(result == "you win"){
            playerscore++;
            scoretext.innerText= "player:" + " " +playerscore ;
        }
        else if(result == "computer win") {
            computerscore++;
            computertext.innerText = "computer:" + " "+computerscore ;
        }
    });
});

function computerMove(){
    var randNum = Math.floor(Math.random()*3)+1;

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
        default:
            computer ="error";
            break;  
    }
}

function checkWinner(){
    if(player == computer) {
        return "draw" ;
    }
    else if(computer == "rock") {
        return (player == "paper") ?  "you win" : "computer win"
    }
    else if(computer == "scissors") {
        return (player == "rock") ? "you win" : "computer win"
    }
    else if(computer == "paper") {
        return (player == "scissors") ? "you win" : "computer win"
    } 

}