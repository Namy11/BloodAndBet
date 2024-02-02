import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import "../styles/DuelCard.css";

function DuelCard({ gladiator1, gladiator2, id1, id2, onDuelClick }) {
  const handleDuelClick = () => {
    onDuelClick(id1, id2);
    console.info(
      `Navigation vers la page de pari avec les ID: ${id1}, ${id2} `
    );
  };

  return (
    <figure className="duelCard" onClick={handleDuelClick}>
      <div className="duelLink">
        <h1>Prochain Duel</h1>
        <Link to="/BetPage">
          <img
            src="src/assets/ancient_rome_gladiators_by_digitalartwww_dfqm1vw-fullview.jpg"
            alt="Img gladiateurs"
          />
        </Link>
        <h2 className="versus">
          {gladiator1} vs {gladiator2}
        </h2>
      </div>
    </figure>
  );
}

DuelCard.propTypes = {
  gladiator1: PropTypes.string.isRequired,
  gladiator2: PropTypes.string.isRequired,
  id1: PropTypes.number.isRequired,
  id2: PropTypes.number.isRequired,
  onDuelClick: PropTypes.func.isRequired,
};

export default DuelCard;
