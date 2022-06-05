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
    if(result=="draw")
    {
        return "It's a tie! You and your opponent made the same choice"
    }
    else if (result=="win")
    {
        return `You win! ${playerchoice} beats ${computerchoice}`
    }
    else if (result=="lose")
    {
        return `You lose! ${computerchoice} beats ${playerchoice}`
    }
}

function game()
{
    let playerscore=0
    let computerscore=0
    for (let i=0;i<5;i++)
    {
        let res=round(prompt("Choose your object").toLowerCase(),computerplay());
        console.log(res);
    }
}