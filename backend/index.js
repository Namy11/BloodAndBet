const express = require("express");

const app = express();
const port = 8000;

const gladiators = [
  {
    id: 1,
    name: "Testus1",
    attack: 8,
    defense: 5,
  },
  {
    id: 2,
    name: "Testus2",
    attack: 8,
    defense: 5,
  },
  {
    id: 3,
    name: "Testus3",
    attack: 8,
    defense: 5,
  },
  {
    id: 4,
    name: "Testus9",
    attack: 8,
    defense: 5,
  },
  {
    id: 5,
    name: "Testus5",
    attack: 8,
    defense: 5,
  },
  {
    id: 6,
    name: "Testus6",
    attack: 8,
    defense: 5,
  },
  {
    id: 7,
    name: "Testus7",
    attack: 8,
    defense: 12,
  },
  {
    id: 8,
    name: "Testus8",
    attack: 8,
    defense: 5,
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
  const gladiator = gladiators.find((gladiator) => gladiator.id === gladId);

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
