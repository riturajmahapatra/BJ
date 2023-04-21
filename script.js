
//q.1

let age = 20;

if (age < 21) {
    console.log("Sadly you can't enter the pub👩‍👦");
}
else {
    console.log("Feel free to enjoy !!!🥴🤑");
}

// q.2

age = 100;

if (age < 100) {
    console.log("You're not eligible 👵");

}
else if (age === 100) {  //=== should be strictly use ignore ==
    console.log("here's your birthday card 👨‍🦳");
}

else {
    console.log("You've already recived your birthday card 👴");

}

// ARRAYS

let cv = [
    'experience: 1 year',
    'education: Masters in Buisness Administration',
    'skills: HTML5 , CSS3 , JS , React.js , 3D.js, Angular8'
]
console.log(cv[2]);
console.log(cv[0]);
console.log(cv[1]);

let myData = [
    'rituraj',
    26,
    true
]

myData.push('web developer')

console.log(myData);

// q.4
// for loop
for (let count = 10; count <= 100; count += 10) {
    console.log(count);
}

//q.5
// 
let cv2 = [
    'experience: 1 year',
    'education: Masters in Buisness Administration',
    'skills: HTML5 , CSS3 , JS , React.js , 3D.js, Angular8',
    'loves to travel',
    'loves to code frontend ',
    '🧨'
]
for (let i = 0; i < cv2.length; i++) {
    console.log(cv2[i]);
}

//q.6

let cardz = [7, 5, 6]
for (let i = 0; i < cardz.length; i++) {
    console.log(cardz[i]);

}
// q.7 greeting paragraph

let sentance = ['Hello', 'my', 'name', 'is', 'Rituraj']
let greetingEl = document.getElementById('greeting-el')

for (i = 0; i < sentance.length; i++) {
    // greetingEl.textContent += sentance[i]
}


//q.8 

let player1Time = 102;
let player2Time = 106;

function playerTime() {
    if (player1Time < player2Time) {
        return player1Time;
    }
    else if (player1Time > player2Time) {
        return player2Time;
    }
    else {
        return player1Time;
    }
}

function totalracetime() {
    return player1Time + player2Time;
    console.log(totalTime);
}
let newvar = totalracetime();
console.log(newvar);


//q.9
// random number generator

let randomNum = Math.random()  // it generates number btw (0 to 0.99999) // 1 is not inclusive
console.log(randomNum);

// dice function
randomNum = Math.random() * 6    // it generates number btw (0 to 5.9999) // 1 is not inclusive
console.log(randomNum);
randomNum = Math.floor(Math.random() * 6) + 1
console.log(randomNum);

function diceRoll() {
    let dice = Math.floor(Math.random() * 6) + 1
    return dice
}
console.log(diceRoll());


//q.10
// AND Operators

let hasCompleted = false;
let hasHintsleft = false;

if (hasCompleted === false && hasHintsleft === false) {
    showSolution()
}
else {
    console.log('dont have credits to show solution');
}
function showSolution() {
    console.log('Showing Solution');
}

//q.11
// OR Operators


let likesDocumentories = false;
let likesStartups = true;

if (likesDocumentories || likesStartups) {
    recommendmovie()
}
else {
    console.log('watch something else');
}
function recommendmovie() {
    console.log("You should watch FYRE at Netflix");
}

//------------x-x-x------------Main Game------------x-x-x-------






// adding arrays to the elements for storing cards
let cards = []
let sum = 0
let hasBlackjack =false;
let cashOut = false; // intitially you owe 0$ from the dealer
let isAlive = false;
let message = '';
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
// let sumEl = document.querySelector('#sum-el') this can be used as well

//  using objects 

let player ={
    name: 'Rituraj',
    earnings: '$109'
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ' : ' + player.earnings


function getRandom() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11
    }
    else if (randomNumber > 10) {
        return 10
    }
    return randomNumber;
}


//adding function to our game

function startgame() {

    isAlive = true
    let firstCard = getRandom()
    let secondCard = getRandom()
    let sum = firstCard + secondCard;
    let cards = [firstCard, secondCard]
    renderGame()
}

function renderGame() {
    cardsEl.textContent = 'Cards: '
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i - 0] + ' ';
    }
    sumEl.textContent = 'Sum: ' + sum;

    if (sum <= 20) {
        // console.log("Do you want to draw a new card");
        message = 'Do you want to draw a new card 😊?'

    }
    else if (sum === 21) {
        // console.log("Blackjack ");
        message = "Wohooo! You've got Blackjack 😎"
        cashOut = true;
        hasBlackjack =true;
    }
    else {
        // console.log('get lost');
        message = "You're out of luck today! Try Again next time 😥"
        isAlive = false;
        console.log(isAlive);
    }

    messageEl.textContent = message;

}

// new card function
function newcard() {
    if (isAlive=== true && hasBlackjack===false) {
        console.log("clicked");
        let card = getRandom()
        sum += card;
        cards.push(card)
        console.log(card);
        renderGame();
    }


}




