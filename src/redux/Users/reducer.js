import actions from 'redux/Users/actions';

const initialState = {
  userData: [],
  userTableLoader: false,
  createUserDrawerVisible: false,
  submitLoader: false,
  userDetails: [],
  viewType: 'table',
  searchValue: undefined,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USERS:
      return {
        ...state,
        userTableLoader: true,
      };
    case actions.GET_USERS_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        userTableLoader: false,
      };
    case actions.GET_USERS_FAILURE:
      return {
        ...state,
        userData: [],
        userTableLoader: false,
      };
    case actions.SET_USER_DRAWER_VISIBLE:
      return {
        ...state,
        createUserDrawerVisible: action.payload,
        userId: null,
        userFirstName: undefined,
        userLastName: undefined,
        userEmail: undefined,
        userProfileLink: undefined,
      };
    case actions.CREATE_USER:
      return {
        ...state,
        submitLoader: true,
      };
    case actions.CREATE_USER_SUCCESS:
      return {
        ...state,
        userData: [action.payload, ...state.userData],
        submitLoader: false,
        createUserDrawerVisible: false,
      };
    case actions.CREATE_USER_FAILURE:
      return {
        ...state,
        submitLoader: false,
        createUserDrawerVisible: false,
      };
    case actions.DELETE_USER:
      return {
        ...state,
      };
    case actions.DELETE_USER_SUCCESS:
      return {
        ...state,
        userData: state.userData.filter(data => data.id !== action.payload),
      };
    case actions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    case actions.SEARCH_USER_DETAILS:
      return {
        ...state,
        searchValue: action.payload,
      };
    case actions.HANDLE_VIEW_TYPE:
      return {
        ...state,
        viewType: action.payload,
      };
    default:
      return state;
  }
}

export default Reducer;
