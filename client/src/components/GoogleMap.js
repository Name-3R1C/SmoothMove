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
        zoom={14} // Adjust the initial zoom level
        style={mapStyles}
        initialCenter={{
          lat: 37.7749, // Initial latitude
          lng: -122.4194, // Initial longitude
        }}
    >
        <Marker
        name={"Your Location"}
        position={{
            lat: 37.7749, // Marker latitude
            lng: -122.4194, // Marker longitude
        }}
        />
    </Map>
    );
}
}

export default GoogleApiWrapper({
apiKey: "AIzaSyBDzENywtzLCMkt_gSMuMz8TiM-R7DNqtQ",
})(GoogleMap);
