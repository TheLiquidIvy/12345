
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzvIIyWgCEUAVa9JQxNtk3R_VyJ6bgt9o",
  authDomain: "pixelpfirebase.firebaseapp.com",
  projectId: "pixelpfirebase",
  storageBucket: "pixelpfirebase.firebasestorage.app",
  messagingSenderId: "853848520433",
  appId: "1:853848520433:web:997c77560b73e693f51b50",
  measurementId: "G-W3J1GDZSC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export function generateImagePath(type: 'blog' | 'portfolio', fileName: string): string {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2, 8);
  return `${type}-images/${timestamp}_${randomString}_${fileName}`;
}

export async function uploadImage(file: File, path: string): Promise<string> {
  const storageRef = ref(storage, path);
  const snapshot = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);
  return downloadURL;
}
