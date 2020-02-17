import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, StyleSheet, Dimensions, FlatList, Text } from "react-native";
import { activeColor } from "../ui/Vars";
import Loader from "../ui/Loader";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const Services = ({ navigation }) => {
  const [services, setServices] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      const res = await axios.get("http://book-service.tw1.su/city.json");
      setServices(res.data);
      setIsReady(true);
    };

    fetchCities();
  }, []);

  return (
    <View>
      {isReady ? (
        <FlatList
          data={services}
          renderItem={({ item }) => {
            return (
              <Card onPress={() => navigation.navigate("Record")}>
                <Card.Title
                  title={item.city}
                  subtitle={item.region}
                  left={props => <Avatar.Icon {...props} icon="folder" />}
                />
                <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
                <Card.Actions>
                  <Button>1000 руб.</Button>
                  <Button>Подробнее об услуге</Button>
                </Card.Actions>
              </Card>
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

export default Services;
