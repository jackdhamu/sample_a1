import authenticateReducer from 'redux/Authenticate/reducer';
import usersReducer from 'redux/Users/reducer';
import theaterReducer from 'redux/Theaters/reducer';
//Include all the reducer to combine and provide to configure store.
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  authenticateReducer,
  usersReducer,
  theaterReducer,
    
}
