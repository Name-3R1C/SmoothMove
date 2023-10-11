import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class GoogleMap extends Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "300px", // Adjust the height as needed
    };

    return (
      <Map
        google={this.props.google}
        zoom={10} // Adjust the initial zoom level as needed
        style={mapStyles}
        initialCenter={{
          lat: 43.651070, // Greater Toronto area latitude
          lng: -79.347015, // Greater Toronto area longitude
        }}
      >
        <Marker
          name={"Your Location"}
          position={{
            lat: 43.651070, // Marker latitude
            lng: -79.347015, // Marker longitude
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBDzENywtzLCMkt_gSMuMz8TiM-R7DNqtQ",
})(GoogleMap);

