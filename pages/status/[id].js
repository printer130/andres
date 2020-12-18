import react from 'react'
import Collection from '../../container/collection'

export default function GetDataId(collections) {
  const { collection } = collections

  return <>
    {
      collection === undefined && <h1>Loading...</h1>
    }
    {collection && <Collection
      collection={collection}
    />
    }
  </>
}

export async function getServerSideProps(context) {

  const { params, res } = context
  const { id } = params
  const getData = await fetch(`http://localhost:3000/api/data/${id}`)
  // const getData = await fetch(`http://localhost:3000/api/data/6wcsUOM163dqLVHVbP4y0jtdwJ72`)

  if (getData.ok) {
    const props = await getData.json()

    return {
      props: props
    }
  }
}