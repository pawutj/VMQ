import express from "express";
const getApiAndEmit = require("getApiAndEmit");
export const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});
