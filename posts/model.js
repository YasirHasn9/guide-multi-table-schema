const db = require("../data/db-config");

module.exports = {
  all
};

function all() {
  return db("posts");
}
