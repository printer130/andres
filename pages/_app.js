import '../styles/globals.css'
import Layout from '../container/layout'
import Context from '../context/userContext'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <div id='root-modal'></div>
    <Context.Provider>
      <Component {...pageProps} />
    </Context.Provider>
  </Layout>
}

export default MyApp
