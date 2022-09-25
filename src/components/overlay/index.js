import { RoundState } from "../../utilities";

import "./index.css";

const Overlay = ({ roundState, onClick }) => {
  if (roundState === RoundState.Unset || roundState === RoundState.Active)
    return null;

  return (
    <div className="Overlay" onClick={onClick}>
      <div className="Overlay-content">You {roundState}!</div>
    </div>
  );
};

export default Overlay;
