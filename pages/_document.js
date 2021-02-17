import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name='application-name' content='PWA App' />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-status-bar-style' content='default' />
            <meta name='apple-mobile-web-app-title' content='PWA App' />
            <meta name='description' content='Best PWA App in the world' />
            <meta name='format-detection' content='telephone=no' />
            <meta name='mobile-web-app-capable' content='yes' />
            <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
            <meta name='msapplication-TileColor' content='#2B5797' />
            <meta name='msapplication-tap-highlight' content='no' />
            <meta name='theme-color' content='#000000' />

            <link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png' />
            <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5' />
            <link rel='shortcut icon' href='/static/icons/favicon.ico' />
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />

            <meta name='twitter:card' content='summary' />
            <meta name='twitter:url' content='https://yourdomain.com' />
            <meta name='twitter:title' content='PWA App' />
            <meta name='twitter:description' content='Best PWA App in the world' />
            {/* <meta name='twitter:image' content='https://yourdomain.com/static/icons/android-chrome-192x192.png' /> */}
            <meta name='twitter:creator' content='@DavidWShadow' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content='PWA App' />
            <meta property='og:description' content='Best PWA App in the world' />
            <meta property='og:site_name' content='PWA App' />
            <meta property='og:url' content='https://yourdomain.com' />
            {/* <meta property='og:image' content='https://yourdomain.com/static/icons/apple-touch-icon.png' /> */}
            <meta name="description" content="Description" />
            <meta name="keywords" content="Keywords" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" sizes="57x57" href="icons/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="icons/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="icons/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="icons/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="icons/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="icons/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="icons/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="icons/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="icons/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="icons/favicon-96x96.png" />
            <link
              href="icons/favicon-16x16.png"
              rel="icon"
              type="image/png"
              sizes="16x16"
            />
            <link
              href="icons/favicon-32x32.png"
              rel="icon"
              type="image/png"
              sizes="32x32"
            />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="icons/ms-icon-144x144.png" />
            <meta name="theme-color" content="#317EFB" />
            <link rel="icon" href="https://res.cloudinary.com/djc1umong/image/upload/v1607657746/logoAndres_w20jhn.png" type="image/png" />
          </Head>
        </Head >
        <body>
          <Main />
          <div id='portal'></div>
          <div id='root-modal'></div>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument