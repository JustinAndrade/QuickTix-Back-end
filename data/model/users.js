const db = require('../dbConfig')
const USERS = 'USERS'

module.exports = {
    find,
    findById
}

function find() {
    return db(USERS);
}

function findById(id) {
    return db(USERS).where({ id }).first();
}