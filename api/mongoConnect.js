const { MongoClient } = require("mongodb");

const config = require("./config");
const url = config.dbLink;

var db;

module.exports = {
  connectMongo: function () {
    MongoClient.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (error, client) => {
        if (error) {
          return console.log("Connection failed");
        }

        //console.log(client);
        //listDatabases(client);
        db = client.db("fireofrings");
        return console.log("Connection established");
      }
    );
  },
  db: function () {
    return db;
  },
};
