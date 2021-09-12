import actions from 'redux/Authenticate/actions';
import { setLocalData } from 'Config/helpers';
import { message } from 'antd';

const initialState = {
  isAuthenticated: false,
  loader: false,
  cookies: undefined,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        loader: true,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: !!action.payload,
        loader: false,
        cookies: action.payload,
      };
    case actions.LOGIN_FAILURE:
      message.error('Invalid User ID or Password. Please try again.');
      return {
        ...state,
        isAuthenticated: false,
        loader: false,
      };
    case actions.LOGOUT:
      return {
        ...state,
        loader: false,
        isAuthenticated: false,
      };
    case actions.LOGOUT_SUCCESS:
      return {
        ...state,
        loader: false,
        isAuthenticated: false,
      };
    case actions.LOGOUT_FAILURE:
      return {
        ...state,
        loader: false,
      };
    default:
      return state
  }
}

export default Reducer;
