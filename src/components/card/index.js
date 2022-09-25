import "./index.css";

const Card = ({ isOpen, card, isAnimated }) => {
  const suit = card[0];
  const value = card.slice(1);
  const suitClass = ["♥", "♦"].includes(suit) ? "red" : "";

  return isOpen ? (
    <div className={`Card${isAnimated ? " isAnimated" : ""}`}>
      <span className={suitClass}>
        {value > "0" ? value : 10}
        {suit}
      </span>
    </div>
  ) : (
    <div className="Card closed" />
  );
};

export default Card;
