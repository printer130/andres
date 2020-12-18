import { Children } from 'react';


export default function Layout({ children }) {

  return <div className='layout'>
    {children}
    <style jsx>{`

    .layout {
      display:flex;
      background: #e1e1e1;
      width: 100%;
      height: 100vh;
      padding: 2em;
      flex-direction: column;
    }
`}</style>
  </div>
}