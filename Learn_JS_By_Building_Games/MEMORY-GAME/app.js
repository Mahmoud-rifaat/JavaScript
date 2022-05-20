const cardArray = [
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
] //the array of our cards with images

cardArray.sort(() => 0.5 - Math.random()); //Randomly sorts the array of cards

let cardsChosen = []; //An array that holds the cards that have been chosen so far
let cardsChosenIds = [];
let cardsWon = [];

const grid = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');


function createBoard(){
    cardArray.forEach((element, index) => {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', index);
        grid.appendChild(card);
        card.addEventListener('click', flipCard);
    });
}

createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];


    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('You have clicked the same card!');
    }
    else if(cardsChosen[0] == cardsChosen[1]){
        //alert('You found a match!');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    }else{
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        //alert('Sorry, try again.');
    }
    resultDisplay.innerHTML = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = "Congratiolations, you found them all!";
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id');
    this.setAttribute('src', cardArray[cardId].img);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);

    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500);
    }
}