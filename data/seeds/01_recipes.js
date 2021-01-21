
exports.seed = function(knex) {
  return knex('recipes').insert([
    { recipe_name: 'peanut butter jelly'},
    { recipe_name: 'cereal'},
    { recipe_name: 'toast'}
  ]);
};
