export default function Nav() {
  return <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <a className='navbar-container__a' href="#services"><span>Servicios</span></a>
        <a className='navbar-container__a' href="#contacts"><span>Contactanos</span></a>
      </div>
    </nav>
    <style jsx>{`
      
  .navbar {
    width: 100%;
    height: 55px;
    padding: 3.2em 1rem 6rem 0;
    color: var(--gold);
    background-color: var(--andres-color);
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    z-index: 21;
    margin: 2rem 0 .6rem 0;
  }
  .navbar-container {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 0 auto;
  }
  .navbar-container__a {
    padding: 5px;
    margin-right: 3.5rem;
  }
  .navbar-container__a:hover {
    color:var(--jazzberry-jam);
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .navbar {
      margin: 0;
      margin-bottom: 3rem;
    }
    .navbar-container__a{
      padding:0;
      margin:0;
    }
}
  
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    .navbar {
      margin: 0;
      margin-bottom: 3rem;
    }
    .navbar-container__a{
      padding:0;
      margin:0;
    }
}

  
    @media only screen and (min-width: 480px) {
    .navbar {
      width: 100%;
    }
   }
    `}</style>
  </>
}