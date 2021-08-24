import { useState, useEffect } from 'react'
import styles from './login.module.css'
import { loginWithGoogle, loginWithEmailAndPassword } from '../../firebase/client'
import { useRouter } from 'next/router'
import { useAuth } from '../../context/userContext'
import { Button } from '../../components/button'
import Link from 'next/link'
import Head from 'next/head'

export default function Login() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    user && router.replace('/home')
  }, [user])

  const handleNewUser = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  const signIn = (e) => {
    e.preventDefault()
    setLoading(true)
    loginWithEmailAndPassword({ email: newUser.email, password: newUser.password })
      .then(user => router.replace('/home'))
      .catch(e => {
        console.log(e)
        setError(e.message)
        setLoading(false)
      })
  }

  return <section>
    <Head>
      <title>ATSpots - login</title>
    </Head>
    {
      user === undefined && <div>Loading...</div>
    }
    {
      user === null && <>
        <h1>Inicia sesión en tu cuenta de ATSports</h1>
        <div>
          <label>Correo Electronico:</label>
          <input
            disabled={loading}
            aria-autocomplete='email'
            type="text"
            name='email'
            onChange={handleNewUser}
            value={newUser.email}
            autoFocus={true}
          />
        </div>
        <div>
          <label htmlFor='password'>Contraseña:
          <Link href='/reset'>
              <a>
                <p>¿Olvidaste la contraseña?</p>
              </a>
            </Link>
          </label>
          <input
            disabled={loading}
            type="password"
            autoComplete='password'
            aria-autocomplete='password'
            name='password'
            onChange={handleNewUser}
            value={newUser.password}
          />
        </div>
        {
          error && <span id='error'>{error}</span>
        }
        <div>
          <Button disabled={loading} width={300} height={44} onClick={signIn}>Continuar</Button>
        </div>
        <div className='newAcc'>
          <p>¿No tienes una cuenta?</p>
          <Link href='/register'>
            <a>
              <span>Crea una cuenta</span>
            </a>
          </Link>
        </div>
      </>
    }
    <style jsx>{`
    section {
      margin-top: 1em;
      background: var(--alabaster);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
    }
    input:focus {
      border-radius: 4px;
      outline: none;
    }
    h1 {
      width: 300px;
      font-weight: 500;
      font-size: 1.5em;
      letter-spacing: -.2px;
      color: var(--jazzberry-jam);
      line-height: 32px;
    }
    input {
      margin: .3em 0 0 0;
      user-select: auto;
      border-radius: 4px;
      border: 1px solid var(--black);
      letter-spacing: 1px;
      font-size: 1em;
      width: 100%;
      min-width: 300px;
      min-height: 44px;
      white-space: nowrap;
      font-weight: 400;
      line-height: 28px;
      padding: 8px 16px;
    }
    #error {
      color: red;
      margin: 0 .5em 1em;
      text-align: center;
      margin-bottom: 0;
      margin-top: 1em;
    }
    .newAcc {
      display: flex;
      margin: 1.2em auto;
      flex-direction: row;
      width: 100%;
      justify-content: space-evenly;
      align-items: center;
    }
    .newAcc a span {
      font-size: 14px;
      font-weight: 600;
      color: #b41;
      line-height: 2;
      letter-spacing: .6px;
    }
    .newAcc a span:hover {
      cursor: pointer;

      text-decoration: underline;
    }
    label {
      width: 100%;
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 1px;
      display: flex;
      justify-content: space-between;
      line-height: 2;
      color: #222;
      margin-top: 1.4em;
    }
    label p {
      font-size: 14px;
      font-weight: 600;
      color: #b41;
      line-height: 2;
      letter-spacing: .6px;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    #customBtn {
    display: inline-block;
    background: white;
    color: #444;
    width: 190px;
    border-radius: 5px;
    border: thin solid #888;
    box-shadow: 1px 1px 1px grey;
    white-space: nowrap;
    }
    #customBtn:hover {
      cursor: pointer;
    }
    span.label {
      font-family: serif;
      font-weight: normal;
    }
    span.icon {
      background: url('/g-normal.png') transparent 5px 50% no-repeat;
      display: inline-block;
      background-size: cover;
      vertical-align: middle;
      width: 42px;
      height: 42px;
    }
    span.buttonText {
      display: inline-block;
      vertical-align: middle;
      padding-left: 42px;
      padding-right: 42px;
      font-size: 14px;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
    }
    `}</style>
  </section >
}

// export function getServerSideProps(context) {
//   let props = {}
  // firebase.auth().getRedirectResult().then(res => {
    // window.location.replace('.')
    // console.log("USER", res)
    // if (res) {
    //   const user = res.user
    //   const token = result.credential.accessToken;
    //   console.log("[GETREDICRECTRESULT]", user)
    //   props = {
    //     user,
    //     token
    //   }
    // }
  // })
  //   .catch(e => {
  //     console.log(e)
  //   })

  // return { props }
// }