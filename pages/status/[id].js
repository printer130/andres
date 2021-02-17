import react from 'react'
import Collection from '../../container/collection'
import Head from 'next/head'

export default function GetDataId(collections) {
  const { collection } = collections

  return <>
    <Head>
      <title>-Users-</title>
    </Head>
    {
      collection === undefined && <h1>Loading...</h1>
    }
    {
      collection && <Collection
        collection={collection}
      />
    }
  </>
}

export async function getServerSideProps(context) {
  const { params, res } = context
  const { id } = params
  const getData = await fetch(`http://localhost:3000/api/data/${id}`)

  if (getData.ok) {
    const props = await getData.json()
    return {
      props
    }
  }
}