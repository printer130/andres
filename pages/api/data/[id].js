import { firestoreAdmin } from '../../../firebase/admin'

export default (req, res) => {

  const { query } = req
  let tempDoc = []

  return firestoreAdmin
    .collection('customers')
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        tempDoc.push({
          id: doc.id,
          ...doc.data()
        })
      })
      return res.send({ "collection": tempDoc })
    })
    .catch(e => {
      res.status(301).end()
    })
}