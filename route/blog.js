const router = require("express").Router();
const Blog = require("../models/Blog");
const cleanCache = require("../middleware/cleanCache");

router.get("/:user", async (req, res, next) => {
  const blogs = await Blog.find({ owner: req.params.user }).cache({
    key: req.params.user,
  });

  res.status(200).json({
    blogs,
  });
});

router.post("/create", cleanCache, async (req, res, next) => {
  const existingBlog = await Blog.findOne({ title: req.body.title });
  if (!existingBlog) {
    let newBlog = new Blog(req.body);

    const result = await newBlog.save();

    return res.status(200).json({
      message: "Blog is successfully created",
      result,
    });
  }

  res.status(200).json({
    message: "Blog with same title exists",
  });
});
module.exports = router;
