
var gameOn, dice, scores, roundscore, activePlayer;

start();
document.querySelector('.btn-roll').addEventListener('click',function()
    {
        if(gameOn==true)
        {
    dice=Math.floor(Math.random()*6)+1;
    document.querySelector('.dice').style.display='block';
    document.querySelector('.dice').src='dice-' + dice + '.png';
    if(dice != 1)
    {
        roundscore += dice;
        document.querySelector('#current-' +activePlayer).textContent= roundscore;
    }
    else
    {
        nextPlayer();        
    }
}
    } );

document.querySelector('.btn-hold').addEventListener('click',function()
{
    if(gameOn)
    {
    scores[activePlayer] += roundscore;
    document.querySelector('#score-' +activePlayer).textContent= scores[activePlayer];
    var input=document.querySelector('.final-score').value;
    if(input){
        winningScore= input;
    }
    else{
        winningScore=50;
    }
    if(scores[activePlayer]>=winningScore)
    {
        document.querySelector('#name-' +activePlayer).textContent= 'WINNER!';
        gameOn=false;
        document.querySelector('.dice').style.display='none';
        document.getElementById('winner-' +activePlayer).style.display='block';
        document.getElementById('name-' +activePlayer).style.color='red';
        document.querySelector('.active-left').style.display='none';
        document.querySelector('.active-right').style.display='none';
    }
    else
    {
        nextPlayer();
    }
}
});

document.querySelector('.btn-new').addEventListener('click',start);

function nextPlayer()
{
    if (activePlayer==0)
        {
            activePlayer=1;
            document.querySelector('.active-right').style.display='block';
            document.querySelector('.active-left').style.display='none';
        }
        else
        {
            activePlayer=0;
            document.querySelector('.active-left').style.display='block';
            document.querySelector('.active-right').style.display='none';
        }
        roundscore=0;

        document.querySelector('#current-0').textContent=0;
        document.querySelector('#current-1').textContent=0;
}

function start(){
    activePlayer= 0;
    scores= [0, 0];
    roundscore= 0;
    gameOn=true;

    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.querySelector('.dice').style.display='none';
    document.querySelector('.active-right').style.display='none';
    document.querySelector('.active-left').style.display='block';
    document.getElementById('name-0').textContent='PLAYER 1';
    document.getElementById('name-1').textContent='PLAYER 2';
    document.getElementById('winner-0').style.display='none';
    document.getElementById('winner-1').style.display='none';
    document.getElementById('name-0').style.color='black';
    document.getElementById('name-1').style.color='black';
}