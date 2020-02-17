import React, { useState, useEffect, Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { View, StyleSheet, Dimensions, FlatList, Text } from "react-native";
import { activeColor } from "../ui/Vars";
import Loader from "../ui/Loader";
import { Avatar, Button, Card } from "react-native-paper";

class Specialists extends Component {
  continue = item => {
    this.props.getChosenSpecialist(item.city);
    this.props.navigation.navigate("Record");
  };
  componentDidMount() {
    this.fetchSpecialists();
  }

  fetchSpecialists = async () => {
    const res = await axios.get("http://book-service.tw1.su/city.json");
    this.props.setSpecialists(res.data);
    this.props.setIsReady(true);
  };

  render() {
    return (
      <View>
        {this.props.isReady ? (
          <FlatList
            data={this.props.specialists}
            renderItem={({ item }) => {
              return (
                <Card>
                  <Card.Title
                    title={item.city}
                    subtitle={item.region}
                    left={props => (
                      <Avatar.Image
                        {...props}
                        source={{ uri: "https://picsum.photos/700" }}
                      />
                    )}
                  />

                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "stretch",
                      flexWrap: "wrap"
                    }}
                  >
                    {this.props.isReady ? (
                      this.props.specialists.map((item, i) => {
                        return (
                          <Button
                            style={{
                              minWidth: 200,
                              alignItems: "flex-start"
                            }}
                            key={i}
                            onPress={() => this.continue(item)}
                          >
                            {item.city}
                          </Button>
                        );
                      })
                    ) : (
                      <Loader />
                    )}
                  </View>
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
  }
}

const mapState = state => ({
  step: state.Quiz.step,
  specialists: state.Quiz.specialists,
  chosenSpecialist: state.Quiz.chosenSpecialist,
  isReady: state.Quiz.isReady
});

const mapDispatch = ({
  Quiz: { setStep, setSpecialists, setIsReady, getChosenSpecialist }
}) => ({
  setStep,
  setSpecialists,
  setIsReady,
  getChosenSpecialist
});

export default connect(mapState, mapDispatch)(Specialists);
