import { generateRandomDeck, countHandPoints } from "./utilities";

const testArray = [
  { hand: ["♦5", "♥4"], expectedPoints: 9 },
  { hand: ["♦5", "♥4", "♣K"], expectedPoints: 19 },
  { hand: ["♦5", "♥4", "♣2"], expectedPoints: 11 },
  { hand: ["♦5", "♥4", "♣3"], expectedPoints: 12 },
  { hand: ["♦5", "♥4", "♣3", "♣2"], expectedPoints: 14 },
  { hand: ["♦5", "♥4", "♣3", "♣2", "♠3"], expectedPoints: 17 },
  { hand: ["♦5", "♥4", "♣3", "♣2", "♠3", "♦2"], expectedPoints: 19 },
  { hand: ["♦5", "♥4", "♣3", "♣2", "♠3", "♦3"], expectedPoints: 20 },
  { hand: ["♦5", "♥4", "♣3", "♣2", "♠3", "♦4"], expectedPoints: 21 },
  { hand: ["♥10", "♣Q"], expectedPoints: 20 },
  { hand: ["♥J", "♣K"], expectedPoints: 20 },
  { hand: ["♥J", "♣A"], expectedPoints: 21 },
  { hand: ["♦5", "♥4", "♣Q"], expectedPoints: 19 },
  { hand: ["♦A", "♦5", "♥4", "♣Q"], expectedPoints: 20 },
  { hand: ["♥A", "♦A", "♦5", "♥4", "♣Q"], expectedPoints: 21 },
  { hand: ["♠A", "♥A", "♦A", "♦5", "♥4", "♣Q"], expectedPoints: 22 },
  { hand: ["♦2", "♥4"], expectedPoints: 6 },
  { hand: ["♦2", "♥5"], expectedPoints: 7 },
  { hand: ["♦2", "♥5", "♥J"], expectedPoints: 17 },
  { hand: ["♦2", "♥8", "♥J"], expectedPoints: 20 },
  { hand: ["♦2", "♥8", "♥A"], expectedPoints: 21 },
  { hand: ["♦2", "♥9", "♥A"], expectedPoints: 12 },
  { hand: ["♦A", "♥A"], expectedPoints: 12 },
  { hand: ["♦A", "♥9", "♥A"], expectedPoints: 21 },
  { hand: ["♠A", "♣A", "♦A", "♥A"], expectedPoints: 14 },
  { hand: ["♠A", "♣A", "♦A", "♥2", "♥A"], expectedPoints: 16 },
  { hand: ["♠A", "♣A", "♦A", "♥3", "♥A"], expectedPoints: 17 },
  { hand: ["♠A", "♣A", "♦A", "♥4", "♥A"], expectedPoints: 18 },
  { hand: ["♠A", "♣A", "♦A", "♥5", "♥A"], expectedPoints: 19 },
  { hand: ["♠A", "♣A", "♦A", "♥6", "♥A"], expectedPoints: 20 },
  { hand: ["♠A", "♣A", "♦A", "♥7", "♥A"], expectedPoints: 21 },
  { hand: ["♠A", "♣A", "♦A", "♥8", "♥A"], expectedPoints: 12 },
  { hand: ["♠A", "♣A", "♦A", "♥9", "♥A"], expectedPoints: 13 },
  { hand: ["♠A", "♣A", "♦A", "♥10", "♥A"], expectedPoints: 14 },
  { hand: ["♠A", "♣A", "♦A", "♥8", "♥3", "♥A"], expectedPoints: 15 },
  { hand: ["♠A", "♣A", "♦A", "♥8", "♥4", "♥A"], expectedPoints: 16 },
  { hand: ["♠A", "♣A", "♦A", "♥6", "♥7", "♥A"], expectedPoints: 17 },
  { hand: ["♠A", "♣A", "♦A", "♥8", "♥6", "♥A"], expectedPoints: 18 },
  { hand: ["♠A", "♣A", "♦A", "♥8", "♥7", "♥A"], expectedPoints: 19 },
  { hand: ["♠A", "♣A", "♦A", "♥9", "♥7", "♥A"], expectedPoints: 20 },
  { hand: ["♠A", "♣A", "♦A", "♥9", "♥8", "♥A"], expectedPoints: 21 },
  { hand: ["♠A", "♣A", "♦A", "♥10", "♥8", "♥A"], expectedPoints: 22 },
  { hand: ["♦2", "♠A", "♣A", "♦A", "♥8", "♥A"], expectedPoints: 14 },
  { hand: ["♣A", "♦A", "♥A"], expectedPoints: 13 },
  { hand: ["♣A", "♦A", "♥2", "♥A"], expectedPoints: 15 },
  { hand: ["♣A", "♦A", "♥3", "♥A"], expectedPoints: 16 },
  { hand: ["♣A", "♦A", "♥4", "♥A"], expectedPoints: 17 },
  { hand: ["♣A", "♦A", "♥5", "♥A"], expectedPoints: 18 },
  { hand: ["♣A", "♦A", "♥6", "♥A"], expectedPoints: 19 },
  { hand: ["♣A", "♦A", "♥7", "♥A"], expectedPoints: 20 },
  { hand: ["♣A", "♦A", "♥8", "♥A"], expectedPoints: 21 },
  { hand: ["♣A", "♦A", "♥9", "♥A"], expectedPoints: 12 },
  { hand: ["♣A", "♦A", "♥10", "♥A"], expectedPoints: 13 },
  { hand: ["♣A", "♦A", "♥7", "♣4", "♥A"], expectedPoints: 14 },
  { hand: ["♣A", "♥A"], expectedPoints: 12 },
  { hand: ["♥J", "♣A", "♥A"], expectedPoints: 12 },
  { hand: ["♥9", "♣A", "♥A"], expectedPoints: 21 },
  { hand: ["♥8", "♣A", "♥A"], expectedPoints: 20 },
  { hand: ["♥5", "♣6", "♣A", "♥A"], expectedPoints: 13 },
  { hand: ["♥J", "♦2", "♣A", "♥A"], expectedPoints: 14 },
  { hand: ["♦2", "♣A", "♦A", "♥9", "♥A"], expectedPoints: 14 },
];

describe("Utilities test", () => {
  describe("countHandPoints() test", () => {
    testArray.forEach(({ hand, expectedPoints }) => {
      it(`should be ${expectedPoints} points for: ${hand.join` `}`, () => {
        const points = countHandPoints(hand);
        expect(points).toEqual(expectedPoints);
      });
    });
  });
  describe("generateRandomDeck() test", () => {
    const idxsArray = [];
    for (let i = 0; i < 300; i++) {
      const randomDeck = generateRandomDeck();
      const idx = randomDeck.findIndex((card) => card === "♥A");
      idxsArray.push(idx);
    }
    const uniqueIdxCount = new Set(idxsArray).size;

    it(`should have sufficient uniqueIdx`, () => {
      expect(uniqueIdxCount).toBeGreaterThan(50);
    });
  });
});
