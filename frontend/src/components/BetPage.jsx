import { useParams, useLoaderData } from "react-router-dom";
import { useState } from "react";

function BetPage() {
  const { id1, id2 } = useParams();

  const gladiators = useLoaderData();

  console.info(id1, id2);
  console.info(gladiators);

  return (
    <div>
      <h1>Page de Pari</h1>
      <div>
        {gladiators
          .filter((gladiators) => gladiators.id)
          .map((gladiator) => (
            <div key={gladiator.id}>
              <h2>{gladiator.name}</h2>
              <p>Overall: {gladiator.overall}</p>
              <p>Attaque: {gladiator.attack}</p>
              <p>Défense: {gladiator.defense}</p>
              <p>Dextérité: {gladiator.dexterity}</p>
              <p>Résistance: {gladiator.resistance}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BetPage;
