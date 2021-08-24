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
    position: fixed;
    display: flex;
    z-index: 999;
    justify-content: space-between;
    top: 0;
    left: 0;
    align-items: center;
    right: 0;
    border-bottom: 1px solid var(--jazzberry-jam);
    width: 100%;
    height: 64px;
    background: var(--eerie-black);
    z-index: 10000;
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
    color: var(--eerie-black);
    font-weight: 500;
    background-color: var(--gold);
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

  @media (min-width: 490px){
    header {
      padding: 0 2rem;
    }
  }
  @media(min-width: 668px) {
    header {
      padding: 0 7rem;
    }
  }
`}</style>
  </header >
}
