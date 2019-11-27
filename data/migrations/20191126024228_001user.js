
exports.up = async function (knex) {
    await knex.schema.createTable('USERS', tbl => {
        tbl.increments()
        tbl.string('userName').notNullable()
        tbl.string('password').notNullable()
        tbl.string('firstName').notNullable()
        tbl.string('lastName').notNullable()
        tbl.string('email').notNullable()
        tbl.string('profileImg')
        tbl.bool('isManager').defaultTo(false)
        tbl.bool('isAdmin').defaultTo(false)
        tbl.integer('ticketId')
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('USERS')
};
