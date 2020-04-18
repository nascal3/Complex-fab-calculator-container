import axios from 'axios'

const fetchValues = async ({commit}) => {
  const values = await axios.get('/api/values/current')
  commit(' SET_VALUES', values.data)
}

const fetchIndexes = async ({commit}) => {
  const seenIndexes = await axios.get('/api/values/all')
  commit(' SET_SEEN_INDEXES', seenIndexes.data)
}

const submitIndex = async ({payload}) => {
  await axios.post('/api/values', payload)
}

export {
  fetchValues,
  fetchIndexes,
  submitIndex
}
