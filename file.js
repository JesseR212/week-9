// Deck class
class Deck {
  constructor() {
    this.deck = [];
    this.ranks = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ];
    this.suits = ["Hearts ♥", "Diamonds ♦", "Spades ♠", "Clubs ♣"];
  }

  // A method to create a deck... iterate over our ranks/suits
  // push a new card... (as an object) into our constructors this.deck
  createDeck() {
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.ranks.length; j++) {
        let card = {
          name: `${this.ranks[j]} of ${this.suits[i]}`,
          value: j + 1,
        };
        this.deck.push(card);
      }
    }
  }

  shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }
}

// Game class
class Game {
  constructor() {
    this.player1 = {
      name: `Player 1`,
      score: 0,
      hand: [],
    };
    this.player2 = {
      name: `Player 2`,
      score: 0,
      hand: [],
    };
  }

  // Method to play the game
  playGame() {
    // Instantiate a new deck, create a deck, and shuffle the deck
    const deck = new Deck();
    deck.createDeck();
    deck.shuffleDeck();

    // Distribute cards to players
    while (deck.deck.length > 0) {
      this.player1.hand.push(deck.deck.shift()); // Give a card to Player 1
      if (deck.deck.length > 0) {
        this.player2.hand.push(deck.deck.shift()); // Give a card to Player 2
      }
    }

    // Play the game by comparing cards
    for (let i = 0; i < this.player1.hand.length; i++) {
      // Conditional logic to award points
      if (this.player1.hand[i].value > this.player2.hand[i].value) {
        this.player1.score++;
        console.log(`
            P1 Card: ${this.player1.hand[i].name}   
            P2 Card: ${this.player2.hand[i].name}
            Player 1 wins a point!
            Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}
          `);
      } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
        this.player2.score++;
        console.log(`
            P1 Card: ${this.player1.hand[i].name}   
            P2 Card: ${this.player2.hand[i].name}
            Player 2 wins a point!
            Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}
          `);
      } else {
        console.log(`
            P1 Card: ${this.player1.hand[i].name}   
            P2 Card: ${this.player2.hand[i].name}
            Tie: No Points Awarded
            Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}
          `);
      }
    }

    // Log the final winner
    if (this.player1.score > this.player2.score) {
      console.log("Player 1 wins the game!");
    } else if (this.player2.score > this.player1.score) {
      console.log("Player 2 wins the game!");
    } else {
      console.log("The game is a tie!");
    }
  }
}

// Start the game
const game = new Game();
game.playGame();
