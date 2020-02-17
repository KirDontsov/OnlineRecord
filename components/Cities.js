import React, { useState, useEffect, Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { View, StyleSheet, Dimensions, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { activeColor } from "../components/ui/Vars";
import Loader from "../components/ui/Loader";

class Cities extends Component {
  fetchCities = async () => {
    const res = await axios.get("http://book-service.tw1.su/city.json");
    this.props.getCities(res.data);
    this.props.setIsReady(true);
  };
  componentDidMount() {
    this.fetchCities();
  }

  continue = item => {
    this.props.setCity(item.city);
    this.props.navigation.navigate("Map");
  };

  render() {
    return (
      <View style={[styles.container]}>
        {this.props.isReady ? (
          <FlatList
            data={this.props.cities}
            renderItem={({ item }) => {
              return (
                <View>
                  <FontAwesome.Button
                    name="location-arrow"
                    style={[styles.listItem]}
                    iconStyle={styles.icon}
                    color={"#000"}
                    onPress={() => this.continue(item)}
                  >
                    {item.city}
                  </FontAwesome.Button>
                  <View style={[styles.listDivider]} />
                </View>
              );
            }}
            keyExtractor={item => item.id}
          />
        ) : (
          <Loader />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  list: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  listItem: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    zIndex: 1,
    fontSize: 40,
    fontFamily: "Montserrat",
    fontWeight: "700",
    color: "#000000",
    backgroundColor: "#fff",
    paddingLeft: 50,
    height: 50
  },
  icon: {
    position: "absolute",
    left: "5%",
    color: activeColor
  },
  listDivider: {
    alignSelf: "center",
    position: "absolute",
    zIndex: 3,
    bottom: 1,
    borderBottomColor: "#A4BFEB",
    borderBottomWidth: 0.5,
    width: "90%"
  }
});

const mapState = state => ({
  cities: state.City.cities,
  chosenCity: state.City.chosenCity,
  isReady: state.City.isReady
});

const mapDispatch = ({ City: { getCities, setCity, setIsReady } }) => ({
  getCities,
  setCity,
  setIsReady
});

export default connect(mapState, mapDispatch)(Cities);
