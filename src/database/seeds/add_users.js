exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tblusers').del()
    .then(function () {
      // Inserts seed entries
      return knex('tblusers').insert([
        { name: 'Jhonatan',
        idade: 20,
        email: 'itjhonatan01@gmail.com'}
      ]);
    });
};
