const cors = require("cors");
const express = require("express");

const app = express();
const port = 8000;

app.use(cors());

const gladiators = [
  {
    id: 1,
    name: "Kamiculus",
    overall: "6.75/10",
    attack: 10,
    defense: 7,
    dexterity: 3,
    resistance: 7,
  },
  {
    id: 2,
    name: "Chichilus",
    overall: "6.1/10",
    attack: 5,
    defense: 7,
    dexterity: 7,
    resistance: 5.5,
  },
  {
    id: 3,
    name: "Namycunus",
    overall: "6.3/10",
    attack: 5,
    defense: 8,
    dexterity: 7,
    resistance: 5.5,
  },
  {
    id: 4,
    name: "Mansorus",
    overall: "6.75/10",
    attack: 9,
    defense: 3,
    dexterity: 6,
    resistance: 9,
  },
  {
    id: 5,
    name: "Commodus",
    overall: "4.7/10",
    attack: 7.5,
    defense: 4.5,
    dexterity: 5,
    resistance: 2,
  },
  {
    id: 6,
    name: "Slavicus",
    overall: "6.7/10",
    attack: 7,
    defense: 5,
    dexterity: 9,
    resistance: 6,
  },
  {
    id: 7,
    name: "Spartacus",
    overall: "3.5/10",
    attack: 4,
    defense: 5,
    dexterity: 4,
    resistance: 1,
  },
  {
    id: 8,
    name: "Carpophorus",
    overall: "5.5/10",
    attack: 1,
    defense: 10,
    dexterity: 1,
    resistance: 10,
  },
];

const welcome = (req, res) => {
  res.send("API GLADIATORS");
};

const getAllGladiators = (req, res) => {
  res.json(gladiators);
};

const getGladiatorsById = (req, res) => {
  const gladId = parseInt(req.params.id, 10);
  const gladiator = gladiators.find(() => gladiator.id === gladId);

  if (gladiator) {
    res.json(gladiator);
  } else {
    res
      .status(404)
      .send(`le gladiateur avec l'id ${gladId} n'a pas été trouvé...`);
  }
};

const getGladiatorByName = (req, res) => {
  const search = req.query.name.toLocaleLowerCase();
  const gladList = gladiators.filter((gladiator) =>
    gladiator.name.toLocaleLowerCase().includes(search)
  );

  if (gladList.length > 0) {
    res.json(gladList);
  } else {
    res.status(404).send(`Aucun résultat pour la recherche : ${search} ...`);
  }
};

app.get("/api", welcome);
app.get("/api/gladiators", getAllGladiators);
app.get("/api/gladiators/:id", getGladiatorsById);
app.get("/api/search", getGladiatorByName);

app.listen(port, () => {
  console.info(`Le serveur tourne à la perfection sur le port ${port}`);
});
