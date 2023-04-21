
//------------x-x-x------------Main Game------------x-x-x-------



let firstCard = Math.floor(Math.random() * 11) + 2;
let secondCard = Math.floor(Math.random() * 11) + 2;


// adding arrays to the elements for storing cards
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let cashOut = false; // intitially you owe 0$ from the dealer
let isAlive = true;
let message = '';
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
// let sumEl = document.querySelector('#sum-el') this can be used as well


//adding function to our game

function startgame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = 'Cards: ' 
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i-0] + ' ';
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
    console.log('clicked');
    let card = Math.floor(Math.random() * 11) + 2;
    sum += card;
    cards.push(card)
    console.log(card);
    renderGame();
}




