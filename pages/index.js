import { useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useUser } from '../hooks/useUser'
import { useRouter } from 'next/router'
// import Login from '../container/login'
import Link from 'next/link'


export default function Home() {

  // const { user, nombre } = useContext(UserContextProvider)
  const user = useUser()

  const router = useRouter()

  useEffect(() => {
    return user && router.replace('/home')
  }, [user])


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <nav>
        <label className='menu' id="toggle">
          <input className='menu-checkbox' htmlFor='toggle' type="checkbox" id="menu-checkbox" />
          {/* <span className='menu' id="toggle"> */}
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
          <div className='open-menu'>
            Este es el menu
          </div>
        </label>
        {/* </span> */}
        <span>Logo</span>
        <span>
          <Link href='/login'>
            <a>
              Login
            </a>
          </Link>
        </span>
      {/* <Login user={user} /> */}

      </nav>
      <style jsx>{`
      .open-menu {
         display: none;
         visibility: hidden;
         background: blue;
        }
        .menu {
          display: block;
          cursor: pointer;
          user-select: none;
          align-self: center;
        }
        .menu-checkbox:checked ~ .open-menu {
          display: block;
          position: absolute;
          visibility: visible;
          top: 45px;
          right: 20%;
          left: 0;
          height: 90vh;
          border: 5px solid red;
      }

      .menu-checkbox {
        // visibility: hidden;
        display: none;
      }
      .menu-checkbox:checked ~ .bar1 {
        background: black;
        transform: rotate(-45deg) translate(-4px, 5px) ;
        -webkit-transform: rotate(-45deg) translate(-4px, 5px) ;
        
      }
      
      .menu-checkbox:checked ~  .bar2 {
        background: black;
        transform: rotate(-45deg) translate(-4px, 5px) ;
        -webkit-transform: rotate(-8deg) translate(-50px, -80px) ;
        
      }
      
      .menu-checkbox:checked ~  .bar3 {
        background: black;
        transform: rotate(45deg) translate(-6px, -8px) ;
        -webkit-transform: rotate(45deg) translate(-6px, -8px) ;
      }

      .bar1, .bar2, .bar3 {
        margin: 3px 0;
        height: 5px;
        width: 28px;
        background: red;
        border-radius: 5px;
        transition: 0.4s;
        will-change: transform;
      }

        nav {
          display: flex;
          height: 48px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          margin: 3px 0px;
          padding: 0 .6em;
          justify-content: space-between;
          box-shadow: 0 5px 10px 2px rgba(0,0,0, .1);
        }
        span {
          align-self: center;
        }
      `}</style>
    </div >

  )
}
