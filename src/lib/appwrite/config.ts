import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

// Configuración del cliente Appwrite
export const appwriteConfig = {
    url: import.meta.env.VITE_APPWRITE_PROJECT_URL,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId: import.meta.env.VITE_APPWRITE_PROYECT_STORAGE,
    userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
    savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID
}

// Verifica que las variables de entorno estén definidas
if (!appwriteConfig.projectId || !appwriteConfig.url) {
    throw new Error("Las variables de entorno deben estar definidas");
}



// Inicialización del cliente Appwrite
export const client = new Client();

client.setEndpoint(appwriteConfig.url) // primero el endpoint
client.setProject(appwriteConfig.projectId); // luego el proyecto


// Inicialización de los servicios de Appwrite
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
