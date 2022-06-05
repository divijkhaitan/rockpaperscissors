function computerplay()
{
    let a= Math.ceil(Math.random()*3);
    let computerchoice="";
    if (a==1)
    {
        computerchoice="Rock";
    }
    if (a==2)
    {
        computerchoice="Paper";
    }
    if (a==3)
    {
        computerchoice="Scissors";
    }
    console.log(computerchoice);
}

computerplay();