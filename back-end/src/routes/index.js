const express = require("express");
const users = require("./usersRoute");
const posts = require("./postsRoute");

module.exports = (app) => {
  app.use(express.json());
  app.use(users);
  app.use(posts);
  app.get("/", (_req, res) => {
    res.send("Desafio Desenvolvedor Jr 3 - SoftMarkers");
  });
};
