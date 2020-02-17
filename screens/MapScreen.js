import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";
import SafeAreaView from "react-native-safe-area-view";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
// const polyline = require("@mapbox/polyline");
import LightStatusBar from "../components/ui/StatusBar";
import { mapStyle } from "../Maps";

class MapScreen extends Component {
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
    }
  };

  continue = () => {
    this.props.navigation.navigate("Record");
    this.props.setFilial("Биг Вэйв");
  };

  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={[styles.container]}>
        <LightStatusBar />
        <MapView
          style={styles.mapStyle}
          customMapStyle={mapStyle}
          provider={PROVIDER_GOOGLE}
          region={this.state.region}
        >
          {/* <Polyline coordinates={coords} strokeColor="red" strokeWidth={1} /> */}
          <Marker
            coordinate={this.state.marker}
            title={`Бассейн "Биг Вэйв"`}
            description={"Грудничковое плавание"}
            // onPress={() => {
            //   console.log(`Бассейн "Биг Вэйв"`);
            // }}
            onCalloutPress={() => this.continue()}
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

const mapState = state => ({
  cities: state.City.cities,
  chosenCity: state.City.chosenCity,
  isReady: state.City.isReady
});

const mapDispatch = ({ Map: { getFilials, setFilial, setIsReady } }) => ({
  getFilials,
  setFilial,
  setIsReady
});

export default connect(mapState, mapDispatch)(MapScreen);
