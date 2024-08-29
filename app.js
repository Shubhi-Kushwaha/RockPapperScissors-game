let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

choices.forEach((choices)=>{
    console.log(choices);
    choices.addEventListener("click",()=>{
           console.log("choice was clicked");
    })
})