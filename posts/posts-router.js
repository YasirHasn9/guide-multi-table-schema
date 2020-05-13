const express = require("express");

const db = require("../data/db-config.js");
const Posts = require("./model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const posts = await Posts.all();
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
