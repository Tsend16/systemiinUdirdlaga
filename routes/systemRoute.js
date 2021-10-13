const express = require('express');
const router = express.Router();
const {
    tokenShalgakh
} = require("../middleware/tokenShalgakh");
const cp = require('child_process');

router.post("/updateKhiiye/:system", tokenShalgakh, async (req, res, next) => {
    try {
        var system = req.params.system;
        if (system) {
            cp.exec("../updater/updateGym.sh", async (err, stdout, stderr) => {
                console.log(err, stdout, stderr)
                res.sendStatus(200).json({
                    err, stdout, stderr
                });
            })
        }
    } catch (error) {
        next(error);
    }
});

module.exports = router;