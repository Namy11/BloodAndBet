import DuelCard from "./DuelCard";

function BetPage() {
  // Récupérer l'ID des combattants

  return (
    <div className="betPage">
      <DuelCard
        gladiator1="Nom du gladiateur 1"
        gladiator2="Nom du gladiateur 2"
        id1="ID du gladiateur 1"
        id2="ID du gladiateur 2"
      />
      {/*  Passer les noms et les ID des gladiateurs en tant que props */}
    </div>
  );
}

export default BetPage;
