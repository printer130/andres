import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOutWithPasswordAndEmail, fireUserCurrent } from '../../firebase/client'
import { useAuth } from '../../context/userContext'

export const HomeHeader = () => {
  const router = useRouter()
  const { user } = useAuth()
  const [portal, setPortal] = useState(true)
  const handleLogout = () => {
    signOutWithPasswordAndEmail()
      .catch((err) => {
        console.log(err)
      })
  }

  const handlePortal = () => {
    setPortal(!portal)
  }
  const hanldeChangePhoto = () => {
    console.log('object');
    
  }

  return <header>
    <section>
      <Link href='/'>
        <a>
          <img src='https://res.cloudinary.com/djc1umong/image/upload/v1607657746/logoAndres_w20jhn.png' alt="andres torrico" />
        </a>
      </Link>
    </section>
    {
      user === undefined && <div>Loading...</div>
    }
    {
      user === null && < div className="container" id='login'>
        <Link href='/login'>
          <a id='login'>Iniciar Session</a>
        </Link>
      </div>
    }
    {
      user && <div className="container">
        <main onClick={hanldeChangePhoto}>
          <img src={user.avatar} alt="club at sports" />
        </main>
        <Link href='/'>
          <a onClick={handleLogout}>Cerrar sesión</a>
        </Link>
      </div>
    }

    <style jsx>{`
  header {
    display: flex;
    z-index: 1;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    right: 0;
    border-bottom: 1px solid #222;
    width: 100%;
    height: 63px;
    background-color: #111;
    box-shadow: 0px 15px 14px -15px rgba(255,255,255,.3);
  }
 .container main img {
    border-radius: 50%;
  }
  h1 {
    font-size: 1.2em;  
  }
  #login {
    display: ${router.route === '/login' ? 'none' : 'block'};
    padding: .2em;
    color: #222;
    font-weight: 500;
    background-color: #ffd900;
    border-radius: .7em;
    line-height: 1.1;
    font-size: 1em;
  }
  span {
    align-self: center;
  }
  a:first-child {
    background: none;
  }
  section a {
    padding-top: 43px;
    width: 100%;
    height: inherit;
    border: none;
    padding: 0 .5em;
  }
  a {
    padding: .5em;
    color: #eee;
    border-radius: .7em;
    line-height: 1.1;
    font-size: 1em;
    }
  img {
    border-radius: 50%;
    width: 52px;
    height: 52px;
    padding: 3px;
    margin: 0 .3em;
    margin-top: .4em;
  }
  .container {
    display: flex;
    align-items: center;
    margin: 0 1em;
  }
  .container:hover {
    cursor: pointer;
  }
`}</style>
  </header >
}
