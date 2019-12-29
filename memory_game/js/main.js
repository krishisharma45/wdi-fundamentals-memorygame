var cards = [
//queen of hearts
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
//queen of diamonds
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
//king of hearts
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
//king of diamonds
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];


var cardsInPlay = [];

function checkForMatch() {
	if(cardsInPlay [0] === cardsInPlay[1]){
		alert("You found a match!")
	}
	else{
		alert("Sorry, try again!")
	}
}

function createBoard(){
	const gameBoard = document.getElementById('game-board');
	for (let i=0; i < cards.length ; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', 'i');
		cardElement.addEventListener("click", flipCard);
		gameBoard.appendChild(cardElement);
	}
}

function flipCard(cardId) {
	var cardID = this.setAttribute('data-id', 'i');
	cardsInPlay.push(cards[cardID].rank);
 this.setAttribute('src', 'cards[cardID].cardImage');
 if (cardsInPlay.length === 2){
    checkForMatch();
    //cardsInPlay = [];
 };
};





createBoard();