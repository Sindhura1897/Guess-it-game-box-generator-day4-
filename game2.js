const $submitbutton=document.getElementById("submit");
const $message=document.getElementById("message");
const $lives=document.getElementById("lives");

var guessnumber=Math.round(Math.random()*100);
var lives=10;
var message;

$submitbutton.onclick=() =>{
    let userinput=document.getElementById("number-input").value;
    lives--;
    if(userinput==guessnumber){
        location.href="win.html";
    }
    else if(lives==0){
        location.href="loose.html";
    }
    else if(userinput>guessnumber){
         message='Oops! Your Guess is too high. You have ${lives} lives remaining.';
        
    }
    else if(userinput<guessnumber){
        message='Oops! Your Guess is too low. You have ${lives} lives remaining.';
    }

    $message.style.display="inherit";
    $message.innerHTML=message;
    $lives.innerHTML=$lives;
}