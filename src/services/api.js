import { db } from "./firebase/firebaseConfig";

export async function createExpense(data) {
    return await db
        .collection('expenses')
        .doc()
        .set(data);
}