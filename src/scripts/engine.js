const state ={
    score:{
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points"),
    },
    cardSprites:{
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },
    fieldCards:{
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },
    playerSides:{
        player1: "player-card",
        player1BOX: document.querySelector("#player-cards"),
        computer: "computer-card",
        computerBOX: document.querySelector("#computer-cards"),
    },
    actions:{
        button: document.getElementById("next-duel"),
    },
};



function init(){
    
}

init()