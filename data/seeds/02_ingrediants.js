
exports.seed = function(knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'peanut butter'},
    { ingredient_name: 'grape jelly'},
    { ingredient_name: 'bread'},
    { ingredient_name: 'milk'},
    { ingredient_name: 'cheerios'},
  ]);
};