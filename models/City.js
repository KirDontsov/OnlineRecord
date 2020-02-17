export default {
  state: {
    cities: "",
    chosenCity: "",
    isReady: false
  },
  reducers: {
    getCities: (state, payload) => ({
      ...state,
      cities: payload
    }),
    setCity: (state, payload) => ({
      ...state,
      chosenCity: payload
    }),
    setIsReady: (state, payload) => ({
      ...state,
      isReady: payload
    })
  }
};
