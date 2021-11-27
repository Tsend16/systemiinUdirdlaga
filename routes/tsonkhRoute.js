const express = require("express");
const router = express.Router();
const tsonkh = require("../models/tsonkh");

const { crud } = require("../components/crud");

crud(router, "tsonkh", tsonkh);

module.exports = router;
