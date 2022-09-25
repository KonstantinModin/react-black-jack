import "./index.css";

const Score = ({ userScore, currentBet }) => {
  return (
    <div className="Score">
      <div>
        Your money: <strong>{userScore}</strong> $
      </div>
      <div>
        Your current bet: <strong>{currentBet}</strong> $
      </div>
    </div>
  );
};

export default Score;
