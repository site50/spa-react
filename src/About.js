import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import './App.css';

const mapStyles = {
  width: "50%",
  height: "50%",
    marginLeft:"auto",
    marginRight: "auto",
};
function About(props) {
  const [stores] = useState([
    { latitude: 48.480229, longitude: 135.071917 },
  ]);
  function displayMarkers() {
    return stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  }
  return (
    <div className="map_about" >
      <Map
        google={props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 48.480229, lng:135.071917 }}
      >
        {displayMarkers()}
      </Map>
    </div>
  );
}
export default GoogleApiWrapper({
  apiKey: ""
})(About);
