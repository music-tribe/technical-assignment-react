
import axios from 'axios'

export const getOasis = () => async dispatch => {
  const response = await axios.get('https://api.discogs.com/artists/8029')
  dispatch({
    type: 'GET_OASIS_FULFILLED',
    payload: response.data
  })
}

export const getOasisReleases = url => async dispatch => {
  const response = await axios.get(url)
  dispatch({
    type: 'GET_OASIS_RELEASES_FULFILLED',
    payload: response.data
  })
}
