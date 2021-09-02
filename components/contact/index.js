import Link from 'next/link'
import { Facebook } from '../../components/icons/Fb'
import { Whatsapp } from '../../components/icons/Whatsapp'
import { Instagram } from '../../components/icons/Instagram'

export default function Contact() {
  return <>
    <section className='contact' id='contacts'>
      <h3>Contactame por nuestras redes Sociales</h3>
      <div className='contact-container'>
        <Link
            href='https://api.whatsapp.com/send/?phone=59170786026&text&app_absent=0'
            >
             
          <a target='_blank' rel="noreferer">
            <span><Whatsapp /></span>
          </a>
        </Link>
      </div>
    </section>
    <style jsx>{`
      
  .contact {
    background-color: var(--black);
  }
  .contact > h3 {
    padding-top:2em;
    color: var(--ruby);
  }
  .contact-container {
    max-width: 655px;
    margin: 0 auto;
    margin-top: 2rem;
    min-width: 278px;
    display: flex;
    height: 100px;
    justify-content: space-evenly;
    align-items: center;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    h3 {
      font-size: 2rem;
    }
  }
    `}</style>
  </>
}