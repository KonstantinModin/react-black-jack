import { RoundState } from "../../utilities";

import "./index.css";

const Overlay = ({ roundState, onClick }) => {
  if (roundState === RoundState.Unset || roundState === RoundState.Active)
    return null;

  const text =
    roundState === RoundState.Win
      ? "You Win"
      : roundState === RoundState.Lost
      ? "You Lost"
      : "Draw";

  return (
    <div className="Overlay" onClick={onClick}>
      <div className="Overlay-content">{text}!</div>
    </div>
  );
};

export default Overlay;
