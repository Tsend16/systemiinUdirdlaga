const express = require("express");
const router = express.Router();
const tuluvluguu = require("../models/tuluvluguu");

const { crud } = require("../components/crud");

crud(router, "tuluvluguu", tuluvluguu);

module.exports = router;
