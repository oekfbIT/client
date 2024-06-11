// FirebaseStorageManager.js
import { storage } from './firebaseConfig';

class FirebaseStorageManager {
    static async uploadImageFromURL(imageURL) {
        try {
            const response = await fetch(imageURL);
            const blob = await response.blob();
            const fileName = imageURL.split('/').pop();
            const storageRef = storage.ref();
            const fileRef = storageRef.child(fileName);
            await fileRef.put(blob);
            const fileUrl = await fileRef.getDownloadURL();
            return fileUrl;
        } catch (error) {
            console.error("Error uploading image: ", error);
            throw error;
        }
    }
}

export default FirebaseStorageManager;


// // script.js
// import FirebaseStorageManager from './FirebaseStorageManager';
//
// const uploadImage = async (imageURL) => {
//     try {
//         const uploadedURL = await FirebaseStorageManager.uploadImageFromURL(imageURL);
//         console.log('Uploaded Image URL:', uploadedURL);
//         // You can now use the uploadedURL as needed
//     } catch (error) {
//         console.error('Failed to upload image:', error);
//     }
// };
//
// // Example usage
// const imageURL = 'https://example.com/path/to/your/image.jpg';
// uploadImage(imageURL);