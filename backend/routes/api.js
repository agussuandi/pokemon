const express = require("express");
const router = express.Router();

const pokemonController = require("../controllers/pokemonController");

router.get("/pokemon", pokemonController.index);
router.get("/pokemon/:name", pokemonController.show);
router.post("/pokemon", pokemonController.store);

module.exports = router;