import visa from "./visa.png";
import { RoundState } from "../../utilities";

import "./index.css";

const Controls = ({
  userScore,
  setUserScore,
  currentBet,
  setCurrentBet,
  isBetDone,
  setIsBetDone,
  hitMeHandler,
  stopHandler,
  dealerPlays,
  roundState,
}) => {
  const updateBetHandler = (value) => {
    const newScore = userScore - value;
    const newBet = currentBet + value;
    if (newScore < 0 || newBet < 0) return;
    setUserScore(newScore);
    setCurrentBet(newBet);
  };

  const betButtons = (
    <>
      <div className="Controls-columnWrapper">
        <div className="Controls-column">
          <button className="green" onClick={() => updateBetHandler(5)}>
            +5
          </button>
          <button className="red" onClick={() => updateBetHandler(-5)}>
            -5
          </button>
        </div>
        <div className="Controls-column">
          <button className="green" onClick={() => updateBetHandler(20)}>
            +20
          </button>
          <button className="red" onClick={() => updateBetHandler(-20)}>
            -20
          </button>
        </div>
        <div className="Controls-column">
          <button className="green" onClick={() => updateBetHandler(100)}>
            +100
          </button>
          <button className="red" onClick={() => updateBetHandler(-100)}>
            -100
          </button>
        </div>
      </div>
      <button className="blue" onClick={() => setIsBetDone(!!currentBet)}>
        Bet
      </button>
    </>
  );

  const gameButtons = (
    <>
      <button className="green" onClick={hitMeHandler} disabled={dealerPlays}>
        More
      </button>
      <button className="red" onClick={stopHandler} disabled={dealerPlays}>
        Stop
      </button>
    </>
  );

  const payButtonHandler = () => {
    setUserScore(1000);
  };

  const gameLost =
    roundState === RoundState.Unset ? (
      <div className="Controls-gameLost">
        <h2>You lost the game!</h2>
        <p>Enter your credit card details to continue:</p>
        <div>
          <label for="card">Card number:</label>
          <input type="number" placeholder="0000-0000-0000-0000" id="card" />
        </div>
        <div>
          <label for="valid">Valid through:</label>
          <input type="number" placeholder="MM-YY" id="valid" />
        </div>
        <div>
          <label for="cvc">CVC:</label>
          <input type="number" placeholder="CVC" id="cvc" />
        </div>
        <img src={visa} alt="payment types" />
        <button onClick={payButtonHandler}>Pay 100$</button>
      </div>
    ) : null;

  return (
    <div className="Controls">
      {userScore || currentBet
        ? isBetDone
          ? gameButtons
          : betButtons
        : gameLost}
    </div>
  );
};

export default Controls;
