import { useState } from 'react'
import { Button } from '../../components/button'
import { firebaseResetPassword } from '../../firebase/client'
import { useInputValues } from '../../hooks/useInputValues'
import Link from 'next/link'

export default function Reset() {
  const [disabled, setDisabled] = useState(false)
  const { onChange, username: email } = useInputValues({ email: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleResetPassword = e => {
    setDisabled(true)
    firebaseResetPassword({ email })
      .then(() => {
        setError('')
        setSuccess('Verifica tu correo electronico ✔')
        setInterval(() => {
          location.href = '/login'
        }, 1000)
      })
      .catch(e => {
        setSuccess('')
        setError(e.message)
        setTimeout(() => setDisabled(false), 1000)
      })
  }
  const handleBackToLogin = () => {
    history.back()
  }
  return <>
    <section>
      <div>
        <h1>Restablecer la contraseña</h1>
        <p>Introduce la dirección de correo electrónico
        asociada a tu cuenta y te enviaremos un vínculo
        para restablecer tu contraseña.
        </p>
      </div>
      <div>
        <label>Correo electrónico</label>
        <input name='username' value={email} onChange={onChange} disabled={disabled} type="text" />
      </div>
      {
        error && <span id='error'>{error}</span>
      }
      {
        success && <span id='success'>{success}</span>
      }
      <div>
        <main>
          <Button width={288} height={44} onClick={handleResetPassword} disabled={disabled}>Continuar</Button>
        </main>
      </div>
      <div onClick={handleBackToLogin}>
        <span>Volver a Inicio de sesión</span>
      </div>
      <div>
        <footer>
          <p>¿No tienes una cuenta?</p>
          <Link href="/register">
            <a>
              <span>Crea tu cuenta</span>
            </a>
          </Link>
        </footer>
      </div>
    </section>

    <style jsx>{`
      #error {
        color: red;
        font-size: 14px;
      }
      #success {
        color: rgb(0,255,0);
        font-size: 1em;
        line-height: 2;
        letter-spacing: .7px;
      }
      section {
        padding-top: 7em;
        margin: 0 auto;
        width: 80%;
        z-index: 1;
        
        height: 100vh; 
      }
      h1 {
        font-size: 23px;
        font-weight: bold;
        line-height: 32px;
        font-family: sohne-var,sohne-woff,Helvetica Neue,Arial,sans-serif;
        letter-spacing: -.2px;
        color: rgba(0,0,0,.8);
        margin-bottom: 1.5em;
        padding: .5em .1em 0 .1em;
        box-shadow: -310px 0px 30px 5px rgba(0,0,0, .2),
                    0 -22px 35px 1px rgba(0,0,0, .2),
                     310px 0px 30px 5px rgba(0,0,0, .2);
      }
      p{
        line-height: 20px;
        font-weight: 400;
        font-size: 14px;
        color: #3c4257;
        margin-bottom: 1.3em;
      }
      label {
        display: block;
        line-height: 20px;
        font-weight: 400;
        font-size: 14px;
        color: #3c4257;
        margin-bottom: .4em;
        box-shadow: -310px 0px 30px 5px rgba(0,0,0, .2),
                     310px 0px 30px 5px rgba(0,0,0, .2);
      }
      main {
        box-shadow: -310px 0px 30px 5px rgba(0,0,0, .2),
                     310px 0px 30px 5px rgba(0,0,0, .2);
      }
      input {
        margin: .3em 0 0 0;
        user-select: auto;
        border-radius: 4px;
        border: 1px solid #222222aa;
        letter-spacing: 1px;
        font-size: 1em;
        width: 100%;
        min-width: 288px;
        min-height: 44px;
        white-space: nowrap;
        font-weight: 400;
        line-height: 28px;
        box-shadow: -310px 0px 30px 5px rgba(0,0,0, .2),
                     310px 0px 30px 5px rgba(0,0,0, .2);
        padding: 8px 16px;
      }
      input:focus {
        border-radius: 4px;
        box-shadow: 0 0 4px 4px rgba(0, 0, 0, .7);
        outline: none;
      }
      div > span {
        color: #f41;
        display: flex;
        place-content: center;
        margin-bottom: 2em;
        padding-bottom: 1em;
        box-shadow: 0 30px 30px 5px rgba(0,0,0, .2),
                    -310px 0px 30px 5px rgba(0,0,0, .2),
                     310px 0px 30px 5px rgba(0,0,0, .2);
      }
      footer {
        color: #f41;
        display: flex;
        justify-content: space-evenly;
        padding-top: 1.5em;
      }
    `}</style>
  </>
}