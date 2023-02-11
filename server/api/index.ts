import express from "express";
import cors from "cors";
import { createAndSaveUser, getAllUsers } from "../domain/user";
import { sendErrorToClient } from "../../error";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2Og3rkqXrCvRNP4EmMNZ7Vbj8txiIojE",
  authDomain: "day27-88563.firebaseapp.com",
  projectId: "day27-88563",
  storageBucket: "day27-88563.appspot.com",
  messagingSenderId: "537156843779",
  appId: "1:537156843779:web:48ed46057ee0dac4509136",
};

const firebaseApp = initializeApp(firebaseConfig);

const app = express();

app.use(cors());
app.use(express.json());

// at /users, i need to open that file, users.json, and then return that to the client.
app.get("/user", async function (req, res) {
  console.log("CALLED GET USER ROUTE");
  const users = await getAllUsers(firebaseApp);
  res.send(users);
});

app.post("/user", async function (req, res) {
  console.log("CALLED POST USER ROUTE");
  // req.body has the incoming JSON data.
  const name = req.body.name;
  const age = req.body.age;
  const ethereumAddress = req.body.ethereumAddress;

  try {
    // validateUserInput(name, age, ethereumAddress);
  } catch (e) {
    sendErrorToClient(res, e.message);
    return;
  }

  const user = await createAndSaveUser(name, age, ethereumAddress, firebaseApp);

  res.send(user);
});

app.listen("3002");
