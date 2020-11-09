import React, { useState } from 'react';
import { Map, Polygon } from 'react-maps';
import './styles.css';

function App() {
  const [map, setMap] = useState();

  const triangleCoords = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 },
  ];

  const options = {
    center: { lat: -23.618237, lng: -46.635197 },
    zoom: 15,
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    zoomControl: false,
  };

  console.log(map);

  return (
    <div className="App">
      <Map
        apiKey="AIzaSyABlYdatj5ePUAHIwFct-yIJPcTfPBU_lI"
        libraries={['visualization']}
        style={{ height: '100vh', width: '100vw' }}
        options={options}
        onLoad={value => setMap(value)}
      >
        <Polygon paths={triangleCoords} map={map} />
      </Map>
    </div>
  );
}

export default App;
