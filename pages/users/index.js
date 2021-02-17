import react, { useContext, useState, useEffect } from 'react'
import Collection from '../../container/collection'
import Head from 'next/head'
import { useUser } from '../../hooks/useUser'
import { useAuth } from '../../context/userContext'
import { getAll } from '../../firebase/client'

export default function GetDataId(props) {
  const [collection, setCollection] = useState(null)
  const { user } = useAuth()

  useEffect(() => {
    user && getAll()
      .then(setCollection)
  }, [user])

  return <>
    <Head>
      <title>Users</title>
    </Head>
    {
      user === undefined && <p>Loading....</p>
    }
    {
      !collection && <p>Loading...</p>
    }
    {
      collection && <Collection
        collection={collection}
      />
    }

    <style jsx>{`
      p {
        margin-top: 4.6em;
        margin-left: 2em;
      }
    `}</style>
  </>
}

// export async function getServerSideProps() {
//   const getData = await fetch('http://localhost:3000/api/data/users')

//   if (getData.ok) {
//     const props = await getData.json()
//     return {
//       props
//     }

//   }
// }