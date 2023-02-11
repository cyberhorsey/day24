import { collection, getDocs, getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
async function getAllUsers(firebaseApp) {
    const database = getFirestore(firebaseApp);
    const docRef = collection(database, "users");
    const userCollection = await getDocs(docRef);
    const users = [];
    userCollection.forEach((document) => {
        users.push(document.data());
    });
    return users;
}
async function createAndSaveUser(name, age, ethereumAddress, firebaseApp) {
    const user = {
        name: name,
        age: age,
        ethereumAddress: ethereumAddress,
    };
    const database = getFirestore(firebaseApp);
    const collectionName = "users";
    await setDoc(doc(database, collectionName, user.name), user);
    return user;
}
export { createAndSaveUser, getAllUsers };
