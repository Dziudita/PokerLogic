"use client";

import { useMemo, useState } from "react";
import { createDeck } from "@/lib/poker/deck";
import { shuffleDeck } from "@/lib/poker/shuffle";
import { dealCards } from "@/lib/poker/deal";
import { Card } from "@/lib/poker/types";

type DealState = {
  player1: Card[];
  player2: Card[];
  community: Card[];
};

function formatCard(card: Card) {
  const suitSymbols: Record<Card["suit"], string> = {
    hearts: "♥",
    diamonds: "♦",
    clubs: "♣",
    spades: "♠",
  };

  return `${card.rank}${suitSymbols[card.suit]}`;
}

function generateNewDeal(): DealState {
  const deck = createDeck();
  const shuffledDeck = shuffleDeck(deck);
  return dealCards(shuffledDeck);
}

export default function HomePage() {
  const initialDeal = useMemo(() => generateNewDeal(), []);
  const [game, setGame] = useState<DealState>(initialDeal);

  const handleNewGame = () => {
    setGame(generateNewDeal());
  };

  return (
    <main className="min-h-screen bg-[#0b1020] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">PokerLogic</h1>
        <p className="text-white/70 mb-8">
          Simple Texas Hold&apos;em prototype
        </p>

        <div className="bg-[#11182b] rounded-2xl p-6 shadow-xl border border-white/10">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Community Cards</h2>
            <div className="flex flex-wrap gap-3">
              {game.community.map((card, index) => (
                <div
                  key={`${card.rank}-${card.suit}-${index}`}
                  className="w-16 h-24 rounded-xl bg-white text-black flex items-center justify-center text-xl font-bold shadow"
                >
                  {formatCard(card)}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-3">Player 1</h2>
              <div className="flex gap-3">
                {game.player1.map((card, index) => (
                  <div
                    key={`${card.rank}-${card.suit}-${index}`}
                    className="w-16 h-24 rounded-xl bg-white text-black flex items-center justify-center text-xl font-bold shadow"
                  >
                    {formatCard(card)}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Player 2</h2>
              <div className="flex gap-3">
                {game.player2.map((card, index) => (
                  <div
                    key={`${card.rank}-${card.suit}-${index}`}
                    className="w-16 h-24 rounded-xl bg-white text-black flex items-center justify-center text-xl font-bold shadow"
                  >
                    {formatCard(card)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleNewGame}
            className="px-5 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-black font-semibold transition"
          >
            New Game
          </button>
        </div>
      </div>
    </main>
  );
}
