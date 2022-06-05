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
    console.log(computerchoice);
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
    if(result=="draw")
    {
        console.log("It's a tie! You and your opponent made the same choice")
        return "It's a tie! You and your opponent made the same choice"
    }
    else if (result=="win")
    {
        console.log(`You win! ${playerchoice} beats ${computerchoice}`)
        return `You win! ${playerchoice} beats ${computerchoice}`
    }
    else if (result=="lose")
    {
        console.log(`You lose! ${computerchoice} beats ${playerchoice}`)
        return `You lose! ${computerchoice} beats ${playerchoice}`
    }
}