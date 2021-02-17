import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { get, updateUser, deleteUser } from '../../firebase/client'
import { Button } from '../../components/button'
import Head from 'next/head'

export default function Details({ user }) {
  const router = useRouter()
  const [getUserById, setGetUserById] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [deleted, setDeleted] = useState(false)

  if (router.isFallback) return 'Loading'
  useEffect(() => {
    get({ id: router.query.id })
      .then(setGetUserById)

  }, [])

  const onChange = e => {
    setGetUserById({
      ...getUserById,
      [e.target.name]: e.target.value
    })
  }
  const handleDelete = () => {
    setDisabled(true)
    deleteUser(router.query.id)
      .then(() => {
        setDisabled(false)
        router.replace('/users')
      })

  }

  const handleUpdate = e => {
    updateUser({
      username: getUserById.username,
      weight: getUserById.weight,
      age: getUserById.age,
      heigth: getUserById.heigth,
      evaluation: getUserById.evaluation,
      id: router.query.id,
      fat: getUserById.fat,
      muscle: getUserById.muscle,
      renew: getUserById.renew
    })
    router.push('/users')
  }
  if (getUserById === null) return 'loading'
  if (getUserById === undefined) {
    router.replace('/home')
  }
  
  return <section>
    <Head>
      <title>Club AtSports - {getUserById.username}</title>
    </Head>
    {
      deleted && <main>
        <p> Estas seguro de borrar este user?</p>
        <div>
          <Button disabled={disabled} onClick={() => setDeleted(false)} >No</Button>
          <Button disabled={disabled} bg='red' onClick={handleDelete}>Si</Button>
        </div>
      </main>
    }
    <h2>{getUserById.username}</h2>
    <span onClick={() => router.back()}> 👈 </span>
    <div className='container'>
      <div className='attribute-container'>Nombre: </div>
      <input name='username' onChange={onChange} className='attribute-container' value={getUserById.username} />
    </div>
    <div>
      <div className='attribute-container'>Edad: <span>Años</span></div>
      <input name='age' onChange={onChange} className='attribute-container' value={getUserById.age} />
    </div>
    <div>
      <div className='attribute-container'>Peso: <span>Kg</span></div>
      <input name='weight' onChange={onChange} className='attribute-container' value={getUserById.weight} />
    </div>
    <div>
      <div className='attribute-container'>Estatura: <span>cm</span></div>
      <input name='heigth' onChange={onChange} className='attribute-container' value={getUserById.heigth} />
    </div>

    <div>
      <div className='attribute-container'>Grasa corporal: <span>%</span> </div>
      <input name='fat' onChange={onChange} className='attribute-container' value={getUserById.fat} />
    </div>
    <div>
      <div className='attribute-container'>Indice de masa muscular: </div>
      <input name='muscle' onChange={onChange} className='attribute-container' value={getUserById.muscle} />
    </div>
    <div>
      <div className='attribute-container'>Control y/o evaluacion: </div>
      <input type="date" id="date" name="evaluation"
        value={getUserById.evaluation}
        className='attribute-container'
        onChange={onChange}
        min="2015-01-01" max="2099-12-31" />
    </div>
    <div>
      <div className='attribute-container'>Renovacion: </div>
      <input type="date" id="dateRenew" name="renew"
        onChange={onChange}
        className='attribute-container'
        value={getUserById.renew}
        onChange={onChange}
        min="2015-01-01" max="2099-12-31" />
    </div>
    <div>
      <Button disabled={disabled} onClick={handleUpdate} >Actualizar</Button>
    </div>
    <div>
      <Button disabled={disabled} bg='red' onClick={() => setDeleted(true)} >Delete</Button>
    </div>
    <style jsx>{`
      section {
        padding-top: 2.3em;
        margin-top: 63px;
        margin-bottom: 3em;
        display: grid;
        padding-top: 1.2em;
        height: 100vh;
        min-width: 300px;
        overflow-y: scroll;
        justify-content: center;
        align-content: center;
      }
      main {
        position: absolute;
        display: flex;
        justify-content:center;
        text-align:center;
        flex-direction: column;
        align-items: center;
        color: black;
        font-size: 2em;
        backdrop-filter: blur(5px);        
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      h2 {
        padding-top: 185px;
        margin: 0 auto;
      }
      .container {
        padding-top: 1.3em;
      }
      div {
        min-width: 300px;
      }
      .attribute-container {
        display: flex;
        
        justify-content: space-between;
      }
      .attribute-container span{
        font-size: 14px;
        margin-right: .5em;
        font-weigth: 500;
        color: rgba(0, 0, 0, .6);
      }
      input {
        margin: .2em 0em .4em 0em;
        border:1px solid #222;
        border-radius: 5px;
        width: 100%;
        font-size: 1em;
        letter-spacing: .3px;
        padding: 5px;
        font-weight: 500;
        letter-spacing: 1px;
      }
    `}
    </style>
  </section >
}