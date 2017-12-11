var playing = false;
var score;
var trialsleft;
var step;
var action; //used for setInterval function
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'watermelon'];
$(function(){

    //click on start or reset button
    $("#startreset").click(function(){
    if(playing == true){ //if we are already playing

    location.reload(); //reload the page
    }else{ //we are not playing

    playing = true;  //game initiated

    score = 0; //set score to 0

    $("#scorevalue").html(score);
    $("#trialsleft").show(); //show trials left
    trialsleft = 3;
    addHearts();

    //hide game over box
    $("#gameover").hide();

    //change button text to rest game
    $("#startreset").html("reset Game");

    //start sending fruits
    startAction();
   }
});   

//slice a fruit   
$("#fruit1").mouseover(function(){
    score++;
    $("#scorevalue").html(score); //update score
//    document.getElementById("slicesound").play();
    $("#slicesound")[0].play();//play sound
    
    //stop fruit
    clearInterval(action);
    
    //hide fruit
    $("#fruit1").hide("explode", 500); //slice fruit
    
    //send new fruit
    setTimeout(startAction, 500);
});
 
    
    //all functions
function addHearts(){
    $("#trialsleft").empty();
    for(i = 0; i< trialsleft; i++){
               $("#trialsleft").append('<img src= "images/heart.png" class="life">');
               
           }
}

function startAction(){
    //generate a fruit
    $("#fruit1").show();
    chooseFruit(); //choose a random fruit
    $("#fruit1").css({
       left: Math.round(500*Math.random()),
       top: -50 //random position
    });
       //generate random step
       step = 1 + Math.round(5*Math.random()); //change step
        
        //move fruit down by one step every 10ms
        action = setInterval( function(){
        //move fruit down by one step
        $("#fruit1").css('top', $("#fruit1").position().top + step );
            
        //check if fruit is too low
        if($("#fruit1").position().top > $("#fruitscontainer").height()){
               
            //check if any trials left
                if(trialsleft > 1){
                    $("#fruit1").show();
                    chooseFruit(); //choose a random fruit
                    $("#fruit1").css({
                    left: Math.round(500*Math.random()),
                    top: -50 //random position
                    });
                   //generate random step
                step = 1 + 
                Math.round(5*Math.random()); //change step  
                
                //reduce the num of trial by one
                trialsleft --;
                
                //populate trialsleft box
                addHearts();
                    
                }else{ //game over
                 playing = false; //we are not playing anymore.
                    $("#startreset").html("start Game"); 
                  
                    //change button text to start game
                    $("#gameover").show();
                    
                    $("#gameover").html('<p>Game Over</p> <p>Your score is ' + score + '</p>');
                    $("#trialsleft").hide();
                    stopAction();
                }
                    
               }
          }, 10)
}

//generate a random fruit
function chooseFruit(){
    $("#fruit1").attr('src', 'images/' + fruits[Math.round(8*Math.random())] + '.png');
}

//stop dropping fruit
function stopAction(){
clearInterval(action);
    ("#fruit1").hide();
}

});