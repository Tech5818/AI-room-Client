import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore/lite";

const RoomCollection = collection(db, "Room");

const addData = async (info) => {
    try {
        await addDoc(RoomCollection, info);
    }catch (e) {
        throw e;
    }
}

export { addData }