import { Card, Suit, Rank } from "./types";

const suits: Suit[] = ["hearts", "diamonds", "clubs", "spades"];

const ranks: Rank[] = [
  "2","3","4","5","6","7","8","9","10","J","Q","K","A"
];

export function createDeck(): Card[] {
  const deck: Card[] = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({ suit, rank });
    }
  }

  return deck;
}
