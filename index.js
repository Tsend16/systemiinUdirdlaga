const express = require("express");
const app = express();
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
const server = http.Server(app);
const io = require("socket.io")(server);

const baiguullagaRoute = require("./routes/baiguullagaRoute");
const ajiltanRoute = require("./routes/ajiltanRoute");
const systemInfo = require("./routes/systemInfo");
const systemRoute = require("./routes/systemRoute");
const mailRoute = require("./routes/mailRoute");
const aldaaRoute = require("./routes/aldaaRoute");
const tsonkhRoute = require("./routes/tsonkhRoute");
const ajilRoute = require("./routes/ajilRoute");

const dbUrl =
  "mongodb://localhost:27017/udirdlaga?readPreference=primary&ssl=false";
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((result) => server.listen(8282))
  .catch((err) => console.log(err));

process.env.TZ = "Asia/Ulaanbaatar";

app.set("socketio", io);
app.use(cors());
app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(baiguullagaRoute);
app.use(ajiltanRoute);
app.use(systemInfo);
app.use(systemRoute);
app.use(mailRoute);
app.use(aldaaRoute);
app.use(tsonkhRoute);
app.use(ajilRoute);

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});
