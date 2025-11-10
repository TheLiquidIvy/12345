
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCzvIIyWgCEUAVa9JQxNtk3R_VyJ6bgt9o",
  authDomain: "pixelpfirebase.firebaseapp.com",
  projectId: "pixelpfirebase",
  storageBucket: "pixelpfirebase.appspot.com",
  messagingSenderId: "853848520433",
  appId: "1:853848520433:web:997c77560b73e693f51b50"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);

export async function uploadImage(file: File, path: string): Promise<string> {
  const storageRef = ref(storage, path);
  const snapshot = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);
  return downloadURL;
}

export function generateImagePath(type: 'blog' | 'portfolio', fileName: string): string {
  const timestamp = Date.now();
  const sanitizedName = fileName.replace(/[^a-zA-Z0-9.-]/g, '_');
  return `${type}/${timestamp}_${sanitizedName}`;
}
