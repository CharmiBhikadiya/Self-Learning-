var playing = false;
var score;
var action;
var timeremain;
var correctAns;
//if we click on strt/reset button
document.getElementById("startreset").onclick = function(){
    //if we are playing and select the reset button
    if(playing == true){
       location.reload(); ////reset button: reload the page
       }
    
    else{//if we are not playing or just going to start the game and select the start game button
        
        //change mode to playing
        playing = true;
        
        //set score to 0
        score = 0; 

document.getElementById("scorevalue").innerHTML = score; 
        
    //show countdownbox
    show("timeremain");
        timeremain = 60;
    
document.getElementById("timeremainvalue").innerHTML = timeremain;
    
        //hide the gameover box
        hide("gameover");
   
        //change button to reset
document.getElementById("startreset").innerHTML = "Reset Game"; 
        
    //start countdown
        startCountdown();
        
    //generate new Q&A
       generateQA();
       }
}
//clicking on answer box
for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    //check if we are playing
    if(playing==true){//yes
        if(this.innerHTML==correctAns){
            //correct answer
            
            //increase score by 1
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            
            //hide the wrong box;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            //gernerate a new QA
            generateQA();
        }else{
            //wrong answer
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);
        }
    }
}
}
//functions 

//start counter
function startCountdown(){
    action = setInterval(function(){
        timeremain -= 1;//decreasing time by 1sec
        document.getElementById("timeremainvalue").innerHTML = timeremain;
        if(timeremain == 0){// game over
            stopCountdown();
            show("gameover");
         document.getElementById("gameover").innerHTML = "<p>Game over!</p><p>Your score is " + score + ".</p>";   
            hide("timeremain");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);    
}                     
//stop counter                         
function stopCountdown(){
        clearInterval(action); 
    }
 
//hide an element    
function hide(id){
   document.getElementById(id).style.display = "none"; 
}
//show an element    
function show(Id){
    document.getElementById(Id).style.display = "block";   
}
//generate new QA
function generateQA(){
    var x = Math.round(10*Math.random());
    var y = Math.round(10*Math.random());
    correctAns = x * y;
    document.getElementById("question").innerHTML = x + "x" +y;
    
    var correctPos = 1+Math.round(3*Math.random());
    
    document.getElementById("box"+correctPos).innerHTML = correctAns;//fill one box with the correct answer
    
    //fill other boxes with wrong answer
    var answers = [correctAns, ];
    
    for(i=1; i<5; i++){
        if(i!= correctPos){
         var wrongAns;
           do{
               {
                wrongAns = (Math.round(10*Math.random()))*(Math.round(10*Math.random())) ; 
            }
           } while(answers.indexOf(wrongAns)>-1)
            document.getElementById("box"+i).innerHTML = wrongAns;
            answers.push(wrongAns);
        }
    }
}

    //if we are playing 
        //reset button: reload the page
    //if we are not playing
        //set score to 0
        //show countdownbox
        //(start countdown)reduce the time by 1sec in loops
            //timeleft?
                //yes-continue
                //no-gameover
        //change button to reset
        //generte new Q&A


//if we click on answerbox
    //if we are playing
        //correct?
            //yes
                //increase the score by one
                //show correct box for 1sec
                //generate new Q&A
            //no
                //show try again box for 1sec