// import React, { Component } from "react";
// import { View } from "react-native";
// import { connect } from "react-redux";
// import AppText from "../ui/AppText";
// import AppButton from "../ui/AppButton";
// import FirstScreen from "../../screens/quiz/FirstScreen";

// class Quiz extends Component {
//   render() {
//     const { navigation } = this.props;
//     const { step } = this.props;
//     switch (step) {
//       case 0:
//         return (
//           <View>
//             <AppButton
//               title="Выбрать специалиста"
//               onPress={() => this.props.setStep(1)}
//             />
//             <AppButton
//               title="Выбрать услугу"
//               onPress={() => this.props.setStep(2)}
//             />
//             <AppButton
//               title="Выбрать время"
//               onPress={() => this.props.setStep(3)}
//             />
//           </View>
//         );
//       case 1:
//         return <FirstScreen />;
//     }
//   }
// }

// const mapState = state => ({
//   step: state.Quiz.step
// });

// const mapDispatch = ({ Quiz: { setStep } }) => ({
//   setStep
// });

// export default connect(mapState, mapDispatch)(Quiz);
