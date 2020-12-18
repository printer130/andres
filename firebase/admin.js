
const admin = require("firebase-admin")
const serviceAccount = require('./admin.json')

!admin.apps.length && admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'blog-post-69ff7.firebaseapp.com'
})



export const firestoreAdmin = admin.firestore()
