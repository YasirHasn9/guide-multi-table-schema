const db = require("../data/db-config");

module.exports = {
  all,
  findById,
  add,
  update,
  remove
};

function all() {
  return db("posts as p")
    .join("users as u", "p.user_id", "=", "u.id")
    .select("p.contents as quote", "u.username as saidBy");
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

function remove(id) {
  return db("posts")
    .where({ id })
    .del();
}
