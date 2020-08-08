const { MongoClient } = require("mongodb");
const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

const mongoConnect = require("./mongoConnect");
const { addUser, removeUser, getUsers } = require("./usergroup");

const app = express();
app.use(express.json());
app.use(cors());
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("new connection!!");

  socket.on("join", ({ name, roomCode }) => {
    const { user } = addUser({ id: socket.id, name, roomCode });
    const { usersarr } = getUsers({ roomCode });
    console.log(usersarr);
    io.sockets.emit("usersUpdated", { usersarr });
    socket.join(user.roomCode);
  });

  socket.on("userLength", ({ roomCode }) => {
    const { usersarr } = getUsers({ roomCode });
    io.sockets.emit("userLength", usersarr.length());
  });

  socket.on("disconnect", () => {
    console.log("user left");
  });
});

const roomRouter = require("./routes/room");
const questionsRouter = require("./routes/questions");

app.use("/room", roomRouter);
app.use("/questions", questionsRouter);

// async function listDatabases(client) {
//   databasesList = await client.db().admin().listDatabases();
//   console.log("Databases:");
//   databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
// }

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`listening on port ${port}`));
mongoConnect.connectMongo();
