import { db } from "../utility/firebaseConfig";
import { collection, addDoc, getDoc, getDocs, doc, updateDoc, deleteDoc, getFirestore } from "firebase/firestore";


const productionCollection = collection(db, 'products');

export const productService={
    async createProduct(productData){
        const docRef =await addDoc(productionCollection, productData);
        return{id:docRef.id,...productData};
    },

    async getAllProducts(){
        const snapshot = await getDocs(productionCollection)
        return snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}))
    },

    async getProductsById(id){
        const docRef = doc(db,'products',id)
        const snapshot = await getDoc(docRef)
        return{ id:snapshot.id, ...snapshot.data()}
    },

    async updateProduct(id,productData){
        const docRef = doc(db,'products',id)
        await updateDoc(docRef, productData)
        return{ id, ...productData}
    },

    async deleteProduct(id){
        const docRef = doc(db, 'products', id)
        await deleteDoc(docRef)
    }
}
