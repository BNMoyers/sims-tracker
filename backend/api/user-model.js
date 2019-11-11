//imports
const db = require('../data/dbConfig')

//exports
module.exports = {
    find,
    findBy,
    findById,
    add
}

//helper methods
function find() {
    return db('users')
            .select('id', 'username');
}

function findBy(filter) {
    return db('users')
            .where(filter);
}

function findById(id) {
    return db('users')
            .select ('id', 'username')
            .where({ id })
            .first();
}

function add(user) {
    return db('users')
            .insert(user, 'id')
            .then(ids => {
                const [id] = ids;
                return findById(id);
            });
}