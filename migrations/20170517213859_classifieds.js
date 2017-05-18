
exports.up = function(knex) {
  return knex.schema.createTable('classifieds', table => {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('price').notNullable;
    table.string('item_image').nonotNullable;
    table.timestamps(true, true);
  })

};

exports.down = function(knex) {
return knex.schema.dropTable('classifieds');
};



// table.string('title').notNullable().defaultTo('');
//     table.string('author').notNullable().defaultTo('');
//     table.string('genre').notNullable().defaultTo('');
//     table.text('description').notNullable().defaultTo('');
//     table.text('cover_url').notNullable().defaultTo('');
//     table.timestamps(true, true);
