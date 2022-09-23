

const guess_button = document.getElementsByClassName("guess");

const box_value=document.getElementsByClassName("number");

const up_down_value = document.getElementsByClassName("up-down");

const score_panel = document.querySelector(".high-score");

let generated_number=Math.floor(Math.random()*100); 
let score=20;
let gameOnGoing=true;
guess_button[0].addEventListener("click", () =>{
    if(gameOnGoing){
    const input_number = document.getElementById("numberInput").value;
    if(input_number==generated_number){
        box_value[0].innerHTML=generated_number;
        up_down_value[0].innerHTML="Correct!";
        gameOnGoing=false;
    }
    else if(input_number<generated_number){
        up_down_value[0].innerHTML="UP!";
    }
    else up_down_value[0].innerHTML="DOWN!";
    score--;
    score_panel.innerHTML="🔥Score:"+ score +"🔥";
}
});