"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_1 = require("../domain/user");
const error_1 = require("../../error");
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
const firebaseConfig = {
    apiKey: "AIzaSyA2Og3rkqXrCvRNP4EmMNZ7Vbj8txiIojE",
    authDomain: "day27-88563.firebaseapp.com",
    projectId: "day27-88563",
    storageBucket: "day27-88563.appspot.com",
    messagingSenderId: "537156843779",
    appId: "1:537156843779:web:48ed46057ee0dac4509136",
};
const firebaseApp = (0, app_1.initializeApp)(firebaseConfig);
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// at /users, i need to open that file, users.json, and then return that to the client.
app.get("/user", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("CALLED GET USER ROUTE");
        const users = yield (0, user_1.getAllUsers)(firebaseApp);
        res.send(users);
    });
});
app.post("/user", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("CALLED POST USER ROUTE");
        // req.body has the incoming JSON data.
        const name = req.body.name;
        const age = req.body.age;
        const ethereumAddress = req.body.ethereumAddress;
        try {
            // validateUserInput(name, age, ethereumAddress);
        }
        catch (e) {
            (0, error_1.sendErrorToClient)(res, e.message);
            return;
        }
        const user = yield (0, user_1.createAndSaveUser)(name, age, ethereumAddress, firebaseApp);
        res.send(user);
    });
});
app.listen("3002");
