import { useEffect, useRef, useState } from "react";

import { generateRandomDeck, countHandPoints, RoundState } from "./utilities";

import UserCards from "./components/userCards";
import Score from "./components/score";
import Controls from "./components/controls";
import Overlay from "./components/overlay";

import "./BlackJack.css";

const BlackJack = () => {
  const [deck, setDeck] = useState(() => generateRandomDeck());
  const [userScore, setUserScore] = useState(1000);
  const [currentBet, setCurrentBet] = useState(0);
  const [isBetDone, setIsBetDone] = useState(false);

  const [userCards, setUserCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [dealerPlays, setDealerPlays] = useState(false);

  const [roundState, setRoundState] = useState(RoundState.Unset);

  useEffect(() => {
    if (isBetDone && deck.length === 52) {
      setRoundState(RoundState.Active);
      setDealerCards(deck.slice(0, 2));
      setUserCards(deck.slice(2, 4));
      setDeck(deck.slice(4));
    }
  }, [isBetDone, deck]);

  useEffect(() => {
    const points = countHandPoints(userCards);
    if (points > 21) setRoundState(RoundState.Lost);
  }, [userCards]);

  const deckRef = useRef(deck);
  deckRef.current = deck;

  const calculateEndGame = (dealerPoints) => {
    setCurrentBet(0);
    const userPoints = countHandPoints(userCards);

    if (dealerPoints <= 21 && dealerPoints >= userPoints) {
      setRoundState(RoundState.Lost);
    } else {
      setRoundState(RoundState.Win);
      setUserScore(userScore + currentBet * 2);
    }
  };

  const giveCardToDealer = () => {
    const dealerPoints = countHandPoints(dealerCards);

    if (dealerPoints >= 17) {
      calculateEndGame(dealerPoints);
      return;
    }

    setTimeout(() => {
      const newCard = deckRef.current[0];
      const newDealerCards = [...dealerCards, newCard];
      setDealerCards(newDealerCards);
      setDeck(deckRef.current.slice(1));
    }, 1000);
  };

  useEffect(() => {
    if (dealerPlays && roundState === RoundState.Active) giveCardToDealer();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dealerCards, dealerPlays, userScore]);

  const shuffleCards = () => setDeck(generateRandomDeck());

  const hitMeHandler = () => {
    const newCard = deck[0];
    setUserCards([...userCards, newCard]);
    setDeck(deck.slice(1));
  };

  const stopHandler = () => {
    setDealerPlays(true);
  };

  const startNewRound = () => {
    setRoundState(RoundState.Unset);
    setIsBetDone(false);
    shuffleCards();
    setUserCards([]);
    setDealerCards([]);
    setDealerPlays(false);
    setCurrentBet(0);
  };

  return (
    <div className="BlackJack">
      <h1>Black Jack</h1>
      <Score userScore={userScore} currentBet={currentBet} />
      <UserCards cards={dealerCards} isDealer={true} isOpen={dealerPlays} />
      <div className="Table"></div>
      <UserCards cards={userCards} isOpen={true} />
      <Controls
        userScore={userScore}
        setUserScore={setUserScore}
        currentBet={currentBet}
        setCurrentBet={setCurrentBet}
        isBetDone={isBetDone}
        setIsBetDone={setIsBetDone}
        hitMeHandler={hitMeHandler}
        stopHandler={stopHandler}
        dealerPlays={dealerPlays}
        roundState={roundState}
      />
      <Overlay roundState={roundState} onClick={startNewRound} />
    </div>
  );
};

export default BlackJack;
