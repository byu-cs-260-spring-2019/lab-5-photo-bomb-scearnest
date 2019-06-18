const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');

const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);

const app = express();

var db = firebase.firestore();

// const tickets = require("./tickets.js");
// app.use("/api/tickets", tickets);


// app.post('/api/items', async (req, res) => {
//     try {
//         let querySnapshot = await itemsRef.get();
//
//         let item = {
//             id: req.body.user,
//             user: req.body.user,
//         };
//         itemsRef.doc(item.user.toString()).set(item);
//         res.send(item);
//
//       } catch (error) {
//         console.log(error);
//         res.sendStatus(500);
//       }
// });

exports.app = functions.https.onRequest(app);
