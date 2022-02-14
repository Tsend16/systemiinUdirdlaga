const express = require("express");
const router = express.Router();
const { tokenShalgakh } = require("../middleware/tokenShalgakh");
const cp = require("child_process");

router.post("/updateKhiiye/:system", tokenShalgakh, async (req, res, next) => {
  try {
    var system = req.params.system;
    var io = req.app.get('socketio')
    if (system) {
      cp.exec(
        "cd ../" + system + "&& yarn update",
        function (err, stdout, stderr) {
          io.emit(system, {err, stdout, stderr});
          res.json({ err, stdout, stderr });
        }
      );
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
