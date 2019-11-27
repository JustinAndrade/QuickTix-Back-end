
exports.up = async function (knex) {
    await knex.schema.createTable('USER_ROLES', tbl => {
        tbl.increments()
        tbl.boolean('user').notNullable()
        tbl.boolean('manager').notNullable()
        tbl.boolean('admin').notNullable()
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('USER_ROLES')
};
