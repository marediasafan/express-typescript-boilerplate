
exports.up = function(knex) {
    return knex.schema.createTable('posts', table => {
        table.increments('id').primary();
        table.string('content');
        table.integer('left');
        table.integer('right');
        table.timestamps();
        table.timestamp('deleted_at');
        table.boolean('active').default(1);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('posts');
};
