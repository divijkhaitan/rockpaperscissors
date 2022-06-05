function computerplay()
{
    let a= Math.ceil(Math.random()*3);
    let computerchoice="";
    if (a==1)
    {
        computerchoice="rock";
    }
    if (a==2)
    {
        computerchoice="paper";
    }
    if (a==3)
    {
        computerchoice="scissors";
    }
    return computerchoice;
}

function round(playerchoice, computerchoice)
{   let result="";
    if (playerchoice=="rock")
    {
        if (computerchoice=="rock")
        {
            result="draw"
        }
        if (computerchoice=="paper")
        {
            result="lose"
        }
        if (computerchoice=="scissors")
        {
            result="win"
        }
    }
    if (playerchoice=="paper")
    {
        if (computerchoice=="rock")
        {
            result="win"
        }
        if (computerchoice=="paper")
        {
            result="draw"
        }
        if (computerchoice=="scissors")
        {
            result="lose"
        }
    }
    if (playerchoice=="scissors")
    {
        if (computerchoice=="rock")
        {
            result="lose"
        }
        if (computerchoice=="paper")
        {
            result="win"
        }
        if (computerchoice=="scissors")
        {
            result="draw"
        }
    }
    return result;
}

function game()
{
    let playerscore=0
    let computerscore=0
    let computerchoice=""
    let playerchoice=""
    while((computerscore+playerscore)<5)
    {
        playerchoice=prompt("Choose your object").toLowerCase()
        computerchoice=computerplay()
    
        let result=round(playerchoice,computerchoice);
        if(result=="draw")
        {
            console.log( "It's a tie! You and your opponent made the same choice")
        }
        else if (result=="win")
        {
            playerscore++;
            console.log( `You win! ${playerchoice} beats ${computerchoice}`)
        }
        else if (result=="lose")
        {
            computerscore++;
            console.log(`You lose! ${computerchoice} beats ${playerchoice}`)
        }
        console.log(result);
    }
    if(playerscore>computerscore)
    {
        console.log(`You win ${playerscore} - ${computerscore}`)
    }
    else
    {
        console.log(`You lose ${playerscore} - ${computerscore}`)
    }
}