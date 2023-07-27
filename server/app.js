const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const multer = require("multer");
const userRouter = require("./routes/userroute");
const app = express();
dotenv.config();

app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));

// port
const port = process.env.PORT;

//database connection
// "mongodb://localhost:27017/Project2"
mongoose
  .connect(process.env.MONGODBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

//multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload/", upload.single("file"), (req, res) => {
  return res
    .status(200)
    .json({ status: "success", message: "file has been uploaded" });
});

//routes
app.use(express.json());
app.use("/v1/user", userRouter);
// app.use("/v2/postApi", postRouter);
// app.use("/v3/category", categoryRouter);
// app.use("/v4/comments", commentRouter);

app.listen(port, () => {
  console.log(`server started at:http://localhost:${port}`);
});
