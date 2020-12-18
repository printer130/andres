import { useState, useEffect } from 'react'
import { createNewCustomerFirebase, updateUser } from '../../firebase/client'
import ReactDOM from 'react-dom'

function Modal({ children, onClose, user }) {

  const [disabled, setDisabled] = useState(true)

  const [createNewCustomer, setCreateNewCustomer] = useState(() => {
    if (!user.username) {
      return {
        username: '',
        weight: '',
        blood: ''
      }
    } else {
      return {
        username: user.username,
        weight: user.weight,
        blood: user.blood
      }
    }
  })

  const handleCreateNewCustomer = (e) => {
    // e.preventDefault()
    setCreateNewCustomer({
      ...createNewCustomer,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (createNewCustomer.blood && createNewCustomer.username && createNewCustomer.weight) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [createNewCustomer])

  const handleSubmitCreateNewCustomer = () => {
    setDisabled(true)
    createNewCustomerFirebase(createNewCustomer)
      .then(() => onClose())
  }
  const handleUpdateUser = () => {
    const d = new Date()
    const updatedUser = {
      id: user?.id,
      username: createNewCustomer?.username,
      blood: createNewCustomer?.blood,
      weight: createNewCustomer?.weight,
      lastUpdated: d
    }

    updateUser(updatedUser).then(() => onClose())
    
  }

  // const handleUserUpdate = () => {
  //   setVerifyDelete(!verifyDelete)

  //   const d = new Date()
  //   const usuario = {
  //     id: id,
  //     username: '----',
  //     blood: '-----',
  //     weight: '///////',
  //     lastUpdate: d
  //   }

  //   updateUser(usuario)
  // }

  console.log(createNewCustomer)
  return <section>
    <div >
      <button className="button-close" onClick={onClose}>X</button>
      <main>
        <h1>{children}</h1>
        <label >Nombre Completo: </label>
        <input autoFocus type="text" name='username' onChange={handleCreateNewCustomer} value={createNewCustomer.username} />

        <label>Peso: </label>
        <input type="text" name='weight' onChange={handleCreateNewCustomer} value={createNewCustomer.weight} />

        <label>Tipo de sangre</label>
        <input type="text" name='blood' onChange={handleCreateNewCustomer} value={createNewCustomer.blood} />

        {
          !user.username
            ? <button disabled={disabled} type='submit' onClick={handleSubmitCreateNewCustomer}>
              Crear
    </button>
            : <button disabled={disabled} type='submit' onClick={handleUpdateUser}>
              Actualizar bicho
            </button>
        }
      </main>

    </div>
    <style jsx>{`
  section {
    background-color: rgba(255, 255, 255, .3);
    position: fixed;
    backdrop-filter: blur(2px);
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }
  label {
    letter-spacing: 1px;
    margin: 3px;
  }

  input {
    border: none;
    padding: 5px;
    border-radius: 6px;
    color: #111;
    letter-spacing: 1px;
  }
  div {
    background: #222;
    width: 300px;
    padding: 10px 20px;
    height: 80vh;
    margin: 10vh auto;
    position: relative;
    border-radius: .7em;
    box-shadow: 0px 0px 25px 2px rgba(0,0,0, .7);
  }
  main {
    display: flex;
    flex-direction: column;
    color: white;
    line-height: 1.2;
  }
  button {
    display: block;
    border: none;
    padding: .7em;
    cursor: pointer;
    margin-bottom: 1.2em;
    margin-top: 1.1em;
  }
`}</style>
  </section >
}

export default function ModalPortal({ children, onClose, user }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose} user={user}>
      {children}
    </Modal>,
    document.getElementById('root-modal')
  )
}