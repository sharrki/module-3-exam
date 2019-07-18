//DICE GAME
'use strict'

//VARIABLES
let funds = 5000;

//EVENT LISTENERS
document.getElementById("play-btn").addEventListener("click", roll);
document.getElementById("purchase-btn").addEventListener("click", rich);

//FUNCTIONS
function roll(){
    let house = Math.floor(Math.random() * 6) + 1;
    let player = Math.floor(Math.random() * 6) + 1;

    if(house == 1){
        document.getElementById("house-die").src = "images/1.png";
    }else if(house == 2){
        document.getElementById("house-die").src = "images/2.png";
    }else if(house == 3){
        document.getElementById("house-die").src = "images/3.png";
    }else if(house == 4){
        document.getElementById("house-die").src = "images/4.png";
    }else if(house == 5){
        document.getElementById("house-die").src = "images/5.png";
    }else if(house == 6){
        document.getElementById("house-die").src = "images/6.png";
    }

    if(player == 1){
        document.getElementById("player-die").src = "images/1.png";
    }else if(player == 2){
        document.getElementById("player-die").src = "images/2.png";
    }else if(player == 3){
        document.getElementById("player-die").src = "images/3.png";
    }else if(player == 4){
        document.getElementById("player-die").src = "images/4.png";
    }else if(player == 5){
        document.getElementById("player-die").src = "images/5.png";
    }else if(player == 6){
        document.getElementById("player-die").src = "images/6.png";
    }

    if(player > house){
        funds = funds + Number(document.getElementById("bet-input").value);
    }else if(house == player){
        funds = funds;
    }else if(player < house){
        funds = funds - Number(document.getElementById("bet-input").value);
    }

    document.getElementById("funds").innerHTML = funds;
}

function rich(){

    let loot = Math.random();

    if(funds < 1000){
        document.getElementById("buy").src = "images/socks.png";

    }else if(funds >= 1000 && funds <= 5000){
        if(loot < 0.33){
            document.getElementById("buy").src = "images/ring.png";
        }else if(loot < 0.66){
            document.getElementById("buy").src = "images/bike.jpg";
        }else{
            document.getElementById("luxury").src = "images/trip.jpg";
        }
        funds = funds - 1000;

    }else{
        if(loot < 0.25){
            document.getElementById("buy").src = "images/motorcycle.jpg";
        }else if(loot < 0.5){
            document.getElementById("buy").src = "images/house.png";
        }else if(loot < 0.75){
            document.getElementById("buy").src = "images/car.png";
        }else{
            document.getElementById("buy").src = "images/boat.png";
        }
        funds = funds - 5000;

    }

    document.getElementById("funds").innerHTML = funds;
}
