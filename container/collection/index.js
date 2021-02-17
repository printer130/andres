import { useState, useRef, useMemo, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { route } from 'next/dist/next-server/server/router'
import ModalDetails from '../../components/modal'
import User from '../../components/user'

export default function Collection({ collection }) {
  const ref = useRef()
  const [searchUser, setSearchUser] = useState('')

  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  const handleSearch = useCallback(() => {
    setSearchUser(ref.current.value)
  }, [])

  const filteredUsers = useMemo(() => {
    return collection.filter(user => {
      return user.username.toLowerCase().includes(searchUser.toLowerCase())
    })
  }, [collection, searchUser])


  return <div className='container'>
    <section className='search-container'>
      <span onClick={goBack}>ir atras</span>
      <input type="text" placeholder='Search users...' ref={ref} value={searchUser} onChange={handleSearch} />
    </section>
    <h2>Lista: </h2>
    <section className='container-list'>
      <ol>
        <li>
          <div className='attribute-container'>Nombre</div>
          <div className='attribute-container'>Control y/o evaluacion</div>
          <div className='attribute-container'>Renovacion</div>
        </li>
        {
          filteredUsers.map(user => {
            return <User
              key={user.id}
              user={user}
            />
          })
        }
        {
          !filteredUsers.length && <h3>No hay bicho </h3>
        }
      </ol>
    </section>
    <style jsx>{`
      .container {
        display:flex;
        padding: .7em;
        flex-direction: column;
        contain: content;
        min-width: 100%;
        margin-top: 4.7em;
        padding-bottom: 7em;
      }
      .container-list {
        display: flex;
        flex-direction: column;
      }
      ol {
        padding: 0;
        text-align: center;
      }
      li:hover {
        background: rgba(0,0,0, .3);
        cursor: pointer;
      }
      li {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: column;
        min-height: 2em;
      }
      .attribute-container {
        border: 1px solid #222;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
      }
      .search-container {
        display: flex;
        justify-content: space-between;
      }
      input {
        border: none;
        padding: .5em;
        letter-spacing: 1px;
        line-height: 1.2;
        border-radius: 5px;
        border: 1px solid #222;
      }
      ol>:first-child {
        color: red;
        user-select: none;
        pointer-events: none;
    }
    h3 {
      margin-top: 2em;
      color: #222;
      font-size: 1.5em;
      font-weigth: 500;
      letter-spacing: 1px;
      line-height: 1.6;
    }
    `}
    </style>
  </ div>
}
