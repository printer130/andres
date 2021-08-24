import Rope from '../icons/rope'
export default function Recognition() {
  return <>
    <section className='recognition'>
      <h3>Prof. Andres Torrico Becerra</h3>
      <div>
        <img src="/self.jpeg" alt="logo facilitador" />
        <p>Especialista en nutricion deportiva (I.C.N.S)
        Head Master Coach para Bolivia (N.A.F.C)
        Propietario y encargado de A.T. Sports
        Preparador Fisico
      Master Trainner</p>
      </div>
    </section>
    <style jsx>{`
  .recognition {
    color: var(--andres-color);
    margin: 4rem auto;
    text-align: center;
    width: 100%;
    background-color: #ececec;
    padding: 1rem 2rem;
  }
  h3 {
    padding-bottom: 2.5rem;  
  }
   p {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem auto;
    width: 55ch;
    line-height: 1.4;
    letter-spacing: 1px;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .recognition {
      padding: 0;
    }
    p {
      width: 90%;
    }
  }
  
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    p {
      width: 40ch;
    }
  }
`}</style>
  </>
}