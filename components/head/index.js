import Head from 'next/head'

const ICON_WEBSITE = "https://res.cloudinary.com/djc1umong/image/upload/v1607657746/logoAndres_w20jhn.png"
 function HeadSeo({ title }) {
  return <Head>
    <title></title>
    <link rel="icon" href={ICON_WEBSITE} />
  </Head>
}