import actions from 'redux/Theaters/actions';
import { setLocalData } from 'Config/helpers';
import { message } from 'antd';

const initialState = {
  theaterPageLoader: false, 
  theaterList: [],
  theaterData: [],
  theaterDataLoader: false,
  theaterListLoader: false,
  createTheaterDrawerVisible: false,
  searchValue: '',
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.REGISTER_THEATER:
      return {
        ...state,
        theaterDataLoader: true,
      };
    case actions.REGISTER_THEATER_SUCCESS:
      return {
        ...state,
        theaterDataLoader: false,
      };
    case actions.REGISTER_THEATER_FAILURE:
      return {
        ...state,
        theaterDataLoader: false,
      };
    case actions.GET_THEATERS:
      return {
        ...state,
        theaterListLoader: true,
      };
    case actions.GET_THEATERS_SUCCESS:
      return {
        ...state,
        theaterList: action.payload,
        theaterListLoader: false,
      };
    case actions.GET_THEATERS_FAILURE:
      return {
        ...state,
        theaterListLoader: false,
      };
    case actions.SET_THEATER_DRAWER_VISIBLE:
      return {
        ...state,
        createTheaterDrawerVisible: action.payload,
        theaterData: action.payload ? state.theaterData: [],
      };
    case actions.DELETE_THEATER:
      return {
        ...state,
        deleteLoader: true,
      };
    case actions.DELETE_THEATER_SUCCESS:
      return {
        ...state,
        deleteLoader: false,
      };
    case actions.DELETE_THEATER_FAILURE:
      return {
        ...state,
        deleteLoader: false,
      };
    case actions.SET_THEATER_DETAILS:
      return {
        ...state,
        theaterData: action.payload,
      };
    case actions.UPDATE_THEATER:
      return {
        ...state,
        theaterDataLoader: true,
      };
    case actions.UPDATE_THEATER_SUCCESS:
      return {
        ...state,
        theaterDataLoader: false,
        createTheaterDrawerVisible: false,
      };
    case actions.UPDATE_THEATER_FAILURE:
      return {
        ...state,
        theaterDataLoader: false,
      };
    case actions.SEARCH_THEATER_DETAILS:
      return {
        ...state,
        searchValue: action.payload || '',
      };
    default:
      return state
  }
}

export default Reducer;
