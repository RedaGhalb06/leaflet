import React, { Component } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import Lakedata from './../data/Lake.json';
import Studyarea from './../data/StudyArea.json';
import Samples from './../data/Samples.json';
import 'leaflet/dist/leaflet.css';
import './MyMap.css';

class MyMap extends Component {
  render() {
    return (
      <div>
        
        <h1 style={{ textAlign: 'center' }}>Affichage des deux map</h1>

        
        <div className="map-container">
         
          <div className="map-section">
            <h1 style = {{ textAlign: 'center'}}>Lake</h1>
            <MapContainer style={{ height: "60vh" }} zoom={10} center={[32.07, -7.80]}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
              />
              <GeoJSON data={Lakedata} />
            </MapContainer>
          </div>

          
          <div className="map-section">
           <h1 style = {{ textAlign: 'center'}}> Study Area </h1>
            <MapContainer style={{ height: "60vh" }} zoom={10} center={[32.07, -7.80]}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
              />
              <GeoJSON data={Studyarea} />
            </MapContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default MyMap;
