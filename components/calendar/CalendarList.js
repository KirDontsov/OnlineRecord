import React, { Component } from "react";

import { CalendarList } from "react-native-calendars";

export default class CalendarsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CalendarList
        current={"2019-12-24"}
        pastScrollRange={1}
        futureScrollRange={1}
      />
    );
  }
}
