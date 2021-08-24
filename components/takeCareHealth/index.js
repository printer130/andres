
export default function TakeCareHealth() {
  return <>
    <div className='takecarehealth'>
      <h1 className='title'> Cuida tu salud, lo estético llegara</h1>
      <div>
        <p>Somos un club deportivo de alto rendimiento donde entrenas, respetas y trabajas a conciencia en pro de tus metas individuales con el correcto y profesional asesoramiento.</p>
      </div>
      <hr />
    </div>
    <style jsx>{`
  
    .takecarehealth {
    position: absolute;
    text-align: center;
    font-size: 1.4rem;
    line-height: 1;
    font-weight: 800;
    padding: 1.2em 0;
    height: 455px;
    top:0;
    width: 355px;
    box-shadow: -20px -8px 17px 3px var(--andres-color);
    right: 270px;
    background-color: var(--andres-color);
  }
  .takecarehealth p {
    color: var(--alabaster);
    line-height: 1.5;
    font-size: 14px;
    padding: 1.5rem;
    font-weight: 400;
  }
  .title {
    color: var(--gold);
    margin: 2.5rem;
  }
  
  hr {
    width: 300px;
    color: red;
    height: 2px;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    
    .title {
      margin: 0 auto;
    }
    .takecarehealth {
      position: static;
      width: 100%;
      height: 325px;
    }
 }
 
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    .takecarehealth {
      width: 100%;
      position: sticky;
    }
    .takecarehealth p {
      width: 455px;
      margin: 0 auto;
      font-size: 1.1rem;
      padding-top: 3rem;
      letter-spacing: .6px;
    }
}
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .takecarehealth {
    right: 0;
  }
  .takecarehealth p {
    max-width: 355px;
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1200px) {
      .takecarehealth {
        right: 100px;
      }
    }
`}</style>
  </>
}