import Avocado from '../../components/icons/avocado.js'

export default function Services() {
  return <>
    <Avocado className='image'/>
    <h3>Servicios</h3>
    <section className='bullshit-container' >
      <div className='bullshit'>
        <h4>Asesoramiento Nutricional</h4>
        <picture>
          <img height={230} className='bullshitImg' src="/dietaNutricional.jpg" alt="/miniatura.jpg" />
        </picture>
        <span>✔</span><p>En base a objetos
        específicos e individuales a cargo de un
        especialista en nutricion deportiva.</p>
      </div>
      <div className='bullshit'>
        <h4>Entrenamiento personalizado</h4>
        <picture>
          <img height={230} className='bullshitImg' src="/entrenamientoPersonalizado.jpg" alt="/miniatura.jpg" />
        </picture>
        <span>✔</span>
        <p>Guiado, orientado y cuidado a cargo de un entrenador profesional, en base a objetivos específicos e indivuduales.</p>
      </div>
    </section>
    <style jsx>{`
  .bullshit-container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
  .bullshitImg{
    width: 100%;
    margin-bottom: 1.2em;
    padding: 1rem;
  }
  h3 {
    padding-bottom: 2rem;
    color: #fff;
  }
  .bullshit {
    padding: 1em 2em;
    text-align: center;
    margin: 1rem auto;
    box-shadow: 0px 0px 15px 4px var(--andres-color),
                0px 0px 15px 4px var(--gold);
    border-radius: .7rem;
    padding: 1rem;
    background-color: var(--andres-color);
    color: var(--alabaster);
    max-width: 400px;
  }
  h4 {
    color: var(--ruby);
  }
  @media only screen and (min-width: 1025px) {
    .bullshit-container{
    padding: 3em 8rem;
    flex-direction: row;
  }
  }
  @media only screen and (max-width: 769px) {
    h3 {
      color: var(--jazzberry-jam);
      backdrop-filter: blur(2px);
      max-width: 300px;
      margin:0 auto;
  }
  }

    `}</style>
  </>
}