import React, { useContext } from 'react';

import Map from '../components/Map';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css';
import useMapAddress from '../hooks/useMapAddress';


function Success() {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const address = useMapAddress(buyer[0]);


  return (
    <div className="Success">
      <div className="Success-content">
        <h3>{`${buyer[0].name}, Gracias por tu compra`}</h3>
        <span>Tu pedido llegara en 3 dias a tu direccion</span>
        <div className='leaflet-container'>
          <Map address={address}/>
        </div>
      </div>
    </div>
  );
}

export default Success;