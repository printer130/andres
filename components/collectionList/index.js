import { useState } from 'react'
import { useGetTime } from '../../hooks/useGetTime'
import { deleteUser, updateUser } from '../../firebase/client'
import Modal from '../modal'
export const CollectionList = (user) => {
  const [verifyDelete, setVerifyDelete] = useState(false)
  const { blood, username, id, weight, seconds } = user
  const { y, m, d, min, h } = useGetTime(seconds)

  const handleDeleteUser = () => {
    deleteUser(id)
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

  const handleUpdateUser = () => {

  }

  const handleModal = () => {
    setVerifyDelete(!verifyDelete)
  }

  return <><tr>
    <td>{y}-{m}-{d}</td>
    <td>{blood}</td>
    <td onClick={handleModal}>{username}</td>
    <td>{weight}</td>
    <td>{id}</td>
    <td>{h}:{min}</td>
    <td onClick={handleDeleteUser}>X</td>
  </tr>
    {
      verifyDelete && <Modal onClose={handleModal} user={user} />
    }
    <style jsx>
      {`
      // tr {
      //   border-radius: 50%;
      // }
      td {
        border: solid gray 1px;
    padding: 5px;
  }
 `}
    </style>
  </>
}