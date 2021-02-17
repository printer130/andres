import Head from 'next/head'
import { useEffect } from 'react'
import '../styles/globals.css'
import Layout from '../container/layout'
import { UserContextProvider } from '../context/userContext'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== undefined && window.document) {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('./firebase-messaging-sw.js')
            .then(initialState)
            .catch(err => console.log('Service workers arent supported in this browser.', err))
        })
      }
    }
  }, [])

  const initialState = () => {
    if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
      console.warn('Notifications aren\'t supported.');
      return;
    }
    if (Notification.permission == 'denied') {
      console.warn('The user has blocked notifications.')
      return
    }
    if (!('PushManager' in window)) {
      console.warn('Push Notification isnt supported in this browser.')
      return;
    }
    navigator.serviceWorker.ready.then(swr => {
      console.log("SWR", swr);
    })
      .catch(err => console.log("Error during getSubscription", err))
  }

  const subscribe = () => {
    navigator.serviceWorker.ready.then((swr) => {
      //send api
      console.log("swr", swr);
    })
      .catch(e => {
        if (Notification.permission === 'denied') {
          console.log('Permission for notification was denied')
        } else {
          console.error('Unable to subscribe to push.', e);
        }
      })
  }

  return <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
    </Head>
    <noscript>This app needs Js to rock</noscript>
    <UserContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  </>
}

export default MyApp
