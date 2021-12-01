function computerPlay(){
    let choices = ['Rock', 'Scissors', 'Paper']
    return choices[Math.round(Math.random() * 2)]
}

// return the winner of the round
function singleRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "tie"
    } else if ([['Rock', 'Scissors'], ['Scissors', 'Paper'], ['Paper', 'Rock']].some(([winner, loser]) => winner === playerSelection && loser === computerSelection)){
        return "player";
    } else {
        return "computer";
    }
}

function getDisplay(result, playerSelection, computerSelection){
    if (result === "tie"){
        return "It's a tie!"
    } else if (result === "player"){
        return `It's a win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `It's a loss! ${computerSelection} beats ${playerSelection}!`;
    }
}

function updateScore(result){
    if (result !== "tie"){
        scoreElement = document.querySelector(`#${result}-score`)
        score = +scoreElement.textContent
        score++;
        scoreElement.textContent = score;
        return score;
    }
}

function game(playerSelection){
    let computerSelection = computerPlay();
    let winner = singleRound(playerSelection, computerSelection);
    let winnerText = getDisplay(winner, playerSelection, computerSelection);
    let winnerScore = updateScore(winner);
    if (winnerScore === 5){
        winnerText += ` ${winner} has won!`;
        document.querySelectorAll("button").forEach(button => button.disabled = true);
    }
    document.querySelector(".result").textContent = winnerText;

    
}

document.querySelectorAll("button").forEach(button => button.addEventListener("click", () => game(button.dataset.choice)));
