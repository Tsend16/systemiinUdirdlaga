const express = require("express");
const app = express();
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
const server = http.Server(app);
const io = require("socket.io")(server);

const baiguullagaRoute = require("./routes/baiguullagaRoute");
const ajiltanRoute = require("./routes/ajiltanRoute");
const licenseRoute = require("./routes/licenseRoute");
const aldaaBarigch = require("./middleware/aldaaBarigch");

const dbUrl =
  "mongodb://localhost:27017/udirdlaga?readPreference=primary&ssl=false";
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((result) => server.listen(8082))
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
app.use(licenseRoute);
app.use(aldaaBarigch);

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});
