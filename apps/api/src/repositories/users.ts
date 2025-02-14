import { Filter } from "firebase-admin/firestore";
import { User, UserFilterableProperty } from "../models/user";
import { db } from "../services/firebase";

function parseUsersSnapshot(
  snapshot: FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>
) {
  const users: User[] = [];

  snapshot.forEach((doc) => {
    users.push(doc.data() as User);
  });

  return users;
}

export async function getAllUsers() {
  const users: User[] = [];

  const usersRef = db.collection("users");
  const snapshot = await usersRef.get();

  if (snapshot.empty) {
    return users;
  }

  users.push(...parseUsersSnapshot(snapshot));

  return users;
}

/**
 * strict equality as we don't have full-text search capability
 */
export async function getUsersBy(term: string, key?: UserFilterableProperty) {
  const users: User[] = [];

  const usersRef = db.collection("users");
  let query: FirebaseFirestore.Query;

  if (key) {
    query = usersRef.where(key, "==", term);
  } else {
    query = usersRef.where(
      Filter.or(
        Filter.where("firstName", "==", term),
        Filter.where("lastName", "==", term),
        Filter.where("username", "==", term)
      )
    );
  }

  const snapshot = await query.get();

  if (snapshot.empty) {
    return users;
  }

  users.push(...parseUsersSnapshot(snapshot));

  return users;
}
