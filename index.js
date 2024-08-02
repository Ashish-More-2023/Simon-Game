var gamepattern = [];
var playerpattern = [];
var buttonColors = ["red","blue","green","yellow"];

var level = 0;

startgame();
function patterncontinue(){
 playerpattern = [];
 level++;   
 $("h1").text("level " + level);
var random_number = Math.floor(Math.random() * 4) ;

var randomColor = buttonColors[random_number];
gamepattern.push(randomColor);
var n = gamepattern.length - 1;
var buttontobepressed = "#" + gamepattern[n];
var soundaddress = "sounds/" + gamepattern[n] + ".mp3";
$(buttontobepressed).fadeOut(500).fadeIn(500);
var audio = new Audio(soundaddress);
audio.play();


console.log(gamepattern);
}



$(".btn").click(function (){
var choosencolor = this.id;


playerpattern.push(choosencolor);
var btnaudio = new Audio("sounds/" + choosencolor + ".mp3");
btnaudio.play();
$("#" + choosencolor).addClass("pressed");
setTimeout(function (){
    $("#" + choosencolor).removeClass("pressed");
},500);
checkans(playerpattern.length - 1);
});
console.log(playerpattern);



function checkans(currentlevel)
{
    if(playerpattern[currentlevel] == gamepattern[currentlevel]){

        console.log("success");
        if(playerpattern.length==gamepattern.length){
        setTimeout(function (){
            patterncontinue();
        },1000);
        }
    } else{
        console.log("wrong");
        $("body").addClass("game-over");
        setTimeout(function (){
            $("body").removeClass("game-over")
        },200);
        var gameover = new Audio("sounds/wrong.mp3");
        gameover.play();


        $("h1").text("Game Over, press any key to restart");
        restart();
    }

}

//start Game
function startgame(){
$(document).keydown(function (event){
    gamepattern = [];
    level = 0;

    if(event.key == "a"){
        console.log(event.key);
     patterncontinue();


    }
})
    
}


function restart(){
    $(document).keydown(function (){
        gamepattern= [];
        level = 0;
        patterncontinue();

      
    })


}

