const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://TheWizardJr:ulDHQ532CAs4Nkrl@cluster0.ygycrtd.mongodb.net/r18c20prod?retryWrites=true&w=majority")
  .then(() => {
    console.log("CONNEXION DB OK");
  })
  .catch((e) => {
    console.log("CONNEXION DB KO");
  });

const app = express();
app.use(express.static(`${__dirname}/../client/build`));

app.listen(80);
