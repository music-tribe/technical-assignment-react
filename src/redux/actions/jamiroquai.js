import axios from 'axios'

export const getJamiroquai = () => async dispatch => {
  const response = await axios.get('https://api.discogs.com/artists/8029')
  dispatch({
    type: 'GET_JAMIROQUAI_FULFILLED',
    payload: response.data
  })
}

export const getJamiroquaiReleases = url => async dispatch => {
  const response = await axios.get(url)
  dispatch({
    type: 'GET_JAMIROQUAI_RELEASES_FULFILLED',
    payload: response.data
  })
}
