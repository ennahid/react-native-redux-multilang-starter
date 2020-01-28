import * as types from '../actions/actionTypes';

const initialState = {
  logged: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_ERROR:
      return Object.assign({}, state, {email: ''});
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {email: action.user.email});
    default:
      return state;
  }
}
