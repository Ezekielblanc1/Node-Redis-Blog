const User = require("../models/User");

const router = require("express").Router();

router.post("/register", async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ message: "User exists aleady.." });
  }
  await User.create({ ...req.body });
  return res.status(200).json({ message: "User created successfully..." });
});

module.exports = router;
