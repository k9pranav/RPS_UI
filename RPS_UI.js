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

//The code below: When I click a button, it console logs the textContent of the button. I can set it to the player choice.
document.querySelectorAll('#button').forEach(b => b.addEventListener('click', function(e) {
    console.log(this.textContent);
}));


