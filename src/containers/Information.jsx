import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useRef } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/components/Information.css';
import AppContext from '../context/AppContext';


function Information() {
  const { state, addToBuyer } = useContext(AppContext)
  const { cart } = state;
  const navigate = useNavigate();
  const form = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(form.current)

    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      city: formData.get('city'),
      state: formData.get('state'),
      country: formData.get('country'),
      zipcode: formData.get('zipcode'),
      apto: formData.get('apto')
    }

    addToBuyer(buyer)
    navigate(`/checkout/payment`)
  }

  return (
    <>
      <Helmet>
        <title>Conf Merch - Información de compra</title>
      </Helmet>
      <div className='Information'>
        <div className='Information-content'>
          <div className='Information-head'>
            <h2>Informacion de contacto:</h2>
          </div>
          <div className='Information-form'>
            <form ref={form}>
              <input type="text" placeholder="Nombre Completo" name="name" />
              <input type="email" placeholder="Correo Electronico" name="email" />
              <input type="text" placeholder="Direccion" name="address" />
              <input type="text" placeholder="Apto" name="apto" />
              <input type="text" placeholder="Ciudad" name="city" />
              <input type="text" placeholder="Estado" name="state" />
              <input type="text" placeholder="Pais" name="country" />
              <input type="text" placeholder="Codigo Postal" name="zipcode" />
              <input type="text" placeholder="Telefono" name="phone" />
            </form>
          </div>
          <div className="Information-buttons">
            <div className='Information-back'>
              <Link to='/checkout'>
                Regresar
              </Link>
            </div>
            <div className='Information-next'>
              <button type="button" onClick={handleSubmit} >Pagar</button>
            </div>
          </div>
        </div>
        <div className='Information-sidebar'>
          <h3>Pedido</h3>

          {
            cart.map(item => (
              <div key={item.title} className='Information-item'>
                <div className='Information-element'>
                  <h4>{item.title}</h4>
                  <span>{item.price}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Information
