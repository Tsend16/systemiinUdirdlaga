const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

exports.tokenShalgakh = asyncHandler(async (req, res, next) => {
  if (!req.headers.authorization) {
    throw new Error("Энэ үйлдлийг хийх эрх байхгүй байна!", 401);
  }
  const token = req.headers.authorization.split(" ")[1];
  if (!token) throw new Error("Токен байхгүй байна!");
  const tokenObject = jwt.verify(token, "dAjiltanTokenKey", 401);
  if (!tokenObject.turul) {
    req.body.nevtersenAjiltniiToken = tokenObject;
  }
  next();
});
