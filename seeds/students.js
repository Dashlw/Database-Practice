exports.seed = function(knex, Promise) {
    var someStudents = [
        knex('students').insert({
            name: 'Dash',
            email: 'dwalt@yahoo.com'
        }),
        knex('students').insert({
            name: 'Mad Max',
            email: 'Max@gmail.com'
        }),
        knex('students').insert({
            name: 'Bamboo',
            email: 'boo@aol.com'
        }),
        knex('students').insert({
            name: 'Hisna Meis',
            email: 'bob@gmail.com'
        }),
    ];

    return knex('students').del()
        .then(function() {
            return Promise.all(someStudents);
        });
};
