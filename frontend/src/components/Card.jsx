import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import BetPage from '../components/BetPage'

import "../styles/Card.css";


function Card() {
    const [gladiator1, setGladiator1] = useState("");
    const [gladiator2, setGladiator2] = useState("");


  useEffect(() => {
    axios
      .get("http://localhost:8000/api/gladiators") 
      .then((response) => {
        const data = response.data;
        const randomIndex1 = Math.floor(Math.random() * data.length);
        let randomIndex2 = Math.floor(Math.random() * data.length);
        while (randomIndex2 === randomIndex1) {
            randomIndex2 = Math.floor(Math.random() * data.length);
          }
        const gladiator1 = data[randomIndex1].name;
        const gladiator2 = data[randomIndex2].name;
        setGladiator1(gladiator1);
        setGladiator2(gladiator2);
               
    
      })

      .catch((error) => {
        console.error(
          "Erreur lors de la recuperation des donnees des gladiateurs :",
          error
        );
      });
  }, []);

  

  return (
    <div className="card">
        
      <figure className="CombatLeft">
      <Link className="combatPage"
      to="/BetPage"> 
        <h1>Gladiator Ligue 1</h1>
         
          <img src={"https://cdn.discordapp.com/attachments/1202541389003620364/1202697326406279168/ancient_rome_gladiators_by_digitalartwww_dfqm1vw-fullview.jpg?ex=65ce662b&is=65bbf12b&hm=b829a55eeb7bad354ab9a5b2ee3853de66b7dd44443d3a883bcb8799e361c147&"} alt="Img gladiateurs" />
         
        <h2 className="versus">{gladiator1} vs {gladiator2}</h2> 
        </Link>
      </figure>
       
          
        
      <figure className="CombatRight">
      <Link className="combatPage"
          to="/">
        <h1>Gladiator Ligue 1</h1>
 
          <img src={"https://cdn.discordapp.com/attachments/1202541389003620364/1202697326406279168/ancient_rome_gladiators_by_digitalartwww_dfqm1vw-fullview.jpg?ex=65ce662b&is=65bbf12b&hm=b829a55eeb7bad354ab9a5b2ee3853de66b7dd44443d3a883bcb8799e361c147&"} alt="Img gladiateurs" />
        <h2 className="versus"> Crixus vs Priscus</h2>
        </Link>  
      </figure>

     

      <figure className="CombatHaut">
        <Link to="/">
        <h1>Gladiator Ligue 2</h1>
        <img src={"https://cdn.discordapp.com/attachments/1202541389003620364/1202697326406279168/ancient_rome_gladiators_by_digitalartwww_dfqm1vw-fullview.jpg?ex=65ce662b&is=65bbf12b&hm=b829a55eeb7bad354ab9a5b2ee3853de66b7dd44443d3a883bcb8799e361c147&"} alt="Img gladiateurs" />
        <h2 className="versus2">Chichilus vs Kamiculus</h2>
        </Link>
      </figure>
     
      
      <figure className="CombatBas">
         <Link to="/">
         <h1>Gladiator Ligue 2</h1>
         <img src={"https://cdn.discordapp.com/attachments/1202541389003620364/1202697326406279168/ancient_rome_gladiators_by_digitalartwww_dfqm1vw-fullview.jpg?ex=65ce662b&is=65bbf12b&hm=b829a55eeb7bad354ab9a5b2ee3853de66b7dd44443d3a883bcb8799e361c147&"} alt="Img gladiateurs" />
         <h2 className="versus2">Mansorus vs Namycunus</h2>
         </Link>
      </figure>

     
  </div>
  );
}

export default Card;
