export default {
  state: {
    count: 0
  },
  reducers: {
    setCount: (state, payload) => ({
      ...state,
      count: payload
    })
  }
};
