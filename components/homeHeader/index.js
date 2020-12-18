import Link from 'next/link'
import { signoutWithGoogle } from '../../firebase/client'
import { useRouter } from 'next/router'

export const HomeHeader = ({ user }) => {
  const router = useRouter()

  const handleLogout = e => {
    e.preventDefault()
    signoutWithGoogle()
    router.replace('/')
  }

  return <header>
    <div className="container">
      < img src={user?.avatar} alt="logo-user" />
      <Link href='/'>
        <a onClick={handleLogout}>Cerrar Session</a>
      </Link>
    </div>
    <img src='https://res.cloudinary.com/djc1umong/image/upload/v1607657746/logoAndres_w20jhn.png' />
    <style jsx>{`
  img {
    border-radius: 50%;
    width: 69px;
    height: 69px;
    padding: 5px;
  }

  .container {
    display: flex;
    align-items: center;
    float: right;
    margin: 0 1em;
  }
  
  .container:hover {
    color: red;
    cursor: pointer;
  }
`}</style>
  </header>
}
