import { useEffect, useState } from 'react'
import { Button } from '../../components/button'
import Stars from '../../components/stars'
import { useInputValues } from '../../hooks/useInputValues'

const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=59174361042&text= '

export default function Form() {
  const [disabled, setDisabled] = useState(true)
  const [stars, setStars] = useState(false)
  const [form, setForm] = useState({
    name: ''
  })

  useEffect(() => {
    form.name.split(' ').length >= 2 ? setDisabled(false) : setDisabled(true)

  }, [form.name])

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }


  const handleForm = e => {
    e.preventDefault()
    setDisabled(true)
    setStars(true)
  }
  return <>
    <section className='container__andres'>
      <section className='form'>
        <h3>¡Únete a Club Atsports!</h3>
        <form>
          <input
            placeholder='Nombre completo'
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
          />
          <div className='buttom-container'>
            <Button
              onClick={handleForm}
              disabled={disabled}
            >Empezar</Button>
          </div>
          <small>Nos pondremos en contacto contigo lo mas antes posible. Gracias por contactarnos! 🎉 </small>
        </form>
      </section>
      <section className='thanks'>
        <Stars />
      </section>
    </section>
    <style jsx>{`
  .container__andres {
    border: 1px solid var(--andres-color);
    margin: 0 auto;
    display: flex;
    min-height: 455px;
    align-items: center;
  }
  
  h3 {
  padding-bottom: 5rem;  
  }

  .form {        
    display: ${stars ? 'none' : 'flex'};
    width: 100%;
    justify-conter: center;
    flex-direction: column;
    place-content: center;
    padding: 0 2rem;
    text-align:center;
    height: 455px;
    background-color: var(--andres-color);
  }
   input {
    padding: .4rem .8rem;
    border-radius: 5px;
    outline: auto;
    font-size: 1.1rem;
    margin-bottom: .5rem;
  }
  .thanks {
    display: ${stars ? 'grid' : 'none'};
    width: 100%;
    height: 455px;
  }

  small {
    font-size: 12px;
    color: #fff;
  }
  
  @media only screen and (min-width: 320px) {
    .buttom-container {
      min-width: 100%;
    }
    form input {
      width: 100%;
    }
  }
  
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    form input {
      width: 100%;
    }
  }
  @media only screen and (min-width: 769px) {
    form input {
      width: 600px;
    }
  }
  @media only screen and (min-width: 992px) {
    .buttom-container {
    margin: 0 auto;
    width: 600px;
  }
    .form {
      min-width: 600px;
      margin: 0 auto;
    }
    .form input {
      max-width: 600px;
    }
}

    @media only screen and (min-width: 968px) {
      .container__andres {
        display: block;
      }
      .form input{
        min-width: 367px;
      }
    }

  
  `}</style>

  </>
}