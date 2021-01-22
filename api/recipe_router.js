const express = require('express');

const Recipe = require('./recipe_model');

const router = express.Router();

router.get('/', (req, res) => {
  Recipe.getRecipes()
    .then(recipes => {
      res.json(recipes)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    })
});

router.get('/:id/shoppingList', (req, res) => {
  const { id } = req.params;

  Recipe.getShoppingList(id)
    .then(recipes => {
      res.json(recipes)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipe ingredients' });
    })
});

router.get('/:id/instructions', (req, res) => {
  const { id } = req.params;

  Recipe.getInstructions(id)
    .then(recipes => {
      res.json(recipes)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipe instructions' });
    })
});


module.exports = router