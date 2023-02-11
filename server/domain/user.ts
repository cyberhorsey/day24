import { FirebaseApp } from "firebase/app";
import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

type User = {
  name: string;
  age: number;
  ethereumAddress: string;
};

async function getAllUsers(firebaseApp: FirebaseApp): Promise<User[]> {
  const database = getFirestore(firebaseApp);
  const docRef = collection(database, "users");

  const userCollection = await getDocs(docRef);
  const users: User[] = [];

  userCollection.forEach((document) => {
    users.push(document.data() as User);
  });

  return users;
}
async function createAndSaveUser(
  name: string,
  age: number,
  ethereumAddress: string,
  firebaseApp: FirebaseApp
): Promise<User> {
  const user: User = {
    name: name,
    age: age,
    ethereumAddress: ethereumAddress,
  };

  const database = getFirestore(firebaseApp);
  const collectionName = "users";

  await setDoc(doc(database, collectionName, user.name), user);
  return user;
}

export type { User };
export { createAndSaveUser, getAllUsers };
