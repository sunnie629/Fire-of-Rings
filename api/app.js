const { MongoClient } = require("mongodb");
const express = require("express");
//const cors = require("cors");
const mongoConnect = require("./mongoConnect");

const app = express();
app.use(express.json());

const usersRouter = require("./routes/users");
const questionsRouter = require("./routes/questions");

app.use("/users", usersRouter);
app.use("/questions", questionsRouter);

// async function listDatabases(client) {
//   databasesList = await client.db().admin().listDatabases();
//   console.log("Databases:");
//   databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
// }

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}`));
mongoConnect.connectMongo();
