const cards = [
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


const cardsInPlay = [];

function checkForMatch() {
	if(cardsInPlay [0] === cardsInPlay[1]){
		alert("You found a match!")
	}
	else{
		alert("Sorry, try again!")
	}
}

function flipCard(cardID){
	let playCard = cardID;
	cardsInPlay.push(playCard.rank);
	console.log("User flipped " + playCard.rank + " of " + cardID.suit);
	console.log(cardID.cardImage);
}

flipCard(cards[0]);
flipCard(cards[2]);
checkForMatch();
