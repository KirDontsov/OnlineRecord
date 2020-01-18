import React, { Component } from "react";
// import styled from "styled-components/native";
import { Text, View, Button, StyleSheet, Dimensions } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import LightStatusBar from "../components/StatusBar";
import { mapStyle } from "../Maps";

export default class MapScreen extends Component {
  state = {
    region: {
      latitude: 44.5622,
      longitude: 38.0848,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    marker: {
      latitude: 44.5622,
      longitude: 38.0848
    },
    title: ""
  };

  render() {
    const { navigation, title } = this.props;
    return (
      <SafeAreaView style={[styles.container]}>
        <LightStatusBar />

        <MapView
          style={styles.mapStyle}
          customMapStyle={mapStyle}
          provider={PROVIDER_GOOGLE}
          region={this.state.region}
        >
          <Marker
            coordinate={this.state.marker}
            title={`Бассейн "Биг Вэйв"`}
            description={"Дичайшая хуета"}
            onPress={() => {
              console.log(`Бассейн "Биг Вэйв"`);
            }}
            onCalloutPress={() =>
              navigation.navigate("Record", { title: `Бассейн "Биг Вэйв"` })
            }
          ></Marker>
        </MapView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});