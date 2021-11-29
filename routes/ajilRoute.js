const express = require("express");
const router = express.Router();
const ajil = require("../models/ajil");

const { crud } = require("../components/crud");

crud(router, "ajil", ajil);

module.exports = router;
