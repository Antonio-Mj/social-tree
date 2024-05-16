import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

// Configuración del cliente Appwrite
export const appwriteConfig = {
    projectID: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId: import.meta.env.VITE_APPWRITE_PROYECT_STORAGE,
    userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
    savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
    url: import.meta.env.VITE_APPWRITE_PROJECT_URL
}

// Verifica que las variables de entorno estén definidas
if (!appwriteConfig.projectID || !appwriteConfig.url) {
    throw new Error("Las variables de entorno VITE_APPWRITE_PROJECT_ID y VITE_APPWRITE_PROJECT_URL deben estar definidas");
}

// Inicialización del cliente Appwrite
export const client = new Client();

client.setEndpoint(appwriteConfig.url) // primero el endpoint
      .setProject(appwriteConfig.projectID); // luego el proyecto

// Inicialización de los servicios de Appwrite
export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
