'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent='correct number🍷';

// document.querySelector('.number').textContent=13;
// document.querySelector('.score') .textContent =20;

// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);
let  secretNumber=  Math.trunc(Math.random()*20)+1;
let score =20;
let highscore=0;


 


document.querySelector('.check').addEventListener('click',function(){
    const guess= Number(document.querySelector('.guess').value);
    console.log(guess);
// when ther is no input value
    if(!guess){
        document.querySelector('.message').textContent='no number!🤷‍♀️';
        // the correct number 
    }
    else if(guess===secretNumber) {
       document.querySelector ('.message').textContent='correct number😉';
       document.querySelector('body').style.backgroundColor='#1F5';

       document.querySelector('.number').style.width='30rem';
       document.querySelector('.number').textContent= secretNumber;
       if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
       }
    //    when guess is
     }
        else if(guess>secretNumber){
        //  if the number is to high 
        if(score >1){

        document.querySelector('.message').textContent='Too high 🤦‍♀️';
        score--;
        document.querySelector('.score').textContent=score;
        
        }else{
            // if the score is equal to 0
            
            document.querySelector('.message').textContent=' you lost the game 😶‍🌫️';
            document.querySelector('.score').textContent=0;
        }
     }else if(guess<secretNumber){
        if(score >1){
// to loww
            document.querySelector('.message').textContent='Too low 🤦‍♀️';
            score--;
            document.querySelector('.score').textContent=score;
            
            }else{
                
                document.querySelector('.message').textContent=' you lost the game 😶‍🌫️';
                document.querySelector('.score').textContent=0;
            }
        // document.querySelector('.message').textContent='Too Low 😒';
        // score--;
        // document.querySelector('.score').textContent=score;
     }

});


document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber=  Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing...'
    document.querySelector('.score').textContent= score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value=' ';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';



}) ;
if(guess>secretNumber){
    document.querySelector('.message').textContent='invallied number🤯';
}