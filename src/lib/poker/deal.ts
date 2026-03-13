import { Card } from "./types";

export type DealResult = {
  player1: Card[];
  player2: Card[];
  community: Card[];
};

export function dealCards(deck: Card[]): DealResult {
  return {
    player1: [deck[0], deck[1]],
    player2: [deck[2], deck[3]],
    community: [deck[4], deck[5], deck[6], deck[7], deck[8]],
  };
}
