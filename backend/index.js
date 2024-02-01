const express = require("express");
const app = express();
const port = 8000;

app.listen(port, () => {
  console.info(`Le serveur tourne à la perfection sur le port ${port}`);
});
