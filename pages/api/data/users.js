import { firestoreAdmin } from '../../../firebase/admin'

export default function (req, res) {
  console.log("[TOKEN]", token);

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
      res.send({ "collection": tempDoc })
    })
    .catch(e => {
      res.status(301).end()
    })
}