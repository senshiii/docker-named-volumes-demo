const express = require("express");
const path = require("path");
const { ppid } = require("process");
const fs = require("fs").promises;

const app = express();

const POSTS = [
  {
    postId: 1,
    title: "Understanding Docker Volumes",
  },
  {
    postId: 2,
    title: "Introduction to Docker",
  },
];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/logs", express.static("logs"));

// LOG MIDDLEWARE
app.use(async (req, res, next) => {
  if (!["GET", "POST"].includes(req.method)) next();
  const logFilePath = path.join(__dirname, "logs", "log.txt");
  await fs.appendFile(
    logFilePath,
    `${req.method.toUpperCase()}: ${req.url} ${JSON.stringify(
      req.body
    )} ${new Date().toISOString()}\n`
  );
  next();
});

app.get("/post", async (req, res) => {
  res.json(POSTS);
});

app.get("/post/:postId", (req, res) => {
  res.json(POSTS.find((post) => post.id == req.params.id));
});

app.post("/post", async (req, res) => {
  const newPost = { postId: POSTS.length + 1, title: req.body.title };
  POSTS.push(newPost);
  res.json(newPost);
});

app.listen(8080, () => console.log(`Server listening on port 8080`));
