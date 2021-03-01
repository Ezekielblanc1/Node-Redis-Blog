const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRouter = require("./route/blog");
const userRouter = require("./route/user");
app.use(express.json());
app.use(morgan('tiny'));


app.use("/user", userRouter);
app.use("/blog", blogRouter);
mongoose.Promise = require("bluebird");

mongoose
  .connect("mongodb://127.0.0.1:27017/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully.."))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5001
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
