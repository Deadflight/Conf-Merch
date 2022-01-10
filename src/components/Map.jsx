import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function Map({ address }) {

  if(address.latitude === undefined){
    return <div>Loading...</div>
  }
    
    return (
    <MapContainer center={[address.latitude, address.longitude]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[address.latitude, address.longitude]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    )
  
}

export default Map
