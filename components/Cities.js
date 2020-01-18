import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, StyleSheet, Dimensions, FlatList } from "react-native";
import { AppLoading } from "expo";
import { FontAwesome } from "@expo/vector-icons";
import { activeColor } from "../components/ui/Vars";
import Loader from "../components/ui/Loader";

const Cities = ({ navigation }) => {
  const [cities, setCities] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      const res = await axios.get("http://book-service.tw1.su/city.json");
      setCities(res.data);
      setIsReady(true);
    };

    fetchCities();
  }, []);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={() => useEffect()}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <View style={[styles.container]}>
      {isReady ? (
        <FlatList
          data={cities}
          renderItem={({ item }) => {
            return (
              <View>
                <FontAwesome.Button
                  name="location-arrow"
                  style={[styles.listItem]}
                  iconStyle={styles.icon}
                  color={"#000"}
                  onPress={() => navigation.navigate("Map")}
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
};

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

export default Cities;
