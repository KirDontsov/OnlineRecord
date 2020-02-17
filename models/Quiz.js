export default {
  state: {
    step: 0,
    item: "",
    specialists: "",
    chosenSpecialist: "",
    service: "",
    date: "",
    time: "",
    isReady: false
  },
  reducers: {
    setStep: (state, payload) => ({
      ...state,
      step: payload
    }),
    setItem: (state, payload) => ({
      ...state,
      item: payload
    }),
    setSpecialists: (state, payload) => ({
      ...state,
      specialists: payload
    }),
    getChosenSpecialist: (state, payload) => ({
      ...state,
      chosenSpecialist: payload
    }),
    setService: (state, payload) => ({
      ...state,
      service: payload
    }),
    setDate: (state, payload) => ({
      ...state,
      date: payload
    }),
    setTime: (state, payload) => ({
      ...state,
      time: payload
    }),
    setIsReady: (state, payload) => ({
      ...state,
      isReady: payload
    })
  }
};
