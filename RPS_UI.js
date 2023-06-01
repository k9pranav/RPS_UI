const buttons = document.querySelector("#buttons");

const rock = document.createElement('button');
rock.textContent = "Rock";
rock.setAttribute('id', 'option')

const paper = document.createElement('button');
paper.setAttribute('id', "option")
paper.textContent = "Paper";

const scissors = document.createElement('button');
scissors.setAttribute("id", "option")
scissors.textContent = 'Scissors';

buttons.appendChild(rock);
buttons.appendChild(paper);
buttons.appendChild(scissors);

const theResult = document.createElement('p');
theResult.textContent = 'The Result: ';
document.body.appendChild(theResult);

let computerScore = 0;
let playerScore = 0;

const computerScoreButton = document.createElement('p');
computerScoreButton.textContent = "Computer Score";
document.body.appendChild(computerScoreButton);

const computerScoreShow = document.createElement('p');
computerScoreShow.innerHTML = String(computerScore);
document.body.appendChild(computerScoreShow);

const playerScoreButton = document.createElement('p');
playerScoreButton.textContent = "Player Score";
document.body.appendChild(playerScoreButton);

const playerScoreShow = document.createElement('p');
playerScoreShow.innerHTML = String(playerScore);
document.body.appendChild(playerScoreShow);

function getComputerChoice() {
    
    const options = ["Rock", 'Paper', "Scissors"];

    let RandomPick = Math.floor(Math.random()*3)

    return options[RandomPick]
}

function playRound(playerSelection, computerSelection) {
    
    // Case 1. Player Chooses Rock
    if (playerSelection.toLowerCase() == 'rock'){
        
        if (computerSelection == 'Paper') {
            computerScore += 1;
            theResult.textContent = 'Computer Won!';
            computerScoreShow.innerHTML = computerScore;

        }

        else if (computerSelection == 'Scissors') {
            playerScore += 1;
            theResult.textContent = "Player Won!";
            playerScoreShow.innerHTML = playerScore;
        }

        else {
            theResult.textContent = "It's a Tie!";
        }

    }

    //Case 2. Player Chooses Paper
    else if (playerSelection.toLowerCase() == 'paper'){
        
        if (computerSelection == 'Scissors') {
            computerScore += 1;
            theResult.textContent = 'Computer Won!';
            computerScoreShow.innerHTML = computerScore;
        }

        else if (computerSelection == 'Rock') {
            playerScore += 1;
            theResult.textContent = 'Player Won!';
            playerScoreShow.innerHTML = playerScore;
        }

        else {
            theResult.textContent = "It's a Tie!";
        }

    }

    //Case 3. Player Chooses Scissors
    else if (playerSelection.toLowerCase() == 'scissors'){
        
        if (computerSelection == 'Rock') {
            computerScore += 1;
            theResult.textContent = 'Computer Won!';
            computerScoreShow.innerHTML = computerScore;
        }

        else if (computerSelection == 'Paper') {
            computerScore += 1;
            theResult.textContent = 'Player Won!';
            playerScoreShow.innerHTML = playerScore;
        }

        else {
            theResult.textContent = "It's a Tie!";
        }

    }
}

let playerSelection = new String();

function game(playerSelection){
    

    if (computerScore <= 4| playerScore <= 4){
        computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection);

        if (computerScore >= 5){
            computerScoreShow.innerHTML = 5;
            playerScoreShow.innerHTML = "--";
            theResult.textContent = "The Computer Won the Game!"
            this.removeEventListener('click', game(this.textContent))
        } else if (playerScore >= 5){
            computerScoreShow.innerHTML = "--";
            playerScoreShow.innerHTML = 5;
            theResult.textContent = "The Player Won the Game!"
            this.removeEventListener('click', game(this.textContent))

        } else {}

        
    } else {}
    
}

/* if (computerScore >= 5| playerScore >= 5){
        if (computerScore >= 5){
            computerScoreShow.innerHTML = 5;
            playerScoreShow.innerHTML = "--"
            theResult.textContent = 'The Computer Won the Game!'
        } else{
            playerScoreShow.innerHTML = 5;
            playerScoreShow.innerHTML = "--";
        }
    } else{}
*/

rock.addEventListener('click', function () {game(this.textContent)})

paper.addEventListener('click', function() {game(this.textContent)})

scissors.addEventListener('click', function() {game(this.textContent)})








