exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', (students) => {
        students.increments();
        students.string('name');
        students.string('email')
    })
};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableifExists('students');

};
