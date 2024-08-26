const admin = require("firebase-admin");

// Load your service account key JSON file
const serviceAccount = require("./serviceAccountKey.json"); // Replace with the path to your service account key file
// const serviceAccount = {
//   type: "service_account",
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID,
//   privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"), // Replace escaped newlines
//   clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//   clientId: process.env.CLIENT_ID,
//   authUri: "https://accounts.google.com/o/oauth2/auth",
//   tokenIri: "https://oauth2.googleapis.com/token",
//   authProviderX509CertUrl: "https://www.googleapis.com/oauth2/v1/certs",
//   clientX509CertUrl:
//     "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2e2rq%40calaniot-159d1.iam.gserviceaccount.com",
//   universeDomain: "googleapis.com",
// };

// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://calaniot-159d1-default-rtdb.firebaseio.com",
});

// Get a reference to the database
const db = admin.firestore();

module.exports = { admin, db };
