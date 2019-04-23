export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_JAMIROQUAI_FULFILLED':
      return {
        ...state,
        profile: {
          success: true,
          pending: false,
          error: null,
          data: action.payload
        }
      }
    case 'GET_JAMIROQUAI_RELEASES_FULFILLED':
      return {
        ...state,
        releases: {
          success: true,
          pending: false,
          error: null,
          data: action.payload
        }
      }
    default:
      return state
  }
}
