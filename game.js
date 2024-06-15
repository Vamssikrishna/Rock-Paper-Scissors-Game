let buttons = document.querySelectorAll(".choice");
let userscore = 0;
let computerscore = 0;
let userstat = document.querySelector("#user-score");
let compstat = document.querySelector("#computer-score");
let result = document.querySelector("#ustats");
let tip = document.querySelector("#tip");


buttons.forEach((button) => {
    button.addEventListener("click", () => {
       let userchoice =  button.getAttribute("id");
       let audio = new Audio('click-buttons-ui-menu-sounds-effects-button-7-203601.mp3');
       audio.play();
       tip.innerHTML = "";
       playgame(userchoice);
    })
});

const computerchoice = () => {
    let options = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return options[choice];
}

const draw = () => {
    console.log("Draw");
    result.innerHTML = "Draw";
}

const wincheck = (userchoice, compchoice, userwin) => {
   if(userwin === true){
      userscore++;
      userstat.innerHTML = userscore;
      result.innerHTML = "You won the game 🥳"
   }else{
    computerscore++;
    compstat.innerHTML = computerscore;
    result.innerHTML = "You lost the game 😭"
   }
};

const playgame = (userchoice) => {
    let compchoice = computerchoice();
    console.log(compchoice);
    if(userchoice === compchoice){
        draw();
    }else{
        let userwin = true;
        if(userchoice === "paper"){
            if(compchoice === "rock"){
                userwin = true;
            }else{
                userwin = false;
            } 
        }else if(userchoice === "rock"){
            if(compchoice === "paper"){
                userwin = false;
            }else{
                userwin = true;
            }
        }else{
            if(compchoice === "paper"){
                userwin = false;
            }else{
                userwin = true;
            }
        }
        wincheck(userchoice, compchoice, userwin);
    }
    
}