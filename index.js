
let btn = document.querySelector("#btn2");
let dis = document.querySelector('.h2-col');


let draw1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
let draw2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

let randomNumber = getRandomNumbers();
let randomNumber2 = getRandomNumbers2();


function sum(){
    let sum1 = randomNumber + randomNumber2;
    let sum = document.getElementById('sum');
    let card = document.getElementById('card');
    sum.textContent = "Sum: " + sum1;
    card.textContent = "Cards: " + "[ "+randomNumber +" ]"+ "  "+ "[ "+randomNumber2 + " ]"
    //let msg = sum.textContent 
    if( sum1 <= 20){
        dis.innerHTML = "Do you want to draw a new card?"
    }

    else if(sum1 == 21){
        dis.innerHTML = "woooh You Won a jackpot"
    }

    else{
        dis.innerHTML = "You are out of the Game"
    }

}

function getRandomNumbers(){
    return Math.floor(Math.random() * draw1.length);
}

function getRandomNumbers2(){
    return Math.floor(Math.random() * draw2.length);
}

function abt(){
    let about = document.getElementById('abt');
    let el = document.getElementById('abt-el');
    el.innerHTML = "About Black-Jack card game<br>Black-Jack is a game of cards, when ever a card is<br> drawn and the Sum is Lesser or equal to 20, you will be allowed to play again and if the Sum equals 21 you have hit a jack pot but if the Sum is greater than 21 then you are out of the Game"
}

