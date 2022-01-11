import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';

function Checkout() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => {
    removeFromCart(product);
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <>
      <Helmet>
        <title>Conf Merch - Lista de pedidos</title>
      </Helmet>
      <div className='Checkout'>
        <div className='Checkout-content'>
            {cart.length > 0 
              ? <h3>Lista de Pedidos</h3>
              : <h3>No hay productos en el carrito</h3>
            }
          {
            cart.map((item) => (
              <div className='Checkout-item' key={item.title}>
                <div className='Checkout-element'>
                  <h4>{item.title}</h4>
                  <span>${item.price}</span>
                </div>
                <button type="button" onClick={() => handleRemove(item)} >
                  <i className="fas fa-trash-alt" />
                </button>
              </div>
            ))
          }
        </div>
        {
          cart.length > 0 &&
            <div className='Checkout-sidebar'>
              <h3>{`Precion Total: $ ${handleSumTotal()}`}</h3>
              <Link to='/checkout/information'>
                <button type="button">Continuar Pedido</button>
              </Link>
            </div>
        }
      </div>
    </>
  )
}

export default Checkout
