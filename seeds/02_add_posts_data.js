
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, content: 'Do you prefer cats or dogs?', left: null, right: null},
        {id: 2, content: 'I like cats', left: 1, right: 4},
        {id: 3, content: 'I like dogs', left: 1, right: null},
        {id: 4, content: 'Why?', left: 2, right: 6},
        {id: 5, content: 'I agree', left: 2, right: null},
        {id: 6, content: 'Because cats are good!', left: 4, right: 7},
        {id: 7, content: 'No they’re not!', left: 6, right: null},
      ]);
    });
};
