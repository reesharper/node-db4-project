
exports.seed = function(knex) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, quantity: "2 scoops"},
    { recipe_id: 1, ingredient_id: 2, quantity: "1 scoops"},
    { recipe_id: 1,  ingredient_id: 3, quantity: "2 slices"},
    { recipe_id: 2,  ingredient_id: 4, quantity: "half of bowl"},
    { recipe_id: 2,  ingredient_id: 5, quantity: "half of bowl"},
    { recipe_id: 3,  ingredient_id: 3, quantity: "2 slices"},
  ]);
};