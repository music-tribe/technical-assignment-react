// https://api.discogs.com/artists/140140 OASIS
// https://api.discogs.com/artists/8029 jamiroquai
// https://api.discogs.com/artists/140140asdasd FAIL
import axios from 'axios'

export const getJamiroquai = () => async dispatch => {
  const response = await axios.get('https://api.discogs.com/artists/140140')
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
