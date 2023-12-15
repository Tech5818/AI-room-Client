import { db } from "../../firebase";
import { collection, deleteDoc, getDocs, query, where } from "firebase/firestore/lite";

const deleteData = async(uid) => {
    try {
        const q = query(collection(db, "Room"), where("user.uid", "==", uid))

        const data = await getDocs(q);
        data.forEach(async (doc) => {
            await deleteDoc(doc.ref)
        })
    } catch(error) {
        throw error;
    }
}

export {deleteData}