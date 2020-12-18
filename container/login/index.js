import { useState } from 'react'
import styles from './login.module.css'
// import { loginWithEmail, loginWithGoogle, loginWithRedirect } from '../firebase/client'
import firebase from 'firebase'
import { auth } from 'firebase/auth'

export default function Login({ user }) {

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleNewUser = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }


  const handleRegisterGoogle = e => {
    e.preventDefault()
    // if (navigator.userAgent.match(/Android/i)
    //   || navigator.userAgent.match(/webOS/i)
    //   || navigator.userAgent.match(/iPhone/i)
    //   || navigator.userAgent.match(/iPad/i)
    //   || navigator.userAgent.match(/iPod/i)
    //   || navigator.userAgent.match(/BlackBerry/i)
    //   || navigator.userAgent.match(/Windows Phone/i)) {
    //   loginWithRedirect()
    // } else {
    //   loginWithGoogle()
    // }

    // loginWithRedirect()
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithRedirect(provider)

    firebase.auth().getRedirectResult(result => {
      console.log("[RESULT]", result)
    }).catch(e => console.log(e))
  }

  const handleRegister = (e) => {
    e.preventDefault()
    createNewUser(newUser)
  }

  console.log("Ñ[[[]][][", user)
  return <section>
    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
    {
      user === undefined ? <div>Loading...</div>
        : <>
          <div>
            <label>Name</label>
            <input type="text" name='name' onChange={handleNewUser} value={newUser.name} />
          </div>
          <div>
            <label>Email</label>
            <input type="text" name='email' onChange={handleNewUser} value={newUser.email} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name='password' onChange={handleNewUser} value={newUser.password} />
          </div>

          <button onClick={handleRegister} >Register</button>
        </>
    }
    {
      user === null && <div>
        <button onClick={handleRegisterGoogle}>Login with Google</button>
      </div>
    }
  </section>
}