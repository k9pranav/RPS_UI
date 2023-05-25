// The actual game code from RockPaperScissors file

//Selects a random choice for the computer
function getComputerChoice() {
    
    const options = ["Rock", 'Paper', "Scissors"];

    let RandomPick = Math.floor(Math.random()*3)

    return options[RandomPick]
}

//The function tells who won. 

function playRound(playerSelection, computerSelection) {
    // Case 1. Player Chooses Rock
    if (playerSelection.toLowerCase() == 'rock'){
        
        if (computerSelection == 'Paper') {
            computerScore += 1;
            return ('Computer Won! Your score is ' +  playerScore + ' and computer score is ' + computerScore)
        }

        else if (computerSelection == 'Scissors') {
            playerScore += 1;
            return ("Player Won! Your score is " +  playerScore + ' and computer score is ' + computerScore)
        }

        else {
            return "It's a Tie!"
        }

    }

    //Case 2. Player Chooses Paper
    else if (playerSelection.toLowerCase() == 'paper'){
        
        if (computerSelection == 'Scissors') {
            computerScore += 1;
            return ('Computer Won! Your score is ' +  playerScore + ' and computer score is ' + computerScore)
        }

        else if (computerSelection == 'Rock') {
            playerScore += 1;
            return("Player Won! Your score is " +  playerScore + ' and computer score is ' + computerScore)
        }

        else {
            return "It's a Tie!"
        }

    }

    //Case 3. Player Chooses Scissors
    else if (playerSelection.toLowerCase() == 'scissors'){
        
        if (computerSelection == 'Rock') {
            computerScore += 1;
            return('Computer Won! Your score is ' +  playerScore + ' and computer score is ' + computerScore)
        }

        else if (computerSelection == 'Paper') {
            computerScore += 1;
            return("Player Won! Your score is " +  playerScore + ' and computer score is ' + computerScore)
        }

        else {
            return "It's a Tie!"
        }

    }

    //Case 4. Player puts something Random

    else {
        return "Invalid Input"
    }


}

function game(){
    while (playerScore <= 5 || computerScore <= 5){
        if (playerScore == 5) {
            return "Player Won"
        }

        else if (computerScore == 5) {
            return "Computer Won"
        }

        else {
            let playerSelection = this.textContent;
            let computerSelection = getComputerChoice();
            playerScorebtn.innerHTML = "The computer picked: " + computerSelection + playRound(playerSelection, computerSelection);
        }

    }    
}


const buttons = document.querySelector("#buttons");

const rock = document.createElement('button');
rock.textContent = "Rock";
rock.setAttribute('id', 'button')

const paper = document.createElement('button');
paper.setAttribute('id', "button")
paper.textContent = "Paper";

const scissors = document.createElement('button');
scissors.setAttribute("id", "button")
scissors.textContent = 'Scissors';

buttons.appendChild(rock);
buttons.appendChild(paper);
buttons.appendChild(scissors);

// const playerScorebtn = document.querySelector('#playerScore');
// const compScorebtn = document.querySelector('#computerScore');

// let playerScore = 0;
// let compScore = 0;

const playerScorebtn = document.createElement('p');
playerScorebtn.setAttribute('id', 'playerScore');
buttons.appendChild(playerScorebtn)

let playerScore = 0;
let computerScore = 0;

console.log(playerScore);
console.log(computerScore);

//The code below: When I click a button, it console logs the textContent of the button. I can set it to the player choice.

if (computerScore == 5){
    playerScorebtn.innerHTML = "The Player Won!";
} else if (computerScore == 5){
    playerScorebtn.innerHTML = "The Computer Won!";
} else {
    document.querySelectorAll("#button").forEach(b => b.addEventListener('click', function(e){
        let playerSelection = this.textContent;
        let computerSelection = getComputerChoice();
        playerScorebtn.innerHTML = "The computer picked: " + computerSelection + ". " + playRound(playerSelection, computerSelection);
    } ) )
}



// document.querySelectorAll('#button').forEach(b => b.addEventListener('click', function(e) {  
    
//    let playerSelection = this.textContent;
//    let computerSelection = getComputerChoice();

//    if (playerScore == 5){
//        playerScorebtn.innerHTML = "The Player Won!";
//    } else if (computerScore == 5){
//        playerScorebtn.innerHTML = "The Computer Won!";
//    } else{

//        playerScorebtn.innerHTML = "The computer picked: " + computerSelection + ". " + playRound(playerSelection, computerSelection);
//    }
    

//}));


// playerScorebtn.textContent = playerScore;


