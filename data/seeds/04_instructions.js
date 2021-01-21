
exports.seed = function(knex) {
  return knex('instructions').insert([
    { recipe_id: 1, step_number: 1, step_info: "spread evenly on one slice of bread"},
    { recipe_id: 1, step_number: 2, step_info: "spread evenly on one slice of bread"},
    { recipe_id: 2,  step_number: 1, step_info: "pour into bowl"},
    { recipe_id: 2,  step_number: 2, step_info: "pour into bowl"},
    { recipe_id: 3,  step_number: 1, step_info: "place bread into toaster"},
  ]);
};
