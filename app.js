const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const gamesRouter = require("./routes/games");
const categoriesRouter = require("./routes/categories");
const usersRouter = require("./routes/users");

const connectToDatabase = require("./database/connect");
const cors = require("./middlewares/cors");

const app = express();
const PORT = 3000;

connectToDatabase();

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, "public")),
    gamesRouter,
    categoriesRouter,
    usersRouter
);

app.listen(PORT);
