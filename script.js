function computerPlay()
{
    let aux = Math.floor(Math.random()*3);
    switch(aux)
    {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection)
{
    const playerAux = playerSelection.toUpperCase();
    const computerAux = computerSelection.toUpperCase();
    if(playerAux == computerAux)
        return 0;
    if(playerAux == "ROCK")
    {
        if(computerAux == "SCISSORS")
            return 1;
        return -1;
    }
    if(playerAux == "PAPER")
    {
        if(computerAux == "ROCK")
            return 1;
        return -1;
    }
    if(computerAux == "PAPER")
        return 1;
    return -1;
}

function checkInput(input)
{
    input = input.toUpperCase();
    if(input == "ROCK" || input == "PAPER" || input == "SCISSORS")
        return 1;
    return 0;
}

function correctInput()
{
    let ok = 0;
    let playerSelection = window.prompt("Rock/Paper/Scissors?");
    if(checkInput(playerSelection) == 0)
    while(ok == 0)
    {
        playerSelection = window.prompt("Incorrect input, please choose: Rock/Paper/Scissors?");
        if(checkInput(playerSelection) == 1)
            ok = 1;
    }
    return playerSelection;
}

function game()
{
    let playerPoints = 0, computerPoints = 0;
    for(let i = 0; i < 5; i++)
        {
            const playerSelection = correctInput();
            const computerSelection = computerPlay();
            const roundResult = playRound(playerSelection, computerSelection);
            console.log(roundResult);
            if(roundResult == 1) 
                playerPoints++;
            else if(roundResult == -1)
                computerPoints++;
        }
    if(playerPoints > computerPoints)
        console.log("You won.")
    else if(playerPoints < computerPoints)
        console.log("You lost.")
    else console.log("It's a tie.")
}

game();