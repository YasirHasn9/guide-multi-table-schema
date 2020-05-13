const db = require("../data/db-config")

module.exports = {
    all,
    findByIf,
    add,
    update,
    remove
}


function all(){
    return db("users")
}