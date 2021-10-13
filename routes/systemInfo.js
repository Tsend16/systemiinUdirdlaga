const express = require('express');
const router = express.Router();
const {
    tokenShalgakh
} = require("../middleware/tokenShalgakh");
const si = require('systeminformation');

router.get("/systemiinMedeelelAvya", tokenShalgakh, async (req, res, next) => {
    try {
        var mem = await si.mem();
        var cpu = await si.cpu();
        var fsSize = await si.fsSize();
        res.status(200).json({
            mem,
            cpu,
            fsSize
        })
    } catch (error) {
        next(error);
    }
});


module.exports = router;