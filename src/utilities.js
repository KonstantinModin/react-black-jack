const cards = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];
const suits = ["♥", "♦", "♣", "♠"];

export const generateRandomDeck = () => {
  const deck = suits
    .map((suit) => cards.map((card) => suit + card))
    .reduce((a, b) => [...a, ...b])
    .sort((_) => (Math.random() > 0.5 ? 1 : -1));

  return deck;
};

export const countHandPoints = (userCards) => {
  const acesCards = userCards.filter((card) => card.slice(1) === "A");
  const noAcesCards = userCards.filter((card) => card.slice(1) !== "A");

  let points = noAcesCards.reduce((a, b) => {
    const value = isNaN(+b.slice(1)) ? 10 : +b.slice(1);
    return a + value;
  }, 0);

  const acesCount = acesCards.length;
  const limit = acesCount > 3 ? 8 : acesCount > 2 ? 9 : acesCount > 1 ? 10 : 11;

  acesCards.forEach(() => {
    points += points < limit ? 11 : 1;
  });

  return points;
};

export const RoundState = {
  Active: "Active",
  Lost: "Lost",
  Win: "Win",
  Draw: "Draw",
  Unset: "Unset",
};
