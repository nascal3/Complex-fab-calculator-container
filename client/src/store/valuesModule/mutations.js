const SET_SEEN_INDEXES = (state, payload) => {
  state.seenIndexes = payload
}

const SET_VALUES = (state, payload) => {
  state.values = payload
}

export {
  SET_SEEN_INDEXES,
  SET_VALUES
}
