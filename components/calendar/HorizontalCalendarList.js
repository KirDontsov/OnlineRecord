import React, { Component } from "react";

import { CalendarList } from "react-native-calendars";
import { View, Alert } from "react-native";
import Loader from "../Loader";
import { LocaleConfig } from "react-native-calendars";

LocaleConfig.locales["ru"] = {
  monthNames: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
  ],
  monthNamesShort: [
    "Янв.",
    "Фев.",
    "Мар.",
    "Апр.",
    "Май",
    "Июнь",
    "Июль.",
    "Авг.",
    "Сен.",
    "Окт.",
    "Ноя.",
    "Дек."
  ],
  dayNames: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье"
  ],
  dayNamesShort: ["Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб.", "Вс."],
  today: "Сегодня'сег"
};
LocaleConfig.defaultLocale = "ru";

export default class HorizontalCalendarList extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    return (
      <View>
        <CalendarList
          current={"2019-12-24"}
          pastScrollRange={1}
          futureScrollRange={1}
          horizontal
          pagingEnabled
          onDayPress={() => {
            Alert.alert("Нажатие на день", "Клик", [{ text: "ОК" }]);
          }}
        />
      </View>
    );
  }
}
