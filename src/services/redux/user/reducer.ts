import { stateType } from './interface';
import type from './type';

const initialState = {
  user: null,
  isLogin: false,
};
const userReducer = (state:stateType = initialState, action) => {
  switch (action.type) {
    case type.loginSuccess:
      return {
        ...state,
        user: action?.payload,
        isLogin: true,
      };
    case type.logOut:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;