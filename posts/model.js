const db = require("../data/db-config");

module.exports = {
  all,
  findById,
  add
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
