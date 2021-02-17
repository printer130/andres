import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
// import { msg } from '../firebase/client'
// import { getTokenMessaging } from '../firebase/client'

export default function Home() {
  const router = useRouter()
  // const tk = getTokenMessaging()
  // console.log("TOKEN", tk);
  // msg.getToken(token => console.log(token))
  // getTokenMessaging()
  return (
    <div className={styles.container} >
      <Head>
        <title>ATSports</title>
      </Head>
      <section>
        <div className='image'>
          <Image
            width={500}
            objectFit='contain'
            height={335}
            className='image'
            src='https://res.cloudinary.com/djc1umong/image/upload/v1608832130/fotoself_eutmdi.jpg'
            alt="andres torrico"
          />
        </div>
        <div>
          <h1> Cuida la salud,<br /> lo estético <br />llegara</h1>
        </div>
        <main>
          <h3>Consejos</h3>
          <ul>
            <li>
              El calentamiento de los músculos es como un engrase del motor. Hara que tu cuerpo flexible funcione mejor con una adecuada rutina de calentamiento
            </li>
            <li>
              Ponte derecho en el ejercicio. Hacerlos encorvado creará más espacio para las lesiones de espalda y cuello.
            </li>
            <li>
              Utiliza todos sus músculos cuando haga ejercicios y en la gama completa. Esto te dará los resultados óptimos.
            </li>
            <li>
              Mantén el control del peso de las pesas y la velocidad de los equipos de cardio.
            </li>
            <li>
              Mantener una rutina a un ritmo más lento y controlado te dara más control del ejercicio y más resistencia.
            </li>
          </ul>
        </main>
        <footer>
          <div>
            <p>cocacola</p>
            <p>Crossfit</p>
          </div>
          <div>
            El grinch promociona esto 🌈
          </div>
        </footer>
      </section>
      <style jsx>{`
    .image {
      padding-bottom: -2em;
      background-color: black;
      box-shadow: 0 0 50px 50px black
    }
    section {
      position: relative;
      top: 40px;
      color: #fff;
      left: 0;
      background: #222;
      right: 0;
      height: 100vh;
    }
    h1 {
      text-align: center;
      font-size: 1.8em;
      letter-spacing: 2px;
      line-height: 1.4;
      font-weight: 800;
      color: #ffd900;
      
    }
    main {
      background: #222;
      margin-top: 3em;
    }
    h3{
      margin:0 auto;
      font-size: 1.6em;
      text-decoration: underline;
      padding-bottom: 1em;
      text-align: center;
    }
    ul {
      width: 270px;
      margin: 0 auto;
    }
    footer {
      background: #222;
      display: flex;
      height: 350px;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
      `}</style>
    </div >
  )
}
