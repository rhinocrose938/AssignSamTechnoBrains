import { FETCH_TERM, FETCH_ID, FETCH_SINGLE, ADD_FAVID, REM_FAVID } from './ActionTypes';
import axios from 'axios';


  
  export const fetchTerm = () => dispatch => {
    axios
      .get('https://reqres.in/api/users')
      .then(response =>
        dispatch({
          type: FETCH_TERM,
          payload: response.data
        })
      )
      .catch(err => console.log(err));
  };

  export const fetchId = id => dispatch => {
    dispatch({
      type: FETCH_ID,
      payload: id
    });
  };
  
  export const fetchSingle = id => dispatch => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then(response =>
        dispatch({
          type: FETCH_SINGLE,
          payload: response.data
        })
      )
      .catch(err => console.log(err));
  };

  export const favId = id => dispatch => {
    dispatch({
      type: ADD_FAVID,
      payload: id
    });
  };

  export const remId = id => dispatch => {
    dispatch({
      type: REM_FAVID,
      payload: id
    });
  };