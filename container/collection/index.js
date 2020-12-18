import { useState, useRef, useMemo, useCallback } from 'react'

import { CollectionList } from '../../components/collectionList'
import { useRouter } from 'next/router'
import { route } from 'next/dist/next-server/server/router'



export default function Collection({ collection }) {
  // const [filteredUser, setFilteredUser] = useState(collection)
  const ref = useRef()
  const [searchUser, setSearchUser] = useState('')

  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  const handleChangeSearch = useCallback(() => {
    setSearchUser(ref.current.value)
    console.log(searchUser)
  }, [])

  const filteredUsers = useMemo(() => {
    return collection.filter(user => {
      return user.username.toLowerCase().includes(searchUser.toLowerCase())
    })
  }, [collection, searchUser])


  // console.log(filteredUsers());

  return <>
    <span onClick={goBack}>ir atras</span>
    <input type="text" placeholder='Search users...' ref={ref} value={searchUser} onChange={handleChangeSearch} />
    <h1>Lista de Clientes registrados: </h1>
    <table>
      <thead>
        <tr>
          <th>CreatedAt</th>
          <th>Blood</th>
          <th>Username</th>
          <th>weight</th>
          <th>id</th>
          <th>min/sec</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          filteredUsers.map(col => {
            const { blood, createdAt, username, weight, id } = col
            const { _seconds, _nanoSeconds } = createdAt
            return <CollectionList
              blood={blood}
              seconds={_seconds}
              nanoSeconds={_nanoSeconds}
              username={username}
              weight={weight}
              id={id}
              key={id}
            />
          })
        }

        {
          filteredUsers.length === 0 && <h1>No hay nada sonso</h1>
        }

      </tbody>
    </table >
  </>
}