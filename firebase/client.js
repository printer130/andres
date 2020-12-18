import firebase from 'firebase'
import { auth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD5VNetBeymgJr-FxCXUUvH-6m9_4aPung",
  authDomain: "blog-post-69ff7.firebaseapp.com",
  projectId: "blog-post-69ff7",
  storageBucket: "blog-post-69ff7.appspot.com",
  messagingSenderId: "1054956600426",
  appId: "1:1054956600426:web:933f55a12892e5329ade13",
  measurementId: "G-3WRD6JGE8N"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export const loginWithEmail = ({ email, password, nombre }) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
      result.user.updateProfile({
        displayName: nombre
      })

      const confic = {
        url: 'http://localhost:3000/'
      }

      result.user.sendEmailVerification(confic)
        .catch(e => console.log(e))
    })
    .catch(e => {
      console.log(e)
    })

  firebase.auth().signOut()
}

const mapUserFromfirebaseAuthToUser = ({ displayName, email, photoURL, uid }) => {
  // const { displayName, email, photoURL, uid } = user
  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid
  }
}

// export const mapUserFromfirebaseAuthToUser = u => u


export const createNewUser = (newUser) => {
  return firebase.auth().createUserWithEmailAndPassword('leo@', 'soyelpass')
    .catch(e => {
      console.log(e)
    })
}


export const loginWithGoogle = () => {
  const providerGoogle = new firebase.auth.GoogleAuthProvider()
  // console.log("%cproviderGoogle", "color:red", providerGoogle)
  return firebase.auth().signInWithPopup(providerGoogle)
    .then(result => {
      const token = result.credential.accessToken
      // console.log('%cTOKEN[TOKEN]', "color: blue", token)
      // console.log(result.user.uid)
      const uid = result.user.uid
    })
}

export const loginWithRedirect = () => {
  const providerGoogle = new firebase.auth.GoogleAuthProvider()
  // providerGoogle.addScope('email')
  // providerGoogle.addScope('profile')
  firebase.auth().signInWithRedirect(providerGoogle)

  return firebase.auth().getRedirectResult().then(res => {
    console.log("USER", res)
  })
}

export const getRedirectWithGoogle = () => {
  firebase.auth.Auth.getRedirectResult().then(resl => {
    console.log(resl.user)
  })
}

// export const loginWithGoogleRedirect = () => {
//   const provider = new firebase.auth().GoogleAuthProvider()
//   return firebase.auth().redi
// }

export const signoutWithGoogle = () => {
  return firebase.auth().signOut()
}



export const createNewCustomerFirebase = (newCustomer) => {

  const { username, weight, blood } = newCustomer

  return db.collection('customers').add({
    username,
    weight,
    blood,
    createdAt: firebase.firestore.Timestamp.now()
  })
    .then(refDoc =>
      console.log("ref doc", refDoc))
    .catch(e =>
      console.log(e)
    )
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged(user => {

    const normalizedUser = user ? mapUserFromfirebaseAuthToUser(user)
      : null

    onChange(normalizedUser)
  })
}



export const deleteUser = (id) => {
  return db.collection('customers').doc(id).delete()
}

export const updateUser = async (user) => {
  // console.log("CLIENT SIDE", user)
  const userRef = await db.collection('customers').doc(user.id)
  const res = await userRef.update(user)
  console.log(res)
}


export const verifyIdToken = async () => {
  firebase.auth().currentUser.getIdToken()
    .then(idToken => {
      //     //Send token to my backend via HTTPS
      //     console.log('[TOKEN]', idToken)
      console.log(idToken)
      // await fetch(url,options)
      // verificandoToken(idToken)
      //     // admin.auth().verifyIdToken(idToken)
      //     //   .then(decodedToken => {
      //     //     console.log(decodedToken)
    })

    .catch(error => console.error(error))
  // })
}
// export const updateUser = (user) => {
//   await db.collection('customers').doc(user.id).set(user)
// }