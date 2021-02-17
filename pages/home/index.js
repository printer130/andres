import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useContext, useState } from 'react'
import Modal from '../../components/modal'

import { useRouter } from 'next/router'

import { useAuth } from '../../context/userContext'

export default function HomePage() {
  const { user } = useAuth()
  const router = useRouter()

  const [showModal, setShowModal] = useState(false)

  const handleCreateNewUserModal = e => {
    setShowModal(true)
  }

  const handleCloseModal = e => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    user === null && router.replace('/')
  }, [user])

  return <>
    <Head>
      <title>Home - {user !== undefined ? user?.username : 'Buscador'}  </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section>
      {
        !user && <h1>Loading...</h1>
      }
      {
        user && <>
          <h1>Inicio</h1>
          <Link href='/home'>
            <a type='button' className='button-customers' onClick={handleCreateNewUserModal}>Nuevo</a>
          </Link>
        </>
      }
      {
        showModal && <Modal user={false} onClose={handleCloseModal}>
          New
          </Modal>
      }
    </section>

    <style jsx>{`
      section {
        display: flex;
        position: absolute;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        top: 4.7em;
        left: 0;
        right: 0;
        padding: 0 1em;
      }
      
      .button-customers {
        display: flex;
        justify-content: center;
      }
    `}</style>
  </ >
}

