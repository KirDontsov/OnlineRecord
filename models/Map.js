export default {
  state: {
    filials: "",
    chosenFilial: "",
    isReady: false,
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
  },
  reducers: {
    getFilials: (state, payload) => ({
      ...state,
      filials: payload
    }),
    setFilial: (state, payload) => ({
      ...state,
      chosenFilial: payload
    }),
    setIsReady: (state, payload) => ({
      ...state,
      isReady: payload
    })
  }
};
