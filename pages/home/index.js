import { useEffect } from 'react'
import Head from 'next/head'
import { useUser } from '../../hooks/useUser'
import Link from 'next/link'
import { useContext, useState } from 'react'
import Modal from '../../components/modal'
import CounterContext from '../../context/userContext'
import { useRouter } from 'next/router'
import { HomeHeader } from '../../components/homeHeader'
import { verifyIdToken } from '../../firebase/client'

export default function HomePage() {
  const user = useUser()
  const router = useRouter()

  const [showModal, setShowModal] = useState(false)

  const handleCreateNewUserModal = e => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleCloseModal = e => {

    setShowModal(!showModal)
  }

  const handleVerifyIdToken = () => {
    verifyIdToken()
  }
  console.log('[HOME],', user)

  // useEffect(() => {
  //   user === null && router.replace('/')
  // }, [user])
  console.log("[USER]", user)

  return <>
    <Head>
      <title>Home - {user !== undefined ? user?.username : 'Buscador'}  </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {
      user !== undefined && <HomeHeader user={user} />
    }
    <section>
      <CounterContext.Consumer>
        {
          ({ user, auth }) => <>
            {
              auth ? <>
                <h1>{user.username}</h1>
                <Link href='/home'>
                  <a className='button-customers' onClick={handleCreateNewUserModal}>Crear nuevo  usuario</a>
                </Link>
                <Link href={`/status/${user.uid}`} >
                  <a className='button-customers' >Ver usuarios</a>
                </Link>
              </> : <h1>No estas logueado CTM</h1>
            }
          </>
        }
      </CounterContext.Consumer>
      {
        showModal && <Modal onClose={handleCloseModal}>
          Crear-Nuevo-Sujeto
          </Modal>
      }
      <button type='submit' onClick={handleVerifyIdToken}>X</button>
    </section>

    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
        justify-content:center;
        width: 100%;

      }
      
      .button-customers {
        display: flex;
        justify-content: center;
      }
    `}</style>
  </ >

}