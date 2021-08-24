import Head from 'next/head'
import { useEffect } from 'react'
import Layout from '../container/layout'
import { UserContextProvider } from '../context/userContext'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  // const messaging = null
  // if (typeof window !== undefined && window) {
  //   messaging = firebase.messaging()
  // }

  // useEffect(() => {
  //   if (typeof window !== undefined && window) {
  //     if ('serviceWorker' in navigator) {
  //       window.addEventListener('load', () => {

  //         //Register SW
  //         navigator.serviceWorker.register('./firebase-messaging-sw.js')
  //           // .then(initialState)
  //           .then(register => {
  //             //Use getToken(options?: {vapidKey?: string; serviceWorkerRegistration?: ServiceWorkerRegistration;}: Promise;.
  //             const options = {
  //               vapidKey: 'AAAA9aBQPGo:APA91bF2YQ8y4xEinqezfeuWiwt5nvBz_Ua94-keFkRV3jugo2eEEJbOg0RQsO-JA6_y6ueAJIOEwlOKxPILdC6Z9OB1T97znKAq5aKrOJ_mvk8HjKGe9Tlyib8zxgl3yjAbn920ji9I',
  //               serviceWorkerRegistration: register
  //             }
  //             firebase.messaging().getToken(options)
  //               .then(token => {
  //                 if (!token) {
  //                   return;
  //                 }
  //                 console.log(token)
  //               })

  //             //Get permissions from browser
  //             initialState()
  //             messaging.onMessage(payload => {
  //               console.log('Message in foreground')
  //               console.log(payload)
  //             })
  //             // const db = firebase.firestore()
  //             // db.collection('tokens')
  //             //   .doc(/* token */)
  //             //   .set({
  //             //     token
  //             //   })
  //             //   .catch(err => console.log("Inserted token was wrong", err))
  //           })
  //           .catch(err => console.log('Service workers arent supported in this browser.', err))
  //       })
  //     }
  //   }
  // }, [])

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
