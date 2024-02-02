import { useState, useEffect } from "react";
import axios from "axios";
import DuelCard from "./DuelCard";
import "../styles/DuelCard.css";

function Card() {
  const [duels, setDuels] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/gladiators")
      .then((response) => {
        const gladiators = response.data;
        const shuffledGladiators = gladiators.sort(() => Math.random() - 0.5);
        const duels = [];

        for (let i = 0; i < shuffledGladiators.length; i += 2) {
          if (shuffledGladiators[i + 1]) {
            duels.push({
              gladiator1: shuffledGladiators[i].name,
              gladiator2: shuffledGladiators[i + 1].name,
              id1: shuffledGladiators[i].id,
              id2: shuffledGladiators[i + 1].id,
            });
          }
        }

        setDuels(duels.slice(0, 4));
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données des gladiateurs :",
          error
        );
      });
  }, []);

  const handleDuelClick = (id1, id2) => {
    console.log("Navigation vers la page de pari avec les ID:", id1, id2);
  };
  console.info(duels);

  return (
    <div className="homepage">
      <div className="Fight">
        {duels.map((duel, index) => (
          <DuelCard
            key={index}
            gladiator1={duel.gladiator1}
            gladiator2={duel.gladiator2}
            id1={duel.id1}
            id2={duel.id2}
            onDuelClick={handleDuelClick}
          />
        ))}
      </div>
      <div className="Panier">
        <p>Panier</p>
      </div>
      {duels.map((duel, index) => (
        <DuelCard key={index} duel={duel} />
      ))}
    </div>
  );
}

export default Card;
