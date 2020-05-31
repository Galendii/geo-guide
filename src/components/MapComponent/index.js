import React from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

// import { Container } from './styles';

const MapComponent = ({ countryData }) => {
  return (
    <MapView
      provider={"google"}
      style={{ flex: 1 }}
      region={{
        latitude: countryData[0].latlng[0],
        longitude: countryData[0].latlng[1],
        latitudeDelta: 15,
        longitudeDelta: 15,
      }}
    >
      <Marker
        coordinate={{
          latitude: countryData[0].latlng[0],
          longitude: countryData[0].latlng[1],
        }}
        title={countryData[0].name}
      />
    </MapView>
  );
};

export default MapComponent;
