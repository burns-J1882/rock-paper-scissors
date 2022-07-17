console.log('hello world')

/*
function getComputerChoice to randomly pick rock paper or scissors
function playerSelection to select rock paper or scissors (make case insensitive)
function playRound that compares choices
returns win or loss for the player
make a loop to play 5 rounds
*/

let choice = ['rock', 'paper', 'scissors']
//testing to track wins and losses
let win = 0;
let loss = 0;
let draw = 0;

function computerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

function playerSelection() {
    let input = prompt('Please type one of rock, paper or scissors');
    return input.toLowerCase();
}

function playRound () {
    let user = playerSelection();
    let computer = computerChoice();
    if (user == computer) {
        console.log(`You both played ${user}, its a tie!`);
        //add one to draw
        draw++;
    } else if (user == 'rock' && computer == 'scissors' || user == 'paper' && computer == 'rock' || user == 'scissors' && computer == 'rock'){
        console.log(`${user} beats ${computer} you win!`);
        //add one to win
        win++
    } else {
        console.log(`${computer} beats ${user}, You lose!`)
        //add one to loss
        loss++;
    }
}

function game() {
    for (let i = 0; i < 5; i++){
        playRound();
    }
    //logging win lose draws
    console.log(`your final score is ${win} wins, ${loss} losses, and ${draw} draws`)
}