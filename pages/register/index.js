import { useState, useEffect } from 'react'
import { registerUserWithEmailAndPassword } from '../../firebase/client'
import { useRouter } from 'next/router'
import { useAuth } from '../../context/userContext'
import { Button } from '../../components/button'
import Link from 'next/link'

export default function Register() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const router = useRouter()
  const [registerUser, setRegisterUser] = useState({
    username: '',
    password: '',
    email: ''
  })
  const { user } = useAuth()
  useEffect(() => {
    user && router.replace('/home')
  }, [user])

  const handleRegisterNewUser = e => {
    setRegisterUser({
      ...registerUser,
      [e.target.name]: e.target.value
    })
  }

  const handleCreateNewUserWithEmailAndPassword = (e) => {
    setLoading(true)
    setDisabled(true)
    registerUserWithEmailAndPassword({
      username: registerUser.username,
      email: registerUser.email,
      password: registerUser.password
    })
      .then(user => router.replace('/home'))
      .catch(e => setError(e.message),
        setTimeout(() => setDisabled(false), 1000))
    setLoading(false)
  }

  return <section>
    {
      loading && <main>Loading...</main>
    }
    {
      user === undefined && <div>Loading...</div>
    }
    {
      user === null && <>
        <h1>Crea tu cuenta de ATSports</h1>
        <div>
          <label>Nombre completo:</label>
          <input disabled={disabled} type="text" name='username' onChange={handleRegisterNewUser} value={registerUser.username} />
        </div>
        <div>
          <label>Correo Electronico:</label>
          <input disabled={disabled} type="text" name='email' onChange={handleRegisterNewUser} value={registerUser.email} />
        </div>
        <div>
          <label>Contraseña:
          <Link href='/reset'>
              <a>
                <p>¿Olvidaste la contraseña?</p>
              </a>
            </Link>
          </label>
          <input disabled={disabled} type="password" name='password' onChange={handleRegisterNewUser} value={registerUser.password} />
        </div>
        {
          error && <span id='error'>{error}</span>
        }
        <div>
          <Button disabled={disabled} width={300} height={44} onClick={handleCreateNewUserWithEmailAndPassword}>Continuar</Button>
        </div>
        <footer>
          <p>Tienes una cuenta: </p>
          <Link href="/login">
            <a>
              <span>Inicia sesión.</span>
            </a>
          </Link>
        </footer>
      </>
    }
    <style jsx>{`
      section {
        margin-top: 1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
      }
      input:focus {
        border-radius: 4px;
        box-shadow: 0 0 4px 4px rgba(0, 0, 0, .7);
        outline: none;
      }
      main {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        color: #000;
        display: flex;
        text-content:center;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        backdrop-filter: blur(5px);
      }
      h1 {
        width: 300px;
        font-weight: 500;
        font-size: 1.5em;
        letter-spacing: -.2px;
        color: rgba(0,0,0,.85);
        line-height: 32px;
      }
      input {
        margin: .3em 0 0 0;
        user-select: auto;
        border-radius: 4px;
        border: 1px solid #222222aa;
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
    footer {
      display: flex;
      width: 100%;
      height: 44px;
      justify-content: center;
      align-items: center;
    }
    footer span {
      margin-left: 1em;
      color: #b41;
      font-size: 14px;
      font-weight: 500;
    }
    `}</style>
  </section >
}
