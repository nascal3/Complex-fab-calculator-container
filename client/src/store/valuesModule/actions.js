import axios from 'axios'

const fetchValues = async ({ commit }) => {
  try {
    const values = await axios.get('/api/values/current')
    commit('SET_VALUES', values.data.data)
  } catch (err) {
    throw new Error(err.message)
  }
}

const fetchIndexes = async ({ commit }) => {
  try {
    const seenIndexes = await axios.get('/api/values/all')
    commit('SET_SEEN_INDEXES', seenIndexes.data.data)
  } catch (err) {
    throw new Error(err.message)
  }
}

const submitIndex = async ({ commit, dispatch }, payload) => {
  try {
    await axios.post('/api/values', payload)
    dispatch('fetchValues')
    dispatch('fetchIndexes')
  } catch (err) {
    throw new Error(err.message)
  }
}

export {
  fetchValues,
  fetchIndexes,
  submitIndex
}
