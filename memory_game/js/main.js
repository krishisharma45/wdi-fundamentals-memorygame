const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = [];

function checkForMatch() {
	if(cardsInPlay [0] === cardsInPlay[1]){
		console.log("You found a match!");
	}
	else{
		console.log("Sorry, try again.")
	}
}

function flipCard(cardID){
	let playCard = cardID;
	cardsInPlay.push(playCard);
	console.log("User flipped " + playCard);
}

flipCard(cards[0]);
flipCard(cards[2]);
checkForMatch();
