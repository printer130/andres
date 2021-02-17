import { HomeHeader } from '../../components/homeHeader'
import { Footer } from '../../components/footer'
import Home from '../../pages';
import { useAuth } from '../../context/userContext'
// import { onRegisterToken } from '../../firebase-messaging-sw'

export default function Layout({ children }) {
  const { user } = useAuth()

  return <div className='layout'>
    <HomeHeader user={user} />
    {children}
    {
      user && <Footer />
    }
    <style jsx>{`
    .layout {
      display:flex;
      width: 100%;
      height: 100vh;
      padding: 0;
      flex-direction: column;
    }
`}</style>
  </div>
}