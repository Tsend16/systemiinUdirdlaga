const mongoose = require("mongoose");

async function mongoTransaction(req, res, next, ...methods) {
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    var hasError = false;
    for (const method of methods) {
      if (!hasError) hasError = await method(req, res, next);
    }
    if (hasError) await session.abortTransaction();
    else await session.commitTransaction();
    if (hasError) next(error);
    else res.send("Amjilttai");
    session.endSession();
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
}

module.exports = mongoTransaction;
