function computerPlay(){
    let choices = ['Rock', 'Scissors', 'Paper']
    return choices[Math.round(Math.random() * 3)]
}

function capitalize(s){
    return s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : s; 
}

function singleRound(playerSelection, computerSelection){
    playerSelection = capitalize(playerSelection)
    if (playerSelection === computerSelection){
        return "It's a tie!"
    } else if ([['Rock', 'Scissors'], ['Scissors', 'Paper'], ['Paper', 'Rock']].some(([winner, loser]) => winner === playerSelection && loser === computerSelection)){
        return `It's a win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `It's a loss! ${computerSelection} beats ${playerSelection}!`;
    }
}

// console.log(singleRound('Rock', 'Scissors'));
// console.log(singleRound('Rock', 'Paper'));
// console.log(singleRound('Rock', 'Rock'));

function game(){
    for (let i = 0; i < 5; i++){
        playerSelection = prompt('Choose Rock, Paper or Scissors: ')
        computerSelection = computerPlay();
        alert(singleRound(playerSelection, computerPlay()));
    }
}

game();