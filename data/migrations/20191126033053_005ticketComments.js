
exports.up = async function (knex) {
    await knex.schema.createTable('TICKET_COMMENTS', tbl => {
        tbl.increments()
        tbl.integer('userId').notNullable()
        tbl.string('description').notNullable()
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('TICKET_COMMENTS')
};
