
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.string('VIN', 128).notNullable().unique();
      tbl.integer('make').notNullable();
      tbl.string('model').notNullable();
      tbl.integer('mileage').notNullable();
      tbl.string('transmission');
      tbl.string('status');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
