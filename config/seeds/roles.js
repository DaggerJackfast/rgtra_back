
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
          {id: 1, label: 'Admin'},
          {id: 2, label: 'User'}
      ]);
    });
};
