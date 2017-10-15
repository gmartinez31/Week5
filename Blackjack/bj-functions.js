///////////////////////////////  Javascript Functions  ///////////////////////////////

// This function is for getting the correct card from the images folder.
    // a) cardName is declared
    // b) we run an if/else statement to assign points to all the cards to be able to select them and use them independently
    // c) at the end we return whatever card by getting it from the images folder / whatever cardName / its suit / and png
        // i) this will fetch whatever card it needs from the images folder
function getCardImageUrl(card) {
    var cardName;
    if (card.point === 1) {
        cardName = 'ace';
    } else if (card.point === 11) {
        cardName = 'jack';
    } else if (card.point === 12) {
        cardName = 'queen';
    } else if (card.point === 13) {
        cardName = 'king';
    } else {
        cardName = card.point;
    }
    return 'images/' + cardName + '_of_' + card.suit + '.png';
}

// When this function is called,  where the points are simply calculated by adding up the card values
// if the point is over 11 then that point becomes 1. aka 'A'
function calculatePoints(cards) {
    cards = cards.slice(0);
    cards.sort(function (a, b) {
        return b.point - a.point;
    });
    return cards.reduce(function (sum, card) {
        var point = card.point;
        if (point > 10) {
            point = 10;
        }
        if (point === 1 && sum < 11) {
            point = 11;
        }
        return sum + point;
    }, 0);
}
 
// This function declares a new array called cards. then a for loop is executed where cards are pushed from each suit and count number up to the 13 point value (A-K)
// to make an entirely new deck, hence the name of the function
function newDeck() {
    var cards = [];
    for (var i = 1; i <= 13; i++) {
        cards.push({ point: i, suit: 'spades' }); // change to Card constructor
        cards.push({ point: i, suit: 'hearts' });
        cards.push({ point: i, suit: 'clubs' });
        cards.push({ point: i, suit: 'diamonds' });
    }
    return cards;
}
