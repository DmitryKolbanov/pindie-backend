const pagesRouter = require("express").Router();
const { sendIndex } = require("../controllers/auth.js");

pagesRouter.get("/", sendIndex);

module.exports = pagesRouter;
