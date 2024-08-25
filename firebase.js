const admin = require("firebase-admin");

// Load your service account key JSON file
const serviceAccount = require("./serviceAccountKey.json"); // Replace with the path to your service account key file

// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://calaniot-159d1-default-rtdb.firebaseio.com", // Replace with your actual database URL
});

// Get a reference to the database
const db = admin.firestore();

module.exports = { admin, db };
