import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import express = require("express");

const cors = require("cors");
const app: express.Application = express();

admin.initializeApp();
const db = admin.firestore();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});
/* Users */
app.post("/users", (request, response) => {
  db.collection("users")
    .doc(request.body.uid)
    .set({
      email: request.body.email,
      id: request.body.uid,
      name: request.body.name,
    })
    .then((i) => {
      response.status(200).json(i);
    })
    .catch((e) => {
      response.json(e);
    });
});

app.put("/users", (request, response) => {
  db.collection("/users")
    .doc(request.body.uid)
    .update({
      walletId: request.body.walletId,
    })
    .then((i) => {
      response.status(200).json(i);
    })
    .catch((e) => {
      response.json(e);
    });
});

app.put("/usersData", (request, response) => {
  db.collection("/users")
    .doc(request.body.uid)
    .update({
      name: request.body.name,
      email: request.body.email,
    })
    .then((i) => {
      response.status(200).json(i);
    })
    .catch((e) => {
      response.json(e);
    });
});
/* Wallets */
app.post("/wallet", (request, response) => {
  db.collection("wallets")
    .doc(request.body.uid)
    .set({
      id: request.body.uid,
      coins: request.body.coins,
      totalValue: request.body.totalValue,
      capitalValue: request.body.capitalValue,
    })
    .then((i) => {
      response.status(200).json(i);
    })
    .catch((e) => {
      response.json(e);
    });
});
app.put("/walletAdd", (request, response) => {
  db.collection("/wallets")
    .doc(request.body.uid)
    .update({
      coins: request.body.coins,
      totalValue: request.body.totalValue,
      capitalValue: request.body.capitalValue,
    })
    .then((i) => {
      response.status(200).json(i);
    })
    .catch((e) => {
      response.json(e);
    });
});
app.put("/walletSell", (request, response) => {
  db.collection("/wallets")
    .doc(request.body.uid)
    .update({
      coins: request.body.coins,
      totalValue: request.body.totalValue,
      capitalValue: request.body.capitalValue,
    })
    .then((i) => {
      response.status(200).json(i);
    })
    .catch((e) => {
      response.json(e);
    });
});

export const api = functions.https.onRequest(app);
