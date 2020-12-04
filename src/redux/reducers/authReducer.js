import axios from 'axios';
import { IS_LOGGING_IN, DONE_LOGGING_IN, SET_USER } from '../types';

const initialState = {
  user: {},
  isLoggingIn: false,
  isAuthenticated: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGING_IN:
      return { ...state, isLoggingIn: true };
    case DONE_LOGGING_IN:
      return { ...state, isLoggingIn: false };
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const mockData = (state = { content: [] }, action) => {
  switch (action.type) {
    case 'LOAD_START':
      return {
        ...state,
        loading: true,
      };
    case 'LOAD_SUCCESS':
      return {
        ...state,
        content: [...action.result.data.content],
        loading: false,
      };
    case 'LOAD_FAIL':
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

const dataSuccess = result => ({
  type: 'LOAD_SUCCESS',
  result,
});

export function callMockData() {
  return async dispatch => {
    try {
      dispatch({ type: 'LOAD_START' });
      const response = await axios.get(
        `https://my.api.mockaroo.com/person/1.json?key=897142a0`,
      );

      dispatch(dataSuccess(response));
    } catch (e) {
      dispatch({ type: 'LOAD_FAIL' });
    }
  };
}
