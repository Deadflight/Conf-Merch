import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Payment.css';
import AppContext from '../context/AppContext';

function Payments() {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const navigate = useNavigate();
  const { paypalOptions } = {
    clientId: process.env.PAYPAL_CLIENT_ID,
    intent: 'capture',
    currency: 'USD',
  }

  console.log(buyer)
  const handlePaymentSuccess = (data) => {
    if(data.status === 'COMPLETED'){
      const newOrder = {
        buyer,
        products: cart,
        payment: data
      }

      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {
          cart.map((item) => (
            <div className="Payment-item" key={item.title}>
              <div className='Payment-element'>
                <h4>{item.title}</h4>
                <span>
                  ${item.price}
                </span>
              </div>
            </div>
          ))
        }
        <div className="Payment-button">
          <PayPalButton
              amount={handleSumTotal()}
              // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
              onSuccess={(details) =>  handlePaymentSuccess(details)}
              options={paypalOptions}
              onError={(err) => console.log(err)}
              onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
}

export default Payments;