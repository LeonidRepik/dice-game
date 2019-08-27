 /*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore,activePlayer,dice,gamePlaying,diceArray,winScore,lastElement;

int();
document.querySelector('.dice').style.display = 'none'; 
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//Ananimus function -------------------

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gamePlaying){
        
         // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    // 2. Display the result
    console.log(dice + ' ' + dice2);
   var diceDom = document.querySelector('.dice');
    var diceDom2 = document.querySelector('.dice2');
    
   document.querySelector('.dice').style.display = 'block';
   document.querySelector('.dice2').style.display = 'block';
    
    
    diceDom.src = 'dice-' + dice +'.png';
    diceDom2.src = 'dice-' + dice2 +'.png';
    
    diceArray.push(dice);
        lastElement=diceArray[diceArray.length-2];
         //4.IF player got two six dices in a row
        
        if(dice === lastElement && dice === 6){
            console.log(diceArray);
                document.getElementById('score-'+activePlayer).textContent=0;
                scores[activePlayer] = 0;
                nextPlayer();
        }
            
        
        
        
    //3. Update the round score IF the rolled number ! = 1
        
        
        
    if(dice !== 1 && dice2 !== 1){
        //Add score
        roundScore += dice+dice2;
    document.querySelector('#current-'+ activePlayer).textContent = roundScore;
        
        
    } else{
        //Next player
       nextPlayer();
        
        
    }
       
        
        
        
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    
    
        winScore = document.getElementById('winScore').value;
        console.log(winScore);
    
            if(winScore){
                
            }else{
                winScore = 100;
            }
                
            
    
    if(scores[activePlayer] >= winScore){
        return gamePlaying=false;
    }else{
    
    //1. Add curents score to global score
    
    scores[activePlayer] += roundScore;
    
    
    //2. Update the UI
    
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //3. Chek the winner
    if(scores[activePlayer] >= winScore){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner'; 
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
        
        document.querySelector('.player-'+ activePlayer+'-panel').classList.remove('active');
         document.querySelector('.player-'+ activePlayer+'-panel').classList.add('winner');
        

    }else{
        //4.Next player
        nextPlayer();
    }
    }
})


function nextPlayer(){
    

    
    
    
    //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        diceArray=[];
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
       document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
        
    
    
     //document.querySelector('.player-0-panel').classList.remove('active');
       // document.querySelector('.player-1-panel').classList.add('active');
    
        
}

    document.querySelector('.btn-new').addEventListener('click',int);

function int(){
roundScore =0;
scores=[0,0];
score = 0;
activePlayer = 0;
gamePlaying = true;
    diceArray=[];
    
    
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
        
        
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        
    
        document.getElementById('current-0').textContent = roundScore;
        document.getElementById('current-0').textContent = roundScore;
    
        document.querySelector('.player-0-panel').classList.add('active');
    
        document.getElementById('name-0').textContent = 'PLAYER 1'; 
        document.getElementById('name-1').textContent = 'PLAYER 2'; 
        
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    
}



























