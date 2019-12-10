
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 'JH4KA4576KC031014', make: 1996, model: 'Chevrolet', mileage: 89837977, transmission: 'manual', status: 'salvage'},
        { VIN: 'JH4KA4650KC031815', make: 2007, model: 'Ford', mileage: 654644464, transmission: 'automatic', status: 'clean'},
        { VIN: '1GCEC14W6TZ225573', make: 2018, model: 'Infinite', mileage: 165654, transmission: 'automatic', status: 'clean'}
      ]);
    });
};
