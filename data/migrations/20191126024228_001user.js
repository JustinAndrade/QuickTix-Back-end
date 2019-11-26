
exports.up = async function (knex) {
    await knex.schema.createTable(USER, tbl => {
        tbl.increments()
        tbl.string('userName').notNullable()
        tbl.string('firstName').notNullable()
        tbl.string('lastName').notNullable()
        tbl.string('email').notNullable()
        tbl.string('profileImg')
        tbl.bool('isAdmin').defaultTo(false)
        tbl.integer('ticketId')
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists(USER)
};
