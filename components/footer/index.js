import Link from 'next/link'
import Home2 from '../icons/Home2'
import Users from '../icons/Users'
import Settings from '../icons/Settings'
import { useRouter } from 'next/router'
let match

export const Footer = () => {
  const router = useRouter()
  if (router.asPath === '/home') match = router.asPath
  if (router.asPath === '/settings') match = router.asPath
  if (router.asPath === '/users') match = router.asPath
  if (router.asPath === '/') match = router.asPath
  return <div>
    <nav>
      <Link href='/home'>
        <a className='active'><Home2 width={32} height={32} stroke='#222' /></a>
      </Link>
      <Link href='/users'>
        <a><Users width={32} height={32} stroke="#222" /></a>
      </Link>
      <Link href='/settings'>
        <a><Settings width={32} height={32} stroke="#222" /></a>
      </Link>
    </nav>
    <style jsx>{`
      div {
        position: fixed;
        left:0;
        rigth: 0;
        z-index: 1;
        bottom: 0;
        width: 100%;
        height: 49px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid #eee;
        background-color: #222;
        color: #eee;
      }
      nav {
        display: flex;
        justify-content: space-between;
        text-align: center;
        width: 100%;
        padding: 0 1em;
      }
      nav a:nth-child(1) {
        border-bottom-style: ${match === '/home' ? 'double' : 'none'};
      }
      nav a:nth-child(2) {
        border-bottom-style: ${match === '/users' ? 'double' : 'none'};
      }
      nav a:nth-child(3) {
        border-bottom-style: ${match === '/settings' ? 'double' : 'none'};
      }
      a {
        color: #eee;
        width: 20%;
      }
    `}
    </style>
  </div>
}