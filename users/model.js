const db = require("../data/db-config");

module.exports = {
  all,
  findById,
  add,
  update,
  remove
};

function all() {
  return db("users");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function add(changes) {
  return db("users")
    .insert(changes, "id")
    .then(ids => {
      return findById(ids[0]);
    });
}

function update(id, change) {
  return db("users")
    .update(change)
    .where({ id })
}

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}
