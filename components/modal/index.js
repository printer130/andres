import { useState, useEffect } from 'react'
import { createNewCustomerFirebase } from '../../firebase/client'
import { useInputValues } from '../../hooks/useInputValues'
import ReactDOM from 'react-dom'
import { Button } from '../button'


function Modal({ children, onClose, user }) {
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const { username, weight, age, heigth, evaluation, fat, muscle, onChange, renew } = useInputValues({
    username: '',
    weight: '',
    age: '',
    heigth: '',
    evaluation: '',
    fat: '',
    muscle: '',
    renew: ''
  })


  useEffect(() => {
    if (fat &&
      username &&
      weight &&
      heigth &&
      evaluation &&
      renew &&
      muscle) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [fat, username, weight, heigth, evaluation, muscle, renew])

  const handleSubmitCreateNewCustomer = () => {
    setDisabled(true)
    setLoading(true)
    createNewCustomerFirebase({ username, fat, weight, heigth, evaluation, muscle, age, renew })
      .then(() => {
        setLoading(false)
        onClose()
      })
  }

  return <section>
    {
      loading === true && <div>Loading...</div>
    }
    <div >
      <main>
        <Button width={300} styles onClick={onClose}>X</Button>
        <h1>{children}</h1>
        <label >Nombre: </label>
        <input
          type='text'
          pattern="\d+"
          autoFocus
          itemType='number'
          name='username'
          onChange={onChange}
          value={username}
        />

        <label>Edad: <span>Años</span></label>
        <input type="text" name='age' onChange={onChange} value={age} />

        <label>Peso: <span>Kg</span></label>
        <input type="text" name='weight' onChange={onChange} value={weight} />

        <label>Estatura: <span>cm</span></label>
        <input type="text" name='heigth' onChange={onChange} value={heigth} />

        <label>Grasa Corporal: <span>%</span> </label>
        <input type="text" name='fat' onChange={onChange} value={fat} />

        <label>Indice de masa muscular: <span>IMC</span></label>
        <input type="text" name='muscle' onChange={onChange} value={muscle} />

        <label >Control y/o evaluacion: </label>
        <input type="date" id="date" name="evaluation"
          value={evaluation}
          onChange={onChange}
          min="2015-01-01" max="2099-12-31" />

        <label>Renovacion: </label>
        <input type="date" id="dateRenew" name="renew"
          onChange={onChange}
          value={renew}
          onChange={onChange}
          min="2015-01-01" max="2099-12-31" />

        <Button width={300} disabled={disabled} onClick={handleSubmitCreateNewCustomer}>Nuevo</Button>
      </main>

    </div>
    <style jsx>{`
  section {
    position: fixed;
    top: 1.7em;
    left: 0;
    right: 0;
    overflow-y: scroll;
    padding-bottom: 3em;
    height: 120%;
    bottom: 0;
    scroll-behavior: smooth;
  }
  main {
    height: inherit;
    width: 100%;
  }
  #date, #dateRenew {
    width: inherit;
  }
  label {
    letter-spacing: 1px;
    margin: 3px;
    display: flex;
    justify-content: space-between;
  }

  input {
    border: 1px solid rgba(0, 0, 0, .3);
    padding: 5px;
    border-radius: 6px;
    color: #111;
    letter-spacing: 1px;
  }
  div {
    background: #cfcfcfff;
    width: 100%;
    padding: 2em 1.2em;
    height: 90vh;
    overflow-y: auto;
    margin: 5vh 0;
    position: relative;
    top: 0;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    left: 0;
    right: 0;
    border-radius: .7em;
    padding-bottom: 2.4em;
    box-shadow: 0px 0px 25px 2px rgba(0,0,0, .7);
  }
  main {
    display: flex;
    flex-direction: column;
    color: #222;
    line-height: 1.2;
    width: 100%;
  }
  span {
    fonst-size: 14px;
    color: gray;
    font-weight: 500;
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