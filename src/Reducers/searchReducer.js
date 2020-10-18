import { FETCH_TERM, FETCH_ID, FETCH_SINGLE, ADD_FAVID, REM_FAVID } from '../ActionCreators/ActionTypes';

const initialState = {
    data: [], id: 1 , user: {} , favid : []
}

export default function(state = initialState, action) {
    switch (action.type) {
      case FETCH_TERM:
        return {
          ...state,
          data: action.payload
        };
        case FETCH_ID:
        return {
          ...state,
          id: action.payload
        };
        case FETCH_SINGLE:
        return {
          ...state,
          user: action.payload
        };
        case ADD_FAVID:
        return {
          ...state,
          favid: [...state.favid, action.payload]
        };
        case REM_FAVID:
          const id = action.payload.id
        return {
          ...state,
          favid: state.favid.filter( (e) => e.id !== id )
        };

      default:
        return state;
    }
  }