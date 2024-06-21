import admin from "firebase-admin";
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // eslint-disable-next-line
// import serviceAccount from "./smarsheets_firebase.json" assert {type: 'json'} // eslint-disable-line

const serviceAccount = JSON.parse(fs.readFileSync(new URL('./smarsheets_firebase.json', import.meta.url)))

export default admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

