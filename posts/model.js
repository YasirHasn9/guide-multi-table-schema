const db = require("../data/db-config");

module.exports = {
  all,
  findById
};

function all() {
  return db("posts");
}

function findById(id) {
  return db("posts")
    .where({ id })
    .first();
}
