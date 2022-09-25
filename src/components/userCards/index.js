import { useEffect } from "react";
import Card from "../card";
import { countHandPoints } from "../../utilities";

import "./index.css";

const UserCards = ({ isOpen, cards, isDealer }) => {
  const points = countHandPoints(cards);
  const animationEnabled = cards.length > 2;

  useEffect(() => {
    setTimeout(() => {
      const animatedCards = document.querySelectorAll(".isAnimated");
      animatedCards.forEach((card) => {
        card.classList.remove("isAnimated");
      });
    }, 500);
  }, [cards]);

  return (
    <>
      <div className={`UserCards${isDealer ? " isDealer" : ""}`}>
        {cards.map((card, idx) => (
          <Card
            key={card}
            isOpen={isOpen || (!idx && isDealer)}
            card={card}
            isAnimated={animationEnabled && idx === cards.length - 1}
          />
        ))}
      </div>
      <div className="UserPoints">
        {!!cards.length && isOpen && <span>Current hand points: {points}</span>}
      </div>
    </>
  );
};

export default UserCards;
