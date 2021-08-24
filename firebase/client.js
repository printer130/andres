import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/messaging'

const firebaseConfig = {
  apiKey: "AIzaSyD5VNetBeymgJr-FxCXUUvH-6m9_4aPung",
  authDomain: "blog-post-69ff7.firebaseapp.com",
  projectId: "blog-post-69ff7",
  storageBucket: "blog-post-69ff7.appspot.com",
  messagingSenderId: "1054956600426",
  appId: "1:1054956600426:web:933f55a12892e5329ade13",
  measurementId: "G-3WRD6JGE8N"
}

const VAP_ID_KEY = 'AAAA9aBQPGo:APA91bF2YQ8y4xEinqezfeuWiwt5nvBz_Ua94-keFkRV3jugo2eEEJbOg0RQsO-JA6_y6ueAJIOEwlOKxPILdC6Z9OB1T97znKAq5aKrOJ_mvk8HjKGe9Tlyib8zxgl3yjAbn920ji9I'

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const auth = app.auth()
const db = app.firestore()

export const getTokenMessaging = () => {
  if (typeof window !== 'undefined' && window.document) {
    const msg = app.messaging()
    msg.getToken({ vapidKey: VAP_ID_KEY }).then((token) => console.log(token))
  }
}

export const loginWithEmailAndPassword = ({ email, password }) => {
  return auth.signInWithEmailAndPassword(email, password)
}
export const firebaseResetPassword = ({ email }) => {
  return auth.sendPasswordResetEmail(email)
}

export const fireUserCurrent = () => {
  return auth.currentUser
}

export const signOutWithPasswordAndEmail = () => {
  return auth.signOut()
}

export const registerUserWithEmailAndPassword = ({ username, email, password }) => {
  return auth.createUserWithEmailAndPassword(email, password)
}

export const onAuthStateChanged = (onChange) => {
  return auth.onAuthStateChanged(user => {
    const normalizedUser = user ? mapUserFromfirebaseAuthToUser(user)
      : null
    onChange(normalizedUser)
  })
}


const mapUsersToDataObject = (doc) => {
  const d = doc.data()
  const id = doc.id
  const { createdAt } = d

  return {
    ...d,
    id,
    createdAt: +createdAt.toDate()
  }
}

const mapUserFromfirebaseAuthToUser = ({ displayName, email, photoURL, uid }) => {
  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid
  }
}


export const updateUser = async ({
  username,
  weight,
  age,
  heigth,
  evaluation,
  id,
  fat,
  docs,
  muscle,
  createdAt,
  renew
}) => {
  const user = {
    username,
    weight,
    age,
    heigth,
    evaluation,
    uid: id,
    fat,
    docs,
    muscle,
    createdAt: app.firestore.Timestamp.now(),
    renew
  }
  await db.collection('customers').doc(user.uid)
  await userRef.update(user)
}

export const createNewCustomerFirebase = (newCustomer) => {
  const { username, fat, weight, heigth, evaluation, muscle, age, renew } = newCustomer


  return db.collection('customers').add({
    username,
    fat,
    weight,
    heigth,
    evaluation,
    muscle,
    age,
    renew,
    createdAt: firebase.firestore.Timestamp.now()
  })
    .then(refDoc =>
      console.log("ref doc", refDoc))
    .catch(e =>
      console.log(e)
    )
}


export const getAll = async () => {
  const docs = await db.collection('customers')
    .get()
    .then(snapShot => {
      return snapShot.docs.map(mapUsersToDataObject)
    })
  return docs
}

export const get = ({ id }) => {
  return db.collection('customers')
    .doc(id)
    .get()
    .then(mapUsersToDataObject)
    .catch(e => console.log(e))
}

export const deleteUser = (id) => {
  return db.collection('customers').doc(id).delete()
}

export const uploadPhotoProfile = (file) => {
  const ref = firebase.storage().ref(`images/${file.name}`)
  const task = ref.put(file)
  return task
}

export const uploadFilesWithId = (file, id) => {
  const ref = firebase.storage().ref(`images/${id}/${file.name}`)
  const task = ref.put(file)
  return task
}

export const getUploadedFiles = async (id) => {
  let array = []
  const ref = firebase.storage().ref(`images/${id}`)
  const dos = await ref.listAll()
    .then(res => {
      res.items.forEach(async itemRef => {
        const url = await itemRef.getDownloadURL()
        const xhr = new XMLHttpRequest()
        xhr.responseType = 'blob'
        xhr.onload = function (event) {
          const blob = xhr.response
        }
        xhr.open('GET', url)
        xhr.send()
        array.push(url)
        return url
      })
    })
    .catch(e => console.log(e))
  return array
}

export default app

