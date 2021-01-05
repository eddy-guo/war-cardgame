const SUITS = ['♠', '♥', '♦', '♣']

class Deck {
  constructor(cards) {
    this.cards = [];
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}
