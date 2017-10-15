///////////////////////////////  jQuery Functions  ///////////////////////////////

// Whenever the HTML doc is ready, run this function
$(function domReady () {
    //hides the play again button and a few other things occur as well:
        // a) all the following variables are stated
        // b) the functions to set up a new game and update the score display are called
    $('#play-again').hide();
    var deck, dealerHand, playerHand;
    setupNewGame();
    updateScoreDisplay();

    // Now that we have a new game initialized, whenver the 'Deal' button is clicked:
        // a) vars below are stated
        // b) the dealacard function is called twice for the dealer and the player (array, section in the html doc)
        // c) deal button is hidden now until the game ends
    $('#deal-button').click(function () {
        var card, cardUrl;

        dealACard(playerHand, '#player-hand');
        dealACard(dealerHand, '#dealer-hand');
        dealACard(playerHand, '#player-hand');
        dealACard(dealerHand, '#dealer-hand');

        console.log('playerHand', playerHand);
        console.log('dealerHand', dealerHand);

        $('#deal-button').hide();
    });

    // With game started, player can choose to hit or stay so if he hits the click button:
        // a) the dealaCard function is called and we insert the players (array, html section) as arguments for that function
        // b) an if statement is implemented to check if the player busted:
            // i: it does this by running the calculatePoints function with the player array passed in as the argument
            // ii: if the total in player's arrray is over 21, then the game over function executes and the bust text is displayed
    $('#hit-button').click(function () {
        dealACard(playerHand, '#player-hand');
        // check for bust
        if (calculatePoints(playerHand) > 21) {
            $('#messages').text('Busted! You lose! Play again?');
            gameOver();
        }
    });

    // If player clicks the stand button, it performs a while loops that essentially runs a calculatePoints functions by taking
    // the dealer hand array and checking to see if the output of that function is less than 17. If so, it keeps dealing by performing
    // the deal a card function. Then it runs an if/else statement where, if the output of the calculate function is greater than 21,
    // the dealer busts by printing a statment that dealer busts. If the dealer did not bust, the next else if statement checks to see if
    // the player busted in the same manner. If not, it finally determines a winner by assigning the calc function methods for each player 
    // the respective declared variable. Thereafter, a new var message is declared and another if/else statement is run to determine the
    // winner by comparing the variables' values and executing the appropriate code for the end of the game.
    $('#stand-button').click(function () {
        while (calculatePoints(dealerHand) < 17) {
            dealACard(dealerHand, '#dealer-hand');
        }
        // check for bust
        if (calculatePoints(dealerHand) > 21) {
            // dealer busts
            $('#messages').text('Dealer busted! You won!');
        } else if (calculatePoints(playerHand) > 21) {
            // player busts
            $('#messages').text('You bust!');
        } else {
            // determine winner
            var dealerPoints = calculatePoints(dealerHand);
            var playerPoints = calculatePoints(playerHand);
            var message;
            if (dealerPoints > playerPoints) {
                message = 'You lose!';
            } else if (dealerPoints < playerPoints) {
                message = 'You win!';
            } else {
                message = 'Push.'
            }
            $('#messages').text(message);
        }
        gameOver();
    });

    // this function simply restarts the game whenever the play button is clicked. Showing and hiding the necessary buttons for the beginning of the games as well as,
    // reseting the hands, messages, and points so that they dont carry over to the new game
    // Also the newGame function is ran.
    $('#play-again').click(function () {
        $('#deal-button').show();
        $('#hit-button').show();
        $('#stand-button').show();
        $('#play-again').hide();
        $('#player-hand').html('');
        $('#dealer-hand').html('');
        $('#messages').text('');
        $('#player-points').text('');
        $('#dealer-points').text('');
        setupNewGame();
    });

    // When this function is called,the hit and stand buttons will be hidden and the playagain button shown.
    function gameOver() {
        $('#hit-button').hide();
        $('#stand-button').hide();
        $('#play-again').show();
    }

    // When this function is called, it resets the score display
    function updateScoreDisplay() {
        var dealerPoints = calculatePoints(dealerHand);
        $('#dealer-points').text(dealerPoints);
        var playerPoints = calculatePoints(playerHand);
        $('#player-points').text(playerPoints);
    }
    
    // This function, when called, deals a new card. It's executed by having a card variable set to popping from the 'deck' array which has all the cards randomly shuffled
    // Then the card var is pushed to a new array called Hand array
    function dealACard(handArray, elementSelector) {
        card = deck.pop();
        handArray.push(card);
        // code for getting the img for the cards
        cardUrl = getCardImageUrl(card);
        $(elementSelector).append(
            '<img src="' + cardUrl + '">'
        );
        updateScoreDisplay();
    }

    // this function calls the newdeck function but assigned to the var deck which is shuffled. new arrays are declared as well
    function setupNewGame() {
        deck = newDeck();
        //lodash function
        deck = _.shuffle(deck);
        dealerHand = [];
        playerHand = [];
    }

}); // End of dom ready
