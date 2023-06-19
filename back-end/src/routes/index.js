const express = require("express");
const users = require("./usersRoute");
const posts = require("./postsRoute");
const auth = require("./authRoute");

module.exports = app => {
    app.use(express.json(),
    auth,
    users,
    posts,
  );
};
