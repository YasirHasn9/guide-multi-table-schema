const db = require("../data/db-config");

module.exports = {
  all,
  findById,
  add,
  update
};

function all() {
  return db("posts");
}

function findById(id) {
  return db("posts")
    .where({ id })
    .first();
}

function add(post) {
  return db("posts")
    .insert(post, "id")
    .then(ids => findById(ids[0]));
}

function update(id, changes) {
  return db("posts")
    .update(changes)
    .where({ id });
}
