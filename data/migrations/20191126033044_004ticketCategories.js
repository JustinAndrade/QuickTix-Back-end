
exports.up = async function (knex) {
    await knex.schema.createTable(TICKET_CATEGORIES, tbl => {
        tbl.increments()
        tbl.string('title').notNullable()
        tbl.string('description').notNullable()
        tbl.string('fixesAttempted').notNullable()
        tbl.integer('userId')
        tbl.string('assignedId')
        tbl.bool('statusId')
        tbl.string('comments')
        tbl.string('categories')
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists(TICKET_CATEGORIES)
};
