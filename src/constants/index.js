import PocketBase from 'pocketbase';

//Cambira la URL del cliente por http://localhost:8090
export const client = new PocketBase('https://admin.campusinteligente.com');
//Cambira la URL de redirección por http://localhost:3000/redirect
export const redirectUrl = "https://campusinteligente.com/redirect";

