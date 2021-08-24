import Image from 'next/image'

import TakeCareHealth from '../../components/takeCareHealth'
import Nav from '../../components/nav'
import Services from '../../components/services'
import Video from '../../components/video'
import FooterMain from '../../components/footerMain'
import Recognition from '../../components/recognition'
import Contact from '../../components/contact'
import Form from '../form'
import { Button } from '../../components/button'

export default function Main() {
  return <>
    <section className='container'>
      <div className='image'>
        <Image
          width={700}
          height={450}
          objectFit='contain'
          layout='responsive'
          src='https://res.cloudinary.com/djc1umong/image/upload/v1608832130/fotoself_eutmdi.jpg'
          alt="Fotografia de Andres Torrico haciendo curl de biceps"
        />
      </div>
      <TakeCareHealth />

      <Nav />

      <Services />


      <Recognition />

      <Form />

      <Contact />

      <FooterMain />
    </section>
    <style jsx>{`
  
    .container {
      position: relative;
      top: 40px;
      color: #fff;
      left: 0;
      background-color: var(--andres-color);
      right: 0;
      height: 100vh;
      width: 100%;
    }
    .image {
      max-width: 700px; 
      margin-left: 200px;
      background-color: var(--andres-color);
    }

  p {
    font-size: .8rem;
    line-height: 1.5;
    max-with: 65ch;
    padding: .7rem;
    }
  p {
      font-size: 14px;
      line-height: 150%;
    }

  .carts-container {
    background: var(--alabaster);
    width: 100%;
    padding-top: 5em;
    padding-bottom: 5em;
    margin-top: 2em;
  }
  .carts {
    width: 300px;
    margin: 0 auto;
  }
  .cart {
    display: flex;
    border: 2px solid var(--andres-color);
    padding: 1.2em;
    border-radius: 5px;
    justify-content: center;
    align-items:center;
    color: var(--andres-color);
    width: inherit;
    text-align:center;
    margin: 2em 0;
    flex-direction: column;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .image {
      display: block;
      margin-left: 0px;
    }
 }
 
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    .image {
      display: block;
      margin-left: 0px;
     }
    }
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
    .image {
        margin-left: 0;
      }
    }

    @media only screen and (min-width: 1025px) and (max-width: 1200px) {
      .image {
        margin-left: 100px;
      }
    }
`}</style>
  </>

}