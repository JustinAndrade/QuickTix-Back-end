
exports.up = async function (knex) {
    await knex.schema.createTable('TICKET_CATEGORIES', tbl => {
        tbl.increments()
        tbl.string('name')
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('TICKET_CATEGORIES')
};
