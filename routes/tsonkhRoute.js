const express = require("express");
const router = express.Router();
const Tsonkhnuud = require("../models/tsonkhnuud");

const { crud } = require("../components/crud");
crud(router, "tsonkh", Tsonkhnuud);
module.exports = router;
