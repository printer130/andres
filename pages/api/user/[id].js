// import { db } from '../../../firebase/client'
import { firestoreAdmin } from '../../../firebase/admin'
export default function (req, res) {
  const { query } = req
  const { id } = query

  return firestoreAdmin
    .collection('customers')
    .doc(id)
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.json({})
      }
      const u = doc.data()
      const uid = u.uid
      const { createdAt } = u

      const user = {
        ...u,
        uid,
        createdAt
      }
      res.send({ user })
    })
    .catch(e => console.log(e))
}