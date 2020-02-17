import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import AppTextTitle from "../../components/ui/AppTextTitle";
import AppButton from "../../components/ui/AppButton";
import { passiveColor } from "../../components/ui/Vars";
import Services from "../../components/quiz/Services";
import { Calendar, LocaleConfig } from "react-native-calendars";

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
    "Февр.",
    "Март",
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
  today: "Сегодня"
};
LocaleConfig.defaultLocale = "ru";

class ThirdScreen extends Component {
  continue() {
    this.props.setStep(1);
  }

  onDayPress = day => {
    this.props.setDate(day.dateString);
    this.props.navigation.navigate("Record");
  };
  render() {
    const { navigation, route } = this.props;
    // const { itemId } = route.params;
    return (
      <View>
        {/* <AppTextTitle style={styles.text}>
          {JSON.stringify(itemId)}
        </AppTextTitle> */}

        <Calendar
          current={new Date()}
          minDate={new Date()}
          onDayPress={this.onDayPress}
          markedDates={{
            [this.props.date]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: "orange"
            }
          }}
        />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   text: {
//     color: passiveColor
//   }
// });

const mapState = state => ({
  step: state.Quiz.step,
  date: state.Quiz.date
});

const mapDispatch = ({ Quiz: { setStep, setDate } }) => ({
  setStep,
  setDate
});

export default connect(mapState, mapDispatch)(ThirdScreen);
