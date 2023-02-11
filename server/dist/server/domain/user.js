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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.createAndSaveUser = void 0;
const firestore_1 = require("firebase/firestore");
const firestore_2 = require("firebase/firestore");
function getAllUsers(firebaseApp) {
    return __awaiter(this, void 0, void 0, function* () {
        const database = (0, firestore_1.getFirestore)(firebaseApp);
        const docRef = (0, firestore_1.collection)(database, "users");
        const userCollection = yield (0, firestore_1.getDocs)(docRef);
        const users = [];
        userCollection.forEach((document) => {
            users.push(document.data());
        });
        return users;
    });
}
exports.getAllUsers = getAllUsers;
function createAndSaveUser(name, age, ethereumAddress, firebaseApp) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = {
            name: name,
            age: age,
            ethereumAddress: ethereumAddress,
        };
        const database = (0, firestore_1.getFirestore)(firebaseApp);
        const collectionName = "users";
        yield (0, firestore_2.setDoc)((0, firestore_2.doc)(database, collectionName, user.name), user);
        return user;
    });
}
exports.createAndSaveUser = createAndSaveUser;
