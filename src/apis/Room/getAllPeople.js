import { db } from "../../firebase";
import { collection, query, getDocs } from "firebase/firestore/lite";

const RoomCollection = collection(db, "Room");

const getAllPeople = async (info) => {
    try {
        const q = query(RoomCollection);

        const data = await getDocs(q);
        const newData = data.docs.map(doc => ({...doc.data()}))
        
        return newData
    }catch (e) {
        throw e;
    }
}

export { getAllPeople }