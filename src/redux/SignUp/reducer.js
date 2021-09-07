import actions from 'redux/SignUp/actions';
import { setLocalData } from 'Config/helpers';
import { message } from 'antd';

const initialState = {
  SignupPageLoader: false, 
  userList: [],
  userData: [],
  userDataLoader: false,
  userListLoader: false,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.REGISTER_USER:
      return {
        ...state,
        userDataLoader: true,
      };
    case actions.REGISTER_USER_SUCCESS:
      return {
        ...state,
        userDataLoader: false,
      };
    case actions.REGISTER_USER_FAILURE:
      return {
        ...state,
        userDataLoader: false,
      };
    default: 
      return state
  }
}

export default Reducer;
