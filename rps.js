const buttons = document.querySelectorAll('.options');
const psidv=  document.querySelector('.scoreplay')
const csidv=  document.querySelector('.scorecomp')
const messidv=  document.querySelector('.message')
const resdiv=  document.querySelector('.results')
let playerscore=0
let computerscore=0
let computerchoice=""
let playerchoice=""
buttons.forEach(button=>button.addEventListener('click',clicked))

function game()
{
    while((computerscore<5)&&(playerscore<5))
    {
        playerchoice=prompt("Choose your object").toLowerCase()
        computerchoice=computerplay()
        
        let result=round(playerchoice,computerchoice);
        if(result=="draw")
        {
            messidv.textContent= `It's a tie! Both players chose ${computerchoice}`;
        }
        else if (result=="win")
        {
            playerscore++;
            messidv.textContent=`You win! ${playerchoice} beats ${computerchoice}`;
            psidv.textContent=playerscore
        }
        else if (result=="lose")
        {
            computerscore++;
            messidv.textContent=`You lose! ${computerchoice} beats ${playerchoice}`;
            csidv.textContent=computerscore
        }
        console.log(result);
    }
    /*if(playerscore>computerscore)
    {
        console.log(`You win ${playerscore} - ${computerscore}`)
    }
    else
    {
        console.log(`You lose ${playerscore} - ${computerscore}`)
    }*/
}

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
function clicked(event)
{
    playerchoice= event.target.getAttribute('id');
    computerchoice=computerplay();
    console.log(playerchoice)
    if(playerscore<5 &&computerscore<5)
    {
        let result=round(playerchoice,computerchoice);
        if(result=="draw")
        {
            messidv.textContent= `It's a tie! Both players chose ${computerchoice}`;
        }
        else if (result=="win")
        {
            playerscore++;
            messidv.textContent=`You win! ${playerchoice} beats ${computerchoice}`;
            psidv.textContent=playerscore
        }
        else if (result=="lose")
        {
            computerscore++;
            messidv.textContent=`You lose! ${computerchoice} beats ${playerchoice}`;
            csidv.textContent=computerscore
        }
    
    }
    if(playerscore==5 || computerscore==5)
    {
        buttons.forEach(button=>button.removeEventListener('click',clicked))
        //show message highliting win/loss
        if(playerscore==5)
        {
            resdiv.textContent=` You win! Congratulations`
        }
        else if(computerscore==5)
        {
            resdiv.textContent=` You lose. Maybe next time`
        }
    }
}
