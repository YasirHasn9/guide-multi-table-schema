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
router.get("/:id", async (req, res, next) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (err) {
    next(err);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const newPost = await Posts.add(req.body);
    if (newPost) {
      res.json(newPost);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const post = await Posts.update(req.params.id, req.body);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
